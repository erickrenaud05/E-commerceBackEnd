const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const categories = await Category.findAll({
      include: Product,
    });

    if(!categories){
      res.status(404).json('No categories found');
      return;
    }

    res.status(200).json(categories);
    return;
  } catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  if(!isNaN(req.params.id)){
    try{
      const category = await Category.findByPk(req.params.id, {
        include: Product,
      });

      if(!category){
        res.status(404).json('Category not found!');
        return;
      }

      res.status(200).json(category);
      return;
    } catch(err){
      res.status(500).json(err);
      return;
    }
  }

  res.status(400).json('Invalid id');
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
