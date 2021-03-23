const express = require('express');
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.send("Hello from Express!");
    // res.render("index", {method: req.method, path: req.path, randomNumber: Math.floor(Math.random())})
    // console.log(req.method, req.path, Math.floor(Math.random()));
    });

app.get(/\/[\w]*-?xyz$/, (req, res) => {
  res.send("That's all I wrote.");
});

app.get('/capital-letters/:name', (req, res) => {
    // console.log(req)
    res.send(req.params.name.toUpperCase())
})

app.all("/:id", (req, res) => {
// res.send("Hello from Express!");
res.render("index", {method: req.method, path: req.path, randomNumber: Math.floor(Math.random() * 10)})
console.log(req.method, req.path, Math.floor(Math.random()));
});


app.listen(8081, () => console.log(`listening on port 8081`))
