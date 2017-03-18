/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');
var controller = require('./course.controller.js');
var router = express.Router();
var requestParam = ':name'

router.get('/getAll', controller.getAll);
router.post('/create', controller.create);
router.put('/edit/'+requestParam, controller.editOne);
router.delete('/delete/'+requestParam, controller.deleteOne)

module.exports = router;