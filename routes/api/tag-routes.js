const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//-----GET API - FIND ALL TAGS-----//
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        through: ProductTag,
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  });
  // be sure to include its associated Product data
});

//-----GET API - FIND ONE TAG-----//
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        through: ProductTag,
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err)
    res.status(404).json({message: 'No tag was found with this id'});
  });
});

//-----POST API - ADD A TAG-----//
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  });
});

//-----PUT API - UPDATE A TAG-----//
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({message: 'No tag found for this id!'})
      return;
    }
    res.json(dbData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

//-----DELETE API - DELETE A TAG-----//
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({message: 'No tag found for this id!'})
      return;
    }
    res.json(dbData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

module.exports = router;