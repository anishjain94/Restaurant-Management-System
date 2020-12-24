const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
    async function getOrderDetails() {
        try {
            const response = await axios.get(`http://localhost:8080/orderedItems/order/details/${req.query.id}`);
            console.log(response.data);
            res.render("orderDetails", { order: response.data });
        } catch (error) {
            console.error(error);
        }
    };
    if (req.query.id !== undefined) {
        getOrderDetails();
    }
});
module.exports = router;