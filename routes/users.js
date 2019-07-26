var express = require("express");
var router = express.Router();
const User = require("./../model/user");

/* GET users listing. */
router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(error => {
      res.status(400).send(error);
    });
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
