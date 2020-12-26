const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {

    async function getItems() {
        try {
            const response = await axios.get('http://localhost:8080/item/show');

            res.render("items", { item: response.data ,msg: req.query.msg});

            response.data.forEach(element => {
                console.log(element);
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    getItems();
});


module.exports = router;