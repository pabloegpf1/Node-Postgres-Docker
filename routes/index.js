const express = require('express');
const router = express.Router();
const controllers = require('../controllers/')

/* GET home page. */
router.get('/', function (req, res, next) {
  controllers.users.showUsers(req,res)
})

module.exports = router;
