const express = require("express");
const router = express.Router();
const controller = require("../controller/employeesController");

router.get("/", controller.getAll);
router.get("/:name", controller.getEmployeeByName);
router.get("/id/:id", controller.getByID);
router.get("/age/:id", controller.getAgeByID);
router.get("/department/:department", controller.getByDepartment);


router.post("/include", controller.postEmployee);


module.exports = router;