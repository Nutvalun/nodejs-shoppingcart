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
    public: '-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEOu0YLp1/vWryZiouRZVY9ULhnFc9xbZ4\nwOb550aQ5ffGy8QfdYjmMzNPKSMutNobCMRHd9xPZTZhlDEMJLtVgA==\n-----END PUBLIC KEY-----',
    private: '-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIGL6OGgEB6ZmJCR93cZrn7I9jSBhdFf0kLVAmN20l0XXoAcGBSuBBAAK\noUQDQgAEOu0YLp1/vWryZiouRZVY9ULhnFc9xbZ4wOb550aQ5ffGy8QfdYjmMzNP\nKSMutNobCMRHd9xPZTZhlDEMJLtVgA==\n-----END EC PRIVATE KEY-----'
  },
  resave:false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(router);
app.listen(3000,()=>{
  console.log('Server Running..')
});