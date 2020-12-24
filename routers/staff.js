const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {

    async function getStaff() {
        try {
            const response = await axios.get('http://localhost:8080/user/show');

            console.log(response.data);

            res.render("staff", { item: response.data });

        } catch (error) {
            console.error(error);
        }
    };

    getStaff();
});

module.exports = router;

