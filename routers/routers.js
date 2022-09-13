const express = require('express');
const router  = express.Router();
const ProductController = require("../src/Controller/ProductController");
const path  = require('path');

router.get('/',function (req,res){
  res.send('hello Main');
});
router.get('/product',
  ProductController.showProductAll
);
router.get('/product/:id',
  ProductController.showProductId
);

module.exports  = router;