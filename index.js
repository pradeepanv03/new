const express = require("express");

const app = express();

const port = process.env.PORT || 2000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("PORT 2000 is running");
});
