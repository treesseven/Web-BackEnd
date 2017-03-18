/**
 * Created by treesseven on 3/4/2017.
 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var Cat = mongoose.model("Cat", {name: {
    type : Number,
    required : true
}});

var cat1 = new Cat({name: 1});

cat1.save().then((doc) => {
    console.log(doc);
}, (error) => {
    console.log(error)
})
