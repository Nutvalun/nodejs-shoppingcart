const baseController  = require('../Controller/BaseController');
const addCartService  = require('../services/AddCartService');
const removeCartService  = require('../services/RemoveCartService');

const inCart = async function(req,res){
  return  res.status(400).json(req.session.sessInCart);
}

const addCart = async function(req,res){
  try{
    await addCartService.add(req);
    return  res.status(200).json(baseController.returnSuccess("Add item to cart Success!!"));
  }catch (error) {
    return  res.status(400).json(baseController.returnError(error));
  }
}

const removeCart = async function(req,res){
  try{
    await removeCartService.remove(req);
    return  res.status(200).json(baseController.returnSuccess("Remove item from cart success!!"));
  }catch (error) {
    return  res.status(400).json(baseController.returnError(error));
  }
}

const checkOut = async function(req,res){

}

module.exports = {
  inCart,
  addCart,
  removeCart,
  checkOut
}