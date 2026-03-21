const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended:true }));
var todos = [{
            id:0,
            text: "testing",
            completed:false
        }];
var id = 1;

app.use(express.static('static'))
app.get("/", (req, res) => {
    console.log(todos);
    res.render("index", {todos})
});

app.post("/", (req, res) => {
    console.log("printed something")
    const text = req.body.text;
    const data = req.body;
    console.log(data);
    if (text.trim() !== "" ) {
        todos.push({
            id:id++,
            text,
            completed:false
        });
    }
    res.redirect("/");
});

app.post("/toggle/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("toggling", id)
    for (let i=0; i < todos.length; i++) {
        if (todos[i].id == id){
            todos[i].completed = !todos[i].completed;
        };
    };
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("delete", id)
    todos.filter(t => t.id === id);
    console.log("hi")
    res.redirect("/");
});

app.listen(PORT);