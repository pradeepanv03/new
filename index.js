const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(2000, () => {
  console.log("PORT 2000 is running");
});
