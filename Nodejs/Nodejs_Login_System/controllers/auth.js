const mysql = require("mysql");
var bcrypt = require("bcryptjs");
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// const name = req.body.name;
// const email = req.body.email;
// const password = req.body.password;
// const passwordConfirm = req.body.passwordConfirm;

exports.register = (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;
};
