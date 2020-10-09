const employees = require("../model/employees.json");
const fs = require("fs");
const { json } = require("body-parser");

const getAll = (req, res) => {
    res.status(200).send(employees);
};

const getEmployeeByName = (req, res) => {
    const name = req.params.name
    const employeeByName = employees.filter((employee) => employee.name == name)

    res.status(200).send(employeeByName);
};

const getAgeByID = (req, res) => {
    const id = req.params.id;
    const age = employees.map((employee) => {
        if (employee.id == id) {
            return employee.age
        }
    });
    res.status(200).send(`Employee ID ${id} is ${age} years old.`);
};

const getByID = (req, res) => {
    const id = req.params.id
    const employeeByID = employees.filter((employee) => employee.id == id)

    res.status(200).send(employeeByID);
};

const getByDepartment = (req, res) => {
    const department = req.params.department
    const employeesByDepartment = employees.filter(employee => employee.department == department);
    const allDepartment = employeesByDepartment.map(employee => employee.name);

    res.status(200).send(allDepartment);
};

const getByMaxWage = (req, res) => {
    const maxWages = req.params.wages;
    const employeesDataByWages = employees.filter(employee => employee.wages <= maxWages);
    const employeesNameByWages = employeesDataByWages.map(employee => employee.name);

    res.status(200).send(employeesNameByWages);
};

const postEmployee = (req, res) => {
    console.log(req.body);
    const id = employees.length + 1
    const { name , age , ssn , address , phone , department , wages } = req.body;
    employees.push({ id , name , age , ssn , address , phone , department , wages });

    fs.writeFile("./src/model/employees.json" , JSON.stringify(employees) , 'utf8' , function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        }
        console.log("Update successful!");
    });
    res.status(201).send(employees);
};

const deleteEmployee = (req, res) => {
    const idEmployee = req.params.id;
    const filteredEmployee = employees.find((employee) => employee.id == idEmployee);
    const index = employees.indexOf(filteredEmployee);
    employees.splice(index, 1);

    fs.writeFile("./src/model/employees.json" , JSON.stringify(employees), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
    }
    console.log("Update successful!");
    });
    res.status(200).send(employees);
};

module.exports = {
    getAll,
    getEmployeeByName,
    getAgeByID,
    getByID,
    getByDepartment,
    getByMaxWage,
    postEmployee,
    deleteEmployee
};