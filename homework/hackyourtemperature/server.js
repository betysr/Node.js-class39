import express from 'express';
const app = express(); // express function creates new application

app.get("/", (req,res) => {
  res.setHeader("Content-type", "text/plain")
  res.send("hello from backend to frontend!");
});

app.listen(3000, () => {
  console.log("Yay! Application listening on port 3000");
});