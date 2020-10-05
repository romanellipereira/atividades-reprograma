// instâncias:
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

// rotas:
const index = require("./routes/index");
const books = require("./routes/booksRoute");
const employees = require("./routes/employeesRoute");

// app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

app.use("/", index);
app.use("/books", books);
app.use("/employees", employees);

module.exports = app;