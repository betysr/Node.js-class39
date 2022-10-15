import express from 'express';
import {keys} from "./sources/keys.js";
import fetch from 'node-fetch';

const app = express(); // express function creates a new application

app.use(express.json()); // is responsible for parsing the request body

app.get("/", (req,res) => {
  res.setHeader("Content-type", "text/plain");
  res.status(200);
  res.send("hello from backend to frontend!");
});

app.post("/weather", async (req,res) => {
  const city = req.body.cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.API_KEY}&units=metric`; 

  if (!city) {
    res.status(400).json({ weatherText: "cityName is empty" });
    return;
  }

  try {
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      const degree = `${Math.floor(data.main.temp)}`;
      res.status(200).json({
        weatherText: `${data.name} is ${degree}°C`,
      });
    }
    else{
      res.status(404).json({ 
        weatherText: `${city} is gibberish name and not found.`
      });
    }
  } 
  catch(err) {
    res.status(500).json({ 
      weatherText: `Something went wrong with server!`
    });;
  }
});

export default app;