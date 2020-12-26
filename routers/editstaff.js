const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {


    // res.render("editstaff");

    if (req.query.id !== undefined) {



        async function getuser() {
            try {
                const response = await axios.get(`http://localhost:8080/user/show/${req.query.id}`);
                const emp = await axios.get("http://localhost:8080/userType/show");

                console.log(emp);

                res.render("editstaff", { item: response.data, emptype: emp.data });

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

        await axios.put(`http://localhost:8080/user/update/${req.body.number}`, {
            mobileNumber: req.body.number,
            userType: {
                userTypeId: req.body.emptype,
            }
        })
            .then(function (response) {
                // res.redirect("/home");
                // res.render("staff");
                console.log("updated");
            })
            .catch(function (error) {
                // res.render("staff");
            });
    }

    getuser();
});

module.exports = router;