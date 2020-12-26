const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {

    async function getItems() {
        try {
            const response = await axios.get('http://localhost:8080/category/show');

            console.log(response.data);

            res.render("additems", { category: response.data });

        } catch (error) {
            console.error(error);
        }
    };

    getItems();
});


router.post("/", (req, res) => {


    console.log("in post");
    async function getuser() {

        console.log(req.body);
        await axios.post('http://localhost:8080/item/add', {
            "itemId": '0',
            "itemName": req.body.itemname,
            "itemDescription": req.body.itemdescription,
            "itemPrice": req.body.itemprice,
            "category": {
                "categoryId": req.body.categoryId,
            }
        })
            .then(function (response) {
                res.redirect(`/home?msg=${response.data}`);
            });
    }

    getuser();
});

module.exports = router;