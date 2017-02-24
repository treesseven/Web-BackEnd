let fs = require("fs");
let readFile = (file, callback) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        callback(error)
      }
      let str = data.toString();
      let array = str.split('\n');
      console.log(array);
      callback(error, array);
      // array.forEach(line, index) => {
      //   console.log(index + ' '+ line)
      // };
  })
}

let writeFile = (file, data, callback) => {
  data = data + '\n'
  fs.appendFile(file, data, (error) => {
    if (error) {
      callback(error)
    }
  })
}


module.exports.readFile = readFile;
module.exports.writeFile = writeFile;
