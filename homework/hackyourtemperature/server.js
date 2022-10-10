import express from 'express';
import keys from "./sources/keys.js"; 

const app = express(); // express function creates a new application

app.use(express.json()); // is responsible for parsing the request body

app.get("/", (req,res) => {
  res.setHeader("Content-type", "text/plain");
  res.send("hello from backend to frontend!");
});

app.post("/weather", (req,res) => {
  const city = req.body.cityName;
  res.setHeader("Content-type", "text/plain");
  res.send(city);
});

app.listen(3000, () => {
  console.log("Yay! Application listening on port 3000");
});
