const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Employee = require('../models/Employee');

router.get('/', (req, res) => {
    console.log(req.query);
    Employee
        .find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log("err", err)
        })
});

router.get('/:empId', (req, res) => {
    console.log(req.query);
    Employee
        .findOne({number: req.params.empId})
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log("err", err)
        })
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newEmployee = new Employee(req.body);

    newEmployee.save().then((result) => {res.json(result)}).catch((err)=>{console.log("err", err)});
});

router.put('/:empId', (req, res) => {
    console.log(req.body);
    Employee
        .findOneAndUpdate({number:req.params.empId}, req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("err", err)
        }); 
});

router.delete('/:empId', (req, res) => {
    res.send(req.body);
});

module.exports = router;