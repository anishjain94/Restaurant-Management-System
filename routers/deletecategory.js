const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {

    console.log(req.query.id);

    if (req.query.id !== undefined) {

        async function getuser() {
            try {

                const response = await axios.delete(`http://localhost:8080/category/delete/${req.query.id}`);

                res.redirect(`/categories?msg=${response.data}`);


            } catch (error) {
                console.error(error);
            }
        };

        getuser();
    }

});

module.exports = router;