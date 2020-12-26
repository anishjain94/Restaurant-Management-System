const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {

    async function getStaff() {
        try {
            const response = await axios.get('http://localhost:8080/user/show');
            res.render("staff", { item: response.data, msg: req.query.msg });
        } catch (error) {
            console.error(error);
        }
    };

    getStaff();
});

router.get("/edit", (req, res) => {
    async function getuser() {
        const response = await axios.get(`http://localhost:8080/user/show/${req.query.id}`);
        const type = await axios.get('http://localhost:8080/userType/show');
       res.render("editStaff", { user: response.data, list: type.data});
    }
    getuser();
});

router.get("/delete", (req, res) => {
    async function getuser() {
       const response = await axios.delete(`http://localhost:8080/user/delete/${req.query.id}`);
       res.redirect(`/staff?msg=${response.data}`);
    }
    getuser();
});

module.exports = router;

