const baseController  = require('../Controller/BaseController');
const signUpService   = require('../services/SignUpService');
const signInService   = require('../services/SignInService');

const signUp = async function(req,res){
  const result = await signUpService.create(req);
  if(result===false){
    return  res.status(400).json(baseController.returnError("Can not create user!!"));
  }else{
    return  res.status(200).json(baseController.returnSuccess("Create User Success!!"));
  }
}

const signIn  = async function(req,res){
  const user = await signInService.signIn(req);
  if(user===false){
    return  res.status(400).json(baseController.returnError("Can not sign in!!"));
  }else{
    const userToken = await signInService.createToken(user);
    return  res.status(200).json(baseController.returnSuccess("Sign In Success!!",{"token": userToken}));
  }
}

module.exports = {
  signUp,
  signIn
}

