function returnSuccess(message = 'success', data = null) {
  if(data==null){
    return {
      "result": "Success",
      "message": message
    };

  }
  return {
    "result": "Success",
    "message": message ,
    "data" : data
  };
}

function returnError(message = 'error') {
  return {
    "result": "Error",
    "message": message
  };
}

module.exports = {
  returnSuccess,
  returnError
}