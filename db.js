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

db.query(
  `create table if not exists todos (
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

module.exports = db;
