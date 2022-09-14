const baseController  = require('../Controller/BaseController');
const signUpService = require("../services/SignUpService");

const inCart = async function(req,res){
  return  res.status(400).json({"data":"adasdasdas"});

}

const addCart = async function(req,res){

}

const removeCart = async function(req,res){

}

const checkOut = async function(req,res){

}

module.exports = {
  inCart,
  addCart,
  removeCart,
  checkOut
}