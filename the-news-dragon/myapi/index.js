const express = require('express');
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors())
app.get('/', (req, res) => {
    res.send("Dragon is Running");
})

app.get("/categories", (req, res) => {
    res.send(categories);
})
app.get("/categories/:id", (req, res) => {
    const categoryId = parseInt(req.params.id);
    if (categoryId === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === categoryId);
        res.send(categoryNews);
    }
})
app.get("/news", (req, res) => {
    res.send(news);
})
app.get("/news/:id", (req, res) => {
    const newsId = req.params.id;
    const newsList = news.find(spnews => spnews._id === newsId);
    res.send(newsList);
})

app.listen(port, () => {
    console.log("Dragon Api is running")
})