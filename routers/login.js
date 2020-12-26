const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", (req, res) => {
    
    async function getuser() {
        await axios.post(`http://localhost:8080/user/loginweb`,{
            "mobileNumber":req.body.username,
            "password":req.body.password
        })
        .then(function (response) {
                res.redirect(`/dashboard`);
                // console.log(response);
            })
    }
    getuser();
});


module.exports = router;