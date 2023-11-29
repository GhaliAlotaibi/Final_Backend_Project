import express from "express";
const app = express();
const PORT = 3000;

app.get("/Ghali", function (req, res) {
    res.send("Hello, world.");
  });
  
  app.listen(PORT, () => {
    console.log("server 3000");
  });