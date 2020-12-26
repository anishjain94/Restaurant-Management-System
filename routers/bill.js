const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
    async function getOrders() {
        try {
            const response = await axios.get('http://localhost:8080/order/active');
            res.render("bill", { order: response.data });
        } catch (error) {
            console.error(error);
        }
    };
    getOrders();
});
module.exports = router;