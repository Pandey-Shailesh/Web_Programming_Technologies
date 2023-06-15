const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   const passwordConfirm = req.body.passwordConfirm;

//registration
exports.register = (req, res) => {
  console.log(req.body);
  const { name, email, password, passwordConfirm } = req.body;
  db.query(
    "SELECT email FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("register", {
          message: "That email is already in use",
        });
      } else if (password !== passwordConfirm) {
        return res.render("register", {
          message: "Passwords do not match",
        });
      }
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);
      //res.send("testing");
      db.query(
        "INSERT INTO users SET ?",
        { name: name, email: email, password: hashedPassword },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("register", {
              message: "User registered",
            });
          }
        }
      );
    }
  );
};

//login code

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.render("login", {
        message: "Pls provide email and password",
      });
    }
    db.query(
      "select * from users where email = ? ",
      [email],
      async (error, results) => {
        if (!results || (await bcrypt.compare(password, results[0].password))) {
          return res.render("login", {
            massage: "Invalid email or password",
          });
        } else {
          return res.render("index");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
