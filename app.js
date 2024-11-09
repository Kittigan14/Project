const express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");
const app = express();
const port = process.env.PORT || 5500;

app.set("views", path.join(__dirname, "/public/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.render("verify");
});

app.post("/verifyPost", async (req, res) => {
    const data = req.body;
    try {
        await axios.post(`${base_url}/verifyPost`, data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error");
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});