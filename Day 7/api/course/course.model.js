/**
 * Created by treesseven on 3/14/2017.
 */
const mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    title: String,
    img: String,
    description: String
});

module.exports = mongoose.model("Course", courseSchema)