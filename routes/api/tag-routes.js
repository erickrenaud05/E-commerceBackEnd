const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try{
    const tags = await Tag.findAll({
      include: [
        {
          model: Product, 
          include: {model: Category}, 
          attributes: {exclude: ['category_id', 'categoryId']},
          through: {ProductTag, attributes: []},
        },
      ],
    });

    if(!tags){
      res.status(404).json('No tags found');
      return;
    }

    res.status(200).json(tags);
    return;
  }catch(err){
    res.status(500).json(err);
    return;
  }
});

router.get('/:id', async(req, res) => {
  if(isNaN(req.params.id)){
    res.status(400).json('Invalid id');
    return;
  }

  try{
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product, 
          include: {model: Category}, 
          attributes: {exclude: ['category_id', 'categoryId']},
          through: {ProductTag, attributes: []},
        },
      ],
    });

    if(!tag){
      res.status(404).json('Tag not found');
      return;
    }

    res.status(200).json(tag);
    return;
  }catch(err){
    res.status(500).json('Internal server error');
    return
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
