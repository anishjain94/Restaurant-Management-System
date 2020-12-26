const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {
    async function getuser() {
        try {
            const response = await axios.get('http://localhost:8080/userType/show');
            res.render("addstaff", { list: response.data });
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});


router.post("/", (req, res) => {
    async function getuser() {
        await axios.post('http://localhost:8080/user/add', {
            "mobileNumber": req.body.number,
            "password": req.body.password,
            "userName": req.body.name,
            "userType": {
                "userTypeId": req.body.userTypeId,
            }
        })
            .then(function (response) {
                res.redirect(`staff?msg=${response.data}`);
                // console.log(response);
            })
    }

    getuser();
});

router.post("/edit", (req, res) => {
    async function getuser() {
        const response = await axios.put(`http://localhost:8080/user/update/${req.body.number}`, {
            "mobileNumber": req.body.number,
            "password": req.body.password,
            "userName": req.body.name,
            "userType": {
                userTypeId: req.body.empid,
            }
        })
        console.log(response.data);
        res.redirect(`/staff?msg=${response.data}`);
    }

    getuser().catch(function err(err){
        console.log(err)
    });
});

module.exports = router;