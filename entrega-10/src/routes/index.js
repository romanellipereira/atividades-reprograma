const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        title: "Welcome to BookShop!"
    })
});

module.exports = router;