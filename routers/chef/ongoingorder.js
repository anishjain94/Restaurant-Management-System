const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    async function getOngoingOrder() {
        
        try {
            const response = await axios.get('http://localhost:8080/item/show');

            res.render("items", { item: response.data });

            response.data.forEach(element => {
                console.log(element);
            });


            // console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    getOngoingOrder();



    res.render("Chef/ongoingorder");
});
module.exports = router;