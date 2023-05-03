const express = require('express');
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;
const categories = require("./data/categories.json");
app.use(cors())
app.get('/', (req, res) => {
    res.send("Dragon is Running");
})

app.listen(port, () => {
    console.log("Dragon Api is running")
})
app.get("/categories", (req, res) => {
    res.send(categories);
})