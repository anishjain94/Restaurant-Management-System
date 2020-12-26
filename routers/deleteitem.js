const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {

    console.log(req.query.id);

    if (req.query.id !== undefined) {

        async function getuser() {
            try {
                const response = await axios.delete(`http://localhost:8080/item/delete/${req.query.id}`);
                res.redirect(`/home?msg=${response.data}`);
                // res.re("edititems", { data: response.data, category: categories.data });

            } catch (error) {
                console.error(error);
            }
        };

        getuser().then(res => {
            //console.log(res);
        });
    }

});


module.exports = router;