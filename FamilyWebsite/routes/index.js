'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'Welcome to my family info page' });
});

router.get('/abhijeet', function (req, res) {
    res.render('abhijeet', { title: 'Here is the Abhijeet\'s info' });
});

router.get('/kulwinder', function (req, res) {
    res.render('kulwinder', { title: 'Here is the Kulwinder\'s info' });
});

router.get('/veena', function (req, res) {
    res.render('veena', { title: 'Here is the Veena\'s info' });
});

module.exports = router;
