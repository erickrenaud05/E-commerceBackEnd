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
    return;
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
  return;
});

router.post('/', async(req, res) => {
  if(!req.body.name){
    res.status(400).json('Bad request');
    return;
  }
  try{
    const newCategory = await Category.create({
      category_name: req.body.name,
    });

    if(!newCategory){
      res.status(500).json('Internal server error');
    }

    res.status(201).json(newCategory);
    return;

  } catch(err){
    res.status(500).json('Internal server error');
    return;
  }

});

router.put('/:id', async(req, res) => {
  if(isNaN(req.params.id) || !req.body.name){
    res.status(400).json('invalid request');
    return;
  }

  try{
    const updatedCategory = await Category.update(
      { category_name: req.body.name },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      },
    );

    res.status(200).json(updatedCategory);
    return;
  }catch(err){
    res.status(500).json(err);
    return;
  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
