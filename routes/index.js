const express = require('express');
const router = express.Router();
const controllers = require('../controllers/')

router.get('/', function (req, res, next) {
  controllers.showIndexPage(req,res);
})

router.get('/users', function (req, res, next) {
  controllers.users.showUsers(req,res);
})

module.exports = router;
