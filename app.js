const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const router  = require('./routers/routers');

const app = express();
dotenv.config();
app.use(morgan('combined'));
app.use(express.json());

app.use(router);
app.listen(3000,()=>{
  console.log('Server Running..')
});