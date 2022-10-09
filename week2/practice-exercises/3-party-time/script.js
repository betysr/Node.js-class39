import fetch from 'node-fetch';
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  const url = 'https://reservation100-sandbox.mxapps.io/api/reservations'; 

  const body = { "name": "Betul & Mustafa Yasar",
  "numberOfPeople": 2 };

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data);
  } 
  catch (err) {
    console.log(err);
  }
}

makeReservation();