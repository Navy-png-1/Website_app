const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

var todos = [{
            id:0,
            text: "testing",
            completed:false
        }];
var id = 1;

app.get("/", (req, res) => {
    console.log(todos);
    res.render("index", {todos})
});

app.post("/", (req, res) => {
    const text = req.body.text;
    const data = req.body;
    console.log(data);
    if (text.trim() !== "" ) {
        todos.push({
            id:idCounter++,
            text,
            completed:false
        });
    }
    res.redirect("/");
});

app.listen(PORT);