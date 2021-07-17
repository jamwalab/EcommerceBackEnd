const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        include: {
          model: Tag,
          attributes: ['tag_name'],
          through: ProductTag,
        }
      }
    ]
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({message: 'No categoty found for this id!'})
      return;
    }
    res.json(dbData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({message: 'No categoty found for this id!'})
      return;
    }
    res.json(dbData)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({message: 'No categoty found for this id!'})
      return;
    }
    res.json(dbData)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  })
});

module.exports = router;
