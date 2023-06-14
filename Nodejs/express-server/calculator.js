const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //res.send("<h1><center>Hello Express App</center></h1>");
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var sum = n1 + n2;
  res.send("Total = " + sum);
});
app.get("/contact", (req, res) => {
  res.send("<h1><center>Contact Us Page!!!!!!</center></h1>");
});
app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});