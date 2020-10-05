const books = require("../model/books.json");
const fs = require("fs");
// const { json } = require("body-parser");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(books);
};




module.exports = {
    getAll
}

