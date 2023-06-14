console.log("Hi welcome to the world of Coders");
const fs =require("fs");

fs.readFile('notes.txt', "utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  });