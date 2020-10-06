const express = require("express");
const router = express.Router();
const controller = require("../controller/booksController");

router.get("/", controller.getAll);
router.post("/", controller.postBook);
router.get("/title/:title", controller.getByTitle);
router.get("/author/:author", controller.getByAuthor);
router.get("/publishing/:publishing", controller.getByPublishing);
router.get("/available", controller.getAvailableTitles);
router.get("/maxprice/:price", controller.getByMaxPrice);

module.exports = router;