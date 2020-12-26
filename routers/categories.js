const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {


    async function getuser() {
        try {
            const response = await axios.get('http://localhost:8080/category/show');

            res.render("categories", { category: response.data ,msg: req.query.msg});

        } catch (error) {
            console.error(error);
        }
    };

    getuser();


});

module.exports = router;