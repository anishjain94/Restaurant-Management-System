const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {


    async function getuser() {
        try {
            const response = await axios.get('http://localhost:8080/restaurantTable/show');

            res.render("tables", { table: response.data ,msg: req.query.msg});

        } catch (error) {
            console.error(error);
        }
    };

    getuser();


});

router.get("/add", (req, res) => {
    res.render("addTable");
});

router.post("/add", (req, res) => {
    async function getuser() {
        await axios.post('http://localhost:8080/restaurantTable/add', {
            "tableId": '0',
            "tableCapacity": req.body.capacity,
            "occupied":'0'
        })
            .then(function (response) {
                console.log(response);
                
                res.redirect(`/tables?msg=${response.data}`);
            })
    }

    getuser();
});

router.get("/delete", (req, res) => {
    console.log(req.query.id);
    if (req.query.id !== undefined) {
        async function getuser() {
            try {
                const response = await axios.delete(`http://localhost:8080/restaurantTable/delete/${req.query.id}`);
                res.redirect(`/tables?msg=${response.data}`);
            } catch (error) {
                console.error(error);
            }
        };
        getuser();
    }
});

router.get("/edit", (req, res) => {

    console.log(req.query.id);
    if (req.query.id !== undefined) {
        async function getuser() {
            try {
                const categories = await axios.get(`http://localhost:8080/restaurantTable/show/${req.query.id}`);
                res.render("editTable", {data: categories.data });

            } catch (error) {
                console.error(error);
            }
        };

        getuser().then(res => {
            console.log(res);
        });
    }
});


router.post("/edit", (req, res) => {
    async function getuser() {
        await axios.put('http://localhost:8080/restaurantTable/update', {
            "tableId": req.body.tableId,
            "tableCapacity": req.body.tableCapacity,
            "occupied":'0'
        })
            .then(function (response) {
                res.redirect(`/tables?msg=${response.data}`);
                // console.log(response);
            })
    }
    getuser();
});

module.exports = router;