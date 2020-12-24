const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {

    console.log(req.query.id);

    if (req.query.id !== undefined) {

        async function getuser() {

            try {
                const response = await axios.get(`http://localhost:8080/category/show/${req.query.id}`);

                // const categories = await axios.get(`http://localhost:8080/category/show`);

                // console.log(response);
                console.log(response.data);

                res.render("editcategories", { category: response.data });

            } catch (error) {
                console.error(error);
            }

        };

        getuser().then(res => {
            console.log(res);
        });
    }



});


router.post("/", (req, res) => {

    console.log("in put");
    async function getuser() {
        await axios.put('http://localhost:8080/category/update', {
            categoryId: req.body.categoryId,
            categoryName: req.body.categoryname
        })
            .then(function (response) {
                res.redirect("categories");
                // console.log(response);
            })
            .catch(function (error) {
                res.render("additem", { msg: "error" });
            });
    }

    getuser();
});

module.exports = router;