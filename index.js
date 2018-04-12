const express = require("express");
// const bodyParser = require ('body-praser');
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index")

})

app.listen(3000,() => console.log("LIVE on 3000"))
