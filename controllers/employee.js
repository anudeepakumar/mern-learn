const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Employee = require('../models/Employee');

const validatePost = function (req, res, next) {
    let errors = {};

    if (!(req.body.number && req.body.number != "")) {
        errors.number = "number required"
    }
    if (!(req.body.name && req.body.name != "")) {
        errors.name = "name required"
    }
    if (!(req.body.email && req.body.email != "")) {
        errors.email = "email required"
    }
    if (!(req.body.password && req.body.password != "")) {
        errors.password = "password required"
    }
    if (!(req.body.phone && req.body.phone != "")) {
        errors.phone = "phone required"
    }
    if (!(req.body.status && req.body.status != "")) {
        errors.status = "status required"
    }
    if (!(req.body.account && req.body.account != "")) {
        errors.account = "account required"
    }
    if(Object.keys(errors).length !== 0) {
        return res.status(400).json(errors);
    }
    return next();
};

router.get('/', (req, res) => {
    console.log(req.query);
    Employee
        .find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("err", err)
        })
});

router.get('/:empId', (req, res) => {
    console.log(req.query);
    Employee
        .findOne({ number: req.params.empId })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("err", err)
        })
});

router.post('/', validatePost, (req, res) => {
    console.log(req.body);
    const newEmployee = new Employee(req.body);

    newEmployee.save().then((result) => { res.json(result) }).catch((err) => { console.log("err", err) });
});

router.put('/:empId', (req, res) => {
    console.log(req.body);
    Employee
        .findOneAndUpdate({ number: req.params.empId }, req.body)
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