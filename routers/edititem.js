const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {

    console.log(req.query.id);

    if (req.query.id !== undefined) {

        async function getuser() {
            try {
                const response = await axios.get(`http://localhost:8080/item/show/${req.query.id}`);
                const categories = await axios.get(`http://localhost:8080/category/show`);

                res.render("edititems", { data: response.data, category: categories.data });

            } catch (error) {
                console.error(error);
            }
        };

        getuser();
    }
});

        // console.log(req.body.itemID);

router.post("/", (req, res) => {
    async function getuser() {
        await axios.put('http://localhost:8080/item/update', {
            "itemId": req.body.itemID,
            "itemName": req.body.itemname,
            "itemDescription": req.body.itemdescription,
            "itemPrice": req.body.itemprice,
            "category": {
                "categoryId": req.body.categoryId,
                "categoryName": ""
            }

        })
            .then(function (response) {
                res.redirect(`/home?msg=${response.data}`);
            });
    }

    getuser();
});

module.exports = router;