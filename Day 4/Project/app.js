/**
 * Created by treesseven on 3/4/2017.
 */

const fs = require("fs");
const express = require("express");
var handle_request = require("./handle_request")
var app = express();

var getPage = "/getUser";
var postPage = "/postUser";
var editPage = "/editUser/:username"
// var bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

var router = express.Router();
app.use(router)

router.post(postPage, (req, resp) => {handle_request.post(req, resp)})
router.get(getPage, (req, resp) => {handle_request.get(req, resp)});
router.put(editPage, (req, resp) => {handle_request.put(req, resp)})

var server = app.listen(6969, () => {
    console.log("Server run at localhost:6969")
})