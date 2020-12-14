const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", (req, res) => {

    if (req.body.username === "chef") {
        res.redirect("/pendingorder");
    }

    if (req.body.username === "admin") {
        res.redirect("/home");
    }


});


module.exports = router;