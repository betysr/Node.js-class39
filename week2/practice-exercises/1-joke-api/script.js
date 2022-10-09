import fetch from 'node-fetch';
import express from 'express';
/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
const app = express();

async function printChuckNorrisJoke(req, res) {
  // YOUR CODE GOES IN HERE
  const url = 'https://api.chucknorris.io/jokes/random'; // the url which is in README.md file did not worked so I used this url instead.
  const options = {
    method: 'GET'
  };

  try {
    let response = await fetch(url, {
      method: 'GET'
    });
    response = await response.json();
    console.log(response);
    console.log('here');
  } 
  catch (err) {
    console.log(err);
  }
}

printChuckNorrisJoke();