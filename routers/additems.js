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

        console.log(req.body.data);

        await axios.post('http://localhost:8080/item/add', {
            "itemId": 14,
            "itemName": req.body.itemname,
            "itemDescription": req.body.itemdescription,
            "itemPrice": req.body.itemprice,
            "category": {
                "categoryId": req.body.categoryId,
            }
        })
            .then(function (response) {
                console.log(response);
                res.redirect("/home");
            })
            .catch(function (error) {

            });
    }

    getuser();
});

module.exports = router;