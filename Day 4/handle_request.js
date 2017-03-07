/**
 * Created by treesseven on 3/7/2017.
 */
var mongoose = require("./mongoose_node");
const express = require("express");
var app = express();
var router = express.Router();
app.use(router);

var post = (req, resp) => {
    data = req.body;
    mongoose.creatDoc("Person",data, (error, docs) => {
        screenPrint(error, docs, resp)
    })
}

var get = (req, resp) => {
    mongoose.readDoc("Person", (error, docs) => {
        screenPrint(error, docs, resp)
    })
}

var put = (req, resp) => {
    conditions = {name : req.params.name}
    data = req.body
    mongoose.updateDoc("Person", conditions, data,(error, docs) => {
        screenPrint(error, docs, resp)
    } )
}

var screenPrint = (error, data, resp) => {
    if (error) {
        resp.end(error)
    } else {
        resp.json(data)
    }
}

module.exports.put = put;
module.exports.get = get;
module.exports.post = post;