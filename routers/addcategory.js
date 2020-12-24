const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {
    res.render("addcategories");
});


router.post("/", (req, res) => {
    async function getuser() {
        await axios.post('http://localhost:8080/category/add', {
            categoryId: req.body.categoryID,
            categoryName: req.body.categoryname
        })
            .then(function (response) {
                console.log(response);

                res.redirect("/categories");
            })
            .catch(function (error) {
                res.render("addcategories");
            });
    }

    getuser();
});

module.exports = router;