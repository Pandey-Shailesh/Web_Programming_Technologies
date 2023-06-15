const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
dotenv.config({ path: "./.env" });
const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MySQL Connected Successfully..");
  }
});
//Defining different routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(3000, () => {
  console.log("server started on Port no 3000..");
});
