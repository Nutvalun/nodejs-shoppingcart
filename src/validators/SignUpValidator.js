const {body, validationResult } = require('express-validator');
body("email").isEmail();
body("username").notEmpty().isLength({min:5,max:10});
body("password").isLength({min:5});
const signUpValidate = async function(req,res){

  const errors = await validationResult(req);
  if(!errors.isEmpty()){
    console.log("result error");
    return res.status(400).json({"error":"ddddd"});
  }else{
    return res.status(200).json({"response":"success"});
  }


}

module.exports = {
  signUpValidate,
}