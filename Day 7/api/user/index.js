/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();

router.get('/hello', function (req, res) {
    res.send('User module');
});

router.post('/create', function (req, res) {
    res.send('user module create');
});

module.exports = router;