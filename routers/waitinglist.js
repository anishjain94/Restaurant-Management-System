const express = require("express");
const router = express.Router();
const axios = require("axios");
const { request } = require("express");
const { random } = require("lodash");

router.get("/", (req, res) => {

    async function getuser() {
        try {
            const response = await axios.get('http://localhost:8080/waiting/show');
            const tables = await axios.get('http://localhost:8080/restaurantTable/show/available');
            res.render("waitinglist", { list: response.data, tables: tables.data });
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});

router.get("/assignTable", (req, res) => {

    async function getuser() {
        try {
            await axios.post(`http://localhost:8080/customerSitting/add`, {
                "customerSittingId": Math.floor((Math.random() * 10000)),
                "customer": {
                    "mobileNumber": req.query.number,
                    "customerName": "",
                    "dob": ""
                },
                "restauranttable": {
                    "tableId": req.query.tableId,
                    "occupied": 1,
                    "tableCapacity": ""
                }
            })
            res.redirect("/waitingList");
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});

router.get("/delete", (req, res) => {

    async function getuser() {
        try {
            await axios.delete(`http://localhost:8080/waiting/delete/${req.query.id}`)
            res.redirect("/waitingList");
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});

router.post("/add", (req, res) => {

    async function getuser() {
        try {
            await axios.post(`http://localhost:8080/waiting/add`, {
                "waitingNumber": req.body.waitingNumber,
                "numberOfPerson": req.body.numberOfPerson,
                "customerBean": {
                    "mobileNumber": req.body.mobileNumber,
                    "customerName": req.body.customerName,
                    "dob": ""
                }
            })
            res.redirect("/waitingList");
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});


module.exports = router;