const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Mylene Farmer",
    style: ["home.css"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Mylene",
    style: ["about.css"],
  });
});

app.get("/works", (req, res) => {
  res.render("works", {
    title: "Works of Mylene Farmer",
    style: ["works.css"],
  });
});

app.listen(2000, () => console.log(`Server on http://localhost:2000`));
