const express = require('express');
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
res.send("Hello from Express!");

});



app.listen(8081, () => console.log(`listening on port 8081`))
