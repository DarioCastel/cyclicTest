
const express = require("express");


const app = express();
const PORT = process.env.PORT || 5000;




app.get("/", (req, res) => {
  res.json("Mi 1era api");
});

app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});