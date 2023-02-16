const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;


app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.json({aa:"aaaaaa"});
});

app.listen(PORT, () => {
    console.log("listening.....");
});