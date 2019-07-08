var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

//Get hello world page
router.get("/helloworld", (req, res) => {
  res.render("helloworld", { title: "Hello, world!", name: "pankaj" });
});

//Get userlist page
router.get("/userlist", (req, res) => {
  var db = req.db;
  var collection = db.get("usercollection");

  collection.find({}, {}, (e, docs) => {
    res.render("userlist", { userlist: docs });
  });
});

//Get new user page
router.get("/newuser", (req, res) => {
  res.render("newuser", { title: "Add new user" });
});

//Post to add new user
router.post("/adduser", (req, res) => {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get("usercollection");

  //Submit to DB
  collection.insert(
    {
      username: userName,
      email: userEmail
    },
    (err, doc) => {
      if (err) {
        // If it failed, return error
        res.send("There was a  problem adding the user to DB");
      } else {
        //Add forward to success page
        console.log(doc);
        res.redirect("userlist");
      }
    }
  );
});

module.exports = router;
