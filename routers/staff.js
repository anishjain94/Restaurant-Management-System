const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {

    async function getStaff() {
        try {
            const response = await axios.get('http://localhost:8080/user/show');
<<<<<<< HEAD
            res.render("staff", { item: response.data, msg: req.query.msg });
=======

            console.log(response.data);

            res.render("staff", { item: response.data });

>>>>>>> c2d42c058069c98e4c4dfcf4090966d8fd9e7b5d
        } catch (error) {
            console.error(error);
        }
    };

    getStaff();
<<<<<<< HEAD
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
=======
>>>>>>> c2d42c058069c98e4c4dfcf4090966d8fd9e7b5d
});

module.exports = router;

