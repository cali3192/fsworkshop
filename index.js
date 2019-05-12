// Express server stuff

const express = require("express");
const parser = require("body-parser");
const routes = require("./routes.js");

const app = express();

app.use(express.static(__dirname));
app.use(parser.json());

// routes
// app.get("/todos");
// app.post("/todos");

app.use("/todos", routes);

const port = 3010;
app.listen(port, () => {
  console.log(`she is connected on port ${port}!!!`);
});

// server function runs
// router converts intent to action
// controller/request handler runs
// or model function invoked(cb => {
// response gets sent to the client
// })
