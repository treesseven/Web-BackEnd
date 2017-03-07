/**
 * Created by treesseven on 3/7/2017.
 */

var mongoose = require('mongoose');

var db = mongoose.connection;

var personSchema = new mongoose.Schema({
    name: String, age: Number, title: String
}) ;

var Person = mongoose.model("Person", personSchema);

mongoose.connect('mongodb://localhost/test');
var creatDoc = (Collection, jsonData, callback) => {
    let foundCollection = mongoose.model(Collection)
    person = new foundCollection(jsonData);
    person.save().then((document) => {
        console.log(jsonData)
        callback(null,document)
    }, (error) => {
        callback(error)
    });
};

var readDoc = (Collection, callback) => {
    let foundCollection = mongoose.model(Collection);
    foundCollection.find({}, (error, docs) => {
        if (error) {
            callback(error)
        } else {
            callback(error, docs)
        }
    })
};

var updateDoc = (Collection, conditions, newDoc, callback) => {
    let foundCollection = mongoose.model(Collection);
    foundCollection.findOneandUpdate(conditions, newDoc, {upsert:true}, (error, doc) => {
        if (error) {
            callback(error)
        } else {
            callback(error, doc)
        }
    })
};

module.exports.creatDoc = creatDoc;
module.exports.readDoc = readDoc;
module.exports.updateDoc = updateDoc;