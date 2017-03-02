const express = require("express");
const fs = require("fs");
var app = express();

var getPage = "/getUser";
var postPage = "/postUser";
var dataFile = __dirname + "/" + "user.json"
var editPage = "/editUser/:username"

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();
app.use(router);

app.get(getPage, (request, response) => {
  fs.readFile(dataFile, (error, data) => {
    if (error) {
      response.end(error);
    } else {
      response.end(data);
    }
  })
})

app.post(postPage, (request, response) => {
  let data = request.body;
  // let jsonData = JSON.parse(data);

  fs.writeFile('user.json',JSON.stringify(data), (error) => {
    if (error) {
      response.end(error);
    }});
    response.json(data)
})

app.put("/editUser/:username", (request, response) => {
  username = request.params.username;
  // fs.readFile(dataFile, (error, data) =>{
  //   if (error) {
  //     resonse.end(error);
  //   } else {
  //     tempData = JSON.parse(data);
  //     //console.log(tempData)
  //     for (var value in tempData) {
  //       if
  //     }
  //   }
  // })
  fs.readFile(dataFile, (error, data) => {
    if (error) {
      response.end(error)
    } else {
      let tempData = JSON.parse(data);
      let found = false;
      // console.log(tempData);
      for (var key in tempData) {
        console.log(tempData[key]["name"])
        if (tempData[key]["name"] == username) {
          tempData[key] = request.body;
          found = true;
          fs.writeFile(dataFile, JSON.stringify(tempData), (error) => {
            if (error) {
              response.end(error)
            };
          })
        }
      }
      if (found == false) {
        response.end("user not found")
      }
    }
  })
})
// app.post(postPage, (request, response))
//Router turn on

var server = app.listen(6969, () => {
  console.log("Server running at localhost port 6969")
})
