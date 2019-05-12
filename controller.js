const db = require("./db");

const getTodos = (req, res) => {
  // get info from db
  // needs a cb because it might takea while toload
  db.query(`SELECT * FROM todos`, (err, data) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
};

const postTodos = (req, res) => {
  const { description } = req.body;
  db.query(
    `INSERT INTO todos (description) values (?)`[description],
    (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
};

module.exports = {
  getTodos,
  postTodos
};
