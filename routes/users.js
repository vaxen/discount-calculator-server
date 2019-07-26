var express = require("express");
var router = express.Router();
const User = require("./../model/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

module.exports = router;
