const express = require("express");
const router = express.Router();
const controller = require("../controller/booksController");

router.get("/", controller.getAll);

module.exports = router;