const express = require("express");
const router = express.Router();

const axios = require("axios");


router.get("/", (req, res) => {
    async function getuser() {
        try {
            const response = await axios.get('http://localhost:8080/orderedItems/show/pending');
            res.render("Chef/pendingorder", { data: response.data , msg : req.query.msg});
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});

router.get("/complete", (req, res) => {
    async function getuser() {
        try {
            const response = await axios.put(`http://localhost:8080/orderedItems/update/complete/${req.query.id}`);
            res.redirect(`/pendingorder?msg=${response.data}`);
        } catch (error) {
            console.error(error);
        }
    };
    getuser();
});
module.exports = router;