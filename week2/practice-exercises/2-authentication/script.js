import fetch from 'node-fetch';
import express from 'express';
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
async function printBooks() {
  // YOUR CODE GOES IN HERE
  const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books'; // the url which is in README.md file did not work so I used this url instead.

  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
    });
    response = await response.json();
    console.log(response);
  } 
  catch (err) {
    console.log(err);
  }
}

printBooks();