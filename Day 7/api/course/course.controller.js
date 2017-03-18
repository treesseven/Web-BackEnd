/**
 * Created by phanmduong on 15/03/2017.
 */
var Course = require('./course.model.js');

module.exports = {
  getAll : function (req, res){
      Course.find(function(docs, err){
         if (err) {
             res.send(err)
         } else {
             res.json(docs)
         }
      });

  },

  create: function (req, res){
      // res.send("Create a course");
      console.log(req.body);
      var newCourse = new Course(req.body);
      newCourse.save(function(err, doc){
          if (err) {
              res.send(err)
          } else {
              res.send("Created in database");
          }
      });

  },

  editOne: function(req, res){
      var query = {name: req.params.name};
      var newData = req.body;
      console.log(newData);
      console.log(query)
      Course.findOneAndUpdate(query, newData, function(err, doc){
          if (err) {
              res.send(err)
          } else {
              if (doc) {
                  res.send("succesfully edited in database")
              } else {
                  res.send("document not found")
              }
          }
      })
  },

  deleteOne: function(req, res){
      var query = {name: req.params.name};
      Course.deleteOne(query, function(err){
          if (err) {
              res.send(err)
          } else {
              res.send("successfully deleted")
          }
      })
  }
};