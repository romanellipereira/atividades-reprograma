const employees = require("../model/employees.json");
const fs = require("fs");
const { json } = require("body-parser");

const getAll = (req, res) => {
    res.status(200).send(employees);
};




module.exports = {
    getAll
}