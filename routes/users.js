var express = require('express');
var usersRouter = express.Router();
const cors = require('./cors');

usersRouter.route('/')
// GET 
.get(cors.corsWithOptions, (req, res, next) => {
  try {
    res.send('respond with a resource');
  }
  catch (err) {
    new Error(err.message)
  }
})

// POST 
.post(cors.corsWithOptions, async (req, res, next) => {
  // DEBUGGER 
  try {
    console.log(`request body: ${req.body}`)
    console.log(`request email: ${req.body.email}`)
    console.log(`request password: ${req.body.password}`)
    if(!req.body) {
      console.error('missing request body')
      res.send('missing request body')
    }
    if (!req.body.email || !req.body.password) {
      console.error('check request');
      res.send('check request');      
    }
    else {
      // res.send('request accepted');
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(req.body);
    }
  }
  catch (err) {
    console.error(err.message)
  }
  // END DEBUGGIN
})








module.exports = usersRouter;
