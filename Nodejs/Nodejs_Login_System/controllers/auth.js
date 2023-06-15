const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

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

exports.login = async (req, res) => {
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
        console.log(results);

        if (
          results.length == 0 ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          return res.render("login", {
            massage: "Invalid email or password",
          });
        } else {
          const id = results[0].id;
          const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          console.log("Token generated is :" + token);
          const cookieOptios = {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIES_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("jwt", token, cookieOptios);
          res.redirect("/");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};


//profile page
exports.isLoggedIn = async(req,res,next)=>{
if (req.cookie.jwt) {
try {
constdecode = await promisify(jwt.verify)(
  req.cookie.jwt,
process.env.JWT_SECRET
);
console.log(decoded);
db.query("select * from user where id =?",[decoded.id],(error,results)=>{console.log(results);
if (condition) {

} else {

}});
} catch (error) {
console.log{error};
}
}
}