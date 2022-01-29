const router = require("express").Router();
const path = require("path");

router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
});

module.exports = router;
