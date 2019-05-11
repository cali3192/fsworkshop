// Mongo Scheme
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const listSchema = new Schema({
//   description: String,
//   completed: Boolean
// });

const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  password: "almost1!",
  database: "hrnyc22"
});

db.connect(err => {
  if (err) throw err;
  else console.log("connected to MySQL!");
});

// schema is here
db.query(
  `
  use hyrnyc22
  create table if not exists todos (
    id integer auto_increment,
    description varchar(255) null,
    completed bool default false,
    primary key(id)
  )`,
  err => {
    if (err) console.log(err);
    else console.log("`todos` table created!");
  }
);

// Express server stuff

const express = require("express");
const parser = require("body-parser");

app.use(express.static(__dirname));
app.use(parser.json());

// routes
app.get("/todos", (req, res) => {
  // get info from db
  // needs a cb because it might takea while toload
  db.query(`SELECT * FROM todos`, (err, data) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
});
app.post("/todos", (req, res) => {
  const { description } = req.body;
  db.query(`INSERT INTO todos (description) values (?)`[description]);
});

const app = express();
app.listen(3000, () => {
  console.log(`she is connected on port ${port}!!!`);
});
