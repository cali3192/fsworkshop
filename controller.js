const db = require("./db");

exports.getTodos = (req, res) => {
  // get info from db
  // needs a cb because it might takea while toload
  db.query(`SELECT * FROM todos`, (err, data) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
};

exports.postTodos = (req, res) => {
  const { description } = req.body;
  db.query(`INSERT INTO todos (description) values (?)`[description]);
};
