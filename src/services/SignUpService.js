const userExec = require('../repositories/UserRepositoryExec');
const userRepo = require('../repositories/UserRepositoryView');
const bcrypt = require('bcrypt');

async function create(req){
  const jsonBody  = req.body;
  const password = jsonBody.password;
  const salt = await bcrypt.genSalt(5);

  const chkUser = await userRepo.findByUsername(jsonBody.username);
  if(chkUser.length>0){
    return false;
  }

  jsonBody.password = await bcrypt.hash(password, salt);
  const result = userExec.create(jsonBody);
  if(!result){
    return false;
  }else{
    return result;
  }


}

module.exports = {
  create
}