const express = require("express");
const app = express();
const port = 8000;


app.set("view engine", "views");



app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("listening.....");
});