const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {
    res.render("addstaff");
});


router.post("/", (req, res) => {
    async function getuser() {
        await axios.post('http://localhost:8080/user/add', {
            mobileNumber: req.body.number,
            password: req.body.password,
            userType: {
                userTypeId: req.body.empid,
            }
        })
            .then(function (response) {
                res.render("addstaff", { msg: "success" });
                // console.log(response);
            })
            .catch(function (error) {
                res.render("addstaff", { msg: "error" });
            });
    }

    getuser();
});

module.exports = router;