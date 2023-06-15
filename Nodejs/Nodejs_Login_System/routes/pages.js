const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  //res.send("<h1>Home Page!!!!!</h1>");
  res.render("index");
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
// It is very very important
module.exports = router;
