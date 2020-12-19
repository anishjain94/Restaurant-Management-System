const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {
    res.render("additem");
});


router.post("/", (req, res) => {
    async function getuser() {
        await axios.post('http://localhost:8080/item/add', {
            itemId: req.body.itemID,
            itemName: req.body.itemname,
            itemcategory: req.body.category,
            itemprice: req.body.price,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getuser();
});

module.exports = router;