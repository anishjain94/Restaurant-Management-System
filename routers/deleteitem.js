const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {

    console.log(req.query.id);

    if (req.query.id !== undefined) {

        async function getuser() {
            try {
                const response = await axios.delete(`http://localhost:8080/item/delete/${req.query.id}`);
                res.redirect("/home");
                // res.re("edititems", { data: response.data, category: categories.data });

            } catch (error) {
                console.error(error);
            }
        };

        getuser().then(res => {
            console.log(res);
        });
    }

});


// router.post("/", (req, res) => {
//     async function getuser() {
//         await axios.post('http://localhost:8080/item/add', {
//             itemId: req.body.itemID,
//             itemName: req.body.itemname,
//             itemPrice: req.body.price,
//             itemDescription: "..",
//             category: {
//                 categoryId: req.body.categoryId,
//                 categoryName: "South Indian"
//             }

//         })
//             .then(function (response) {
//                 res.render("additem", { msg: "success" });
//                 // console.log(response);
//             })
//             .catch(function (error) {
//                 res.render("additem", { msg: "error" });
//             });
//     }

//     getuser();
// });

module.exports = router;