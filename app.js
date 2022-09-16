const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const session = require('express-session-jwt')
const router  = require('./routers/routers');

const app = express();
dotenv.config();

app.use(morgan('combined'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  keys: {
    public: '-----BEGIN PUBLIC KEY-----\n\n-----END PUBLIC KEY-----',
    private: '-----BEGIN EC PRIVATE KEY-----\n\n-----END EC PRIVATE KEY-----'
  },
  resave:false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(router);
app.listen(3000,()=>{
  console.log('Server Running..')
});
