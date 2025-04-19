const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to Osirace API!");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Osirace backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
