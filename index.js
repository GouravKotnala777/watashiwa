const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res) => {
    res.json({message:"Hello from my website"});
});

app.listen(port, () => {
    console.log("listening.....");
});