const {body, validationResult } = require('express-validator');


const signUpValidate = (req,res,next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    console.log("result error");
    return res.status(400).json(errors);
  }else{
    next();
  }


}

module.exports = {
  signUpValidate,
}