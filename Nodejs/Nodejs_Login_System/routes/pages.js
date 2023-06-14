const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("<h1><center><Home Page</center></h1>");
  res.render("index");
});
router.get("/register", (req, res) => {
  res.render("register");
});

//It is very important
module.exports = router;
