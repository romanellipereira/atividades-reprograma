const books = require("../model/books.json");
const fs = require("fs");
const { json } = require("body-parser");

const getAll = (req, res) => {
    res.status(200).send(books);
};

const postBook = (req, res) => {
    console.log(req.body);
    const id = books.length + 1
    const {  title , author , publishing , category , price , stock } = req.body;
    books.push({ id , title , author , publishing , category , price , stock });

    fs.writeFile("./src/model/books.json" , JSON.stringify(books) , 'utf8' , function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        }
        console.log("Update successful!");
    });
    res.status(201).send(books);
};

const getByTitle = (req, res) => {
    const title = req.params.title;

    res.status(200).send(books.filter((book) => book.title == title));
};

const getByAuthor = (req, res) => {
    const author = req.params.author;

    res.status(200).send(books.filter((book) => book.author == author));
};

const getByPublishing = (req, res) => {
    const publishing = req.params.publishing;

    res.status(200).send(books.filter((book) => book.publishing == publishing));
};

const getAvailableTitles = (req, res) => {
    const available = books.map((book) => {
        if (book.stock >= 1) {
            return book.title
        }
    })
    res.status(200).send(available);
};

const getByMaxPrice = (req, res) => {
    const maxPrice = req.params.price;

    res.status(200).send(books.filter((book) => book.price <= maxPrice));
};

const deleteBook = (req, res) => {
    const idBook = req.params.id;
    const filteredBook = books.find((book) => book.id == idBook );
    const index = books.indexOf(filteredBook);
    books.splice(index, 1);

    fs.writeFile("./src/model/books.json" , JSON.stringify(books), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
    }
    console.log("Update successful!");
    });
    res.status(200).send(books);
};

module.exports = {
    getAll,
    postBook,
    getByTitle,
    getByAuthor,
    getByPublishing,
    getAvailableTitles,
    getByMaxPrice,
    deleteBook
};

