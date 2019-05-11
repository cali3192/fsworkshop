const router = require("express");
const { getTodos, postTodos } = require("./controller.js");

router
  .route("/")
  .get()
  .post();

module.exports = router;
