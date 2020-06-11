'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var potentialNames = ['Jacob', 'Bob', 'Mike'];
    var randomName = potentialNames[Math.floor(Math.random() * potentialNames.length)];
    res.render('users', { 'name': randomName });
});

module.exports = router;
