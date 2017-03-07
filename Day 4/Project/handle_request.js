/**
 * Created by treesseven on 3/7/2017.
 */
mongoose = require("./mongoose_node");
const express = require("express");
app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var post = (req, resp) => {
    data = JSON.parse(req.body);
    mongoose.creatDoc("Person", data)
}

var get = (req, resp) => {
    mongoose.readDoc("Person", (error, docs) => {
        callback(error, docs, resp)
    })
}

var put = (req, resp) => {
    conditions = {"name" : req.params.name}
    data = JSON.parse(req.body)
    mongoose.updateDoc("Person", condition, data,(error, docs) => {
        callback(error, docs, resp)
    } )
}

var callback = (error, data, resp) => {
    if (error) {
        resp.end(error)
    } else {
        resp.end(data)
    }
}

module.exports.put = put;
module.exports.get = get;
module.exports.post = post;