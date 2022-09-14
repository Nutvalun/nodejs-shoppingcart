const express = require('express');
const router  = express.Router();
const ProductController = require("../src/Controller/ProductController");
const UserController = require("../src/Controller/UserController");
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

router.post('/user/signup',
  UserController.signUp
);

router.post('/user/signin',
  UserController.signIn
);

module.exports  = router;