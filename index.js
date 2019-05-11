// Mongo Scheme
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const listSchema = new Schema({
//   description: String,
//   completed: Boolean
// });

const mysql = require("mySql");

const db = mysql.createConnection({
  user: "root",
  password: "almost1!",
  database: "hrnyc22"
});

db.connect(err => {
  if (err) throw err;
  else console.log("connected to the mysql database, YAS YAS YAS");
});
