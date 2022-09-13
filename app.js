const express = require('express');
const morgan = require('morgan');
const router  = require('./routers/routers');

const app = express();
app.use(morgan('combined'));


app.use(router);
app.listen(3000,()=>{
  console.log('Server Running..')
});