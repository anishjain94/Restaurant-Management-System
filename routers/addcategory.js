const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res) => {
    res.render("addcategories");
});


router.post("/", (req, res) => {
    async function getuser() {
        await axios.post('http://localhost:8080/category/add', {
            categoryId: '0',
            categoryName: req.body.categoryname
        })
            .then(function (response) {
                console.log(response);
                
                res.redirect(`categories?msg=${response.data}`);
            })
    }

    getuser();
});

module.exports = router;