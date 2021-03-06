const books = require("../model/books.json");
const fs = require("fs");
const { json } = require("body-parser");

const getAll = (req, res) => {
  res.status(200).send(books);
};

const postBook = (req, res) => {
  console.log(req.body);
  const id = books.length + 1;
  const { title, author, publishing, category, price, stock } = req.body;
  books.push({ id, title, author, publishing, category, price, stock });

  fs.writeFile(
    "./src/model/books.json",
    JSON.stringify(books),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Update successful!");
    }
  );
  res.status(201).send(books);
};

const getByTitle = (req, res) => {
  const title = req.params.title;

  res.status(200).send(books.filter((book) => book.title == title));
};

const getByAuthor = (req, res) => {
  const author = req.params.author;
  const booksDataByAuthor = books.filter((book) => book.author == author);
  const titlesByAuthor = booksDataByAuthor.map((book) => book.title);

  res.status(200).send(titlesByAuthor);
};

const getByCategory = (req, res) => {
  const category = req.params.category;
  const booksDataByCategory = books.filter((book) => book.category == category);
  const titlesByCategory = booksDataByCategory.map((book) => book.title);

  res.status(200).send(titlesByCategory);
};

const getByPublishing = (req, res) => {
  const publishing = req.params.publishing;

  res.status(200).send(books.filter((book) => book.publishing == publishing));
};

const getAvailableTitles = (req, res) => {
  const available = books.map((book) => {
    if (book.stock >= 1) {
      return book.title;
    }
  });
  res.status(200).send(available);
};

const getByMaxPrice = (req, res) => {
  const maxPrice = req.params.price;

  res.status(200).send(books.filter((book) => book.price <= maxPrice));
};

const deleteBook = (req, res) => {
  const idBook = req.params.id;
  const filteredBook = books.find((book) => book.id == idBook);
  const index = books.indexOf(filteredBook);
  books.splice(index, 1);

  fs.writeFile(
    "./src/model/books.json",
    JSON.stringify(books),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Update successful!");
    }
  );
  res.status(200).send(books);
};

const putBook = (req, res) => {
  const id = req.params.id;
  const bookToBeUpdated = books.find((book) => book.id == id);
  const bookUpdated = req.body;
  const index = books.indexOf(bookToBeUpdated);

  books.splice(index, 1, bookUpdated);

  fs.writeFile(
    "./src/models/books.json",
    JSON.stringify(books),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Update successful!");
    }
  );

  res.status(200).send(books);
};

const patchBook = (req, res) => {
  const id = req.params.id;
  const update = req.body;

  try {
    const bookToBeUpdated = books.find((book) => book.id == id);

    Object.keys(update).forEach((key) => {
      bookToBeUpdated[key] = update[key];
    });

    fs.writeFile(
      "./src/models/books.json",
      JSON.stringify(books),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Update successful!");
      }
    );

    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports = {
  getAll,
  postBook,
  getByTitle,
  getByAuthor,
  getByCategory,
  getByPublishing,
  getAvailableTitles,
  getByMaxPrice,
  deleteBook,
  putBook,
  patchBook,
};