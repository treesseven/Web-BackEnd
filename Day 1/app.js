// let readFile = require("readFile")
fileUltils = require("./FileUltils")

input = process.argv[2]
output = process.argv[3]

//lấy dữ liệu từ file inpupt
fileUltils.readFile(input, (error, data) =>{
  if (error) { console.log(error) }
//xử lý file input
  let array = [];
  data.pop();
  data.forEach((value) =>{
    [alpha, count] = value.split(' ');
    i = checkavail(alpha, array);

    if (i >= 0) {
      t = parseInt(array[i].split(" ")[1]);
      array[i] = alpha + " " + (parseInt(count)+t);
    } else {
      array.push(alpha + " " + count);
    }
    console.log(array);

  });

//ghi ra file ouput
  array.forEach((value) =>{
    fileUltils.writeFile(output, value, (error) =>{
      if (error) {console.log(error)};
    })
  });


});

let checkavail = (alpha, array) => {
  let res = -1
  array.forEach((value, index) =>{
    let line = value.split(" ");
    if (alpha === line[0]) {
      res = index;
    }
  })
  return res;
}
