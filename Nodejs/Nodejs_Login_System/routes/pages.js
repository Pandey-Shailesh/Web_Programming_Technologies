const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
router.get("/", isLoggedIn, (req, res) => {
  //res.send("<h1>Home Page!!!!!</h1>");
  res.render("index", {
    user: req.user,
  });
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/profile", authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
  res.render("profile");
});
// It is very very important
module.exports = router;
