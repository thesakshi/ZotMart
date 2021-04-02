const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

//Whenever the Url goes to /hello, the message written in the controller is sent.
//A get request that calls our controller
router.get('/hello', controllers.hello);


module.exports = router;