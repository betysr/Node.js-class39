import supertest from "supertest";
import app from "../app.js";

const request = supertest(app);

describe("POST /", () => {
  test("get response with statusCode 200", () => { // testing root path and statusCode 200
    return request
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        
      });
  });
});

describe("POST /weather", () => {
  describe('getting correct cityName', () => { // correct cityName and statusCode 200 
    test("get response with statusCode 200", () => {
      return request
        .post("/weather")
        .send({cityName:"Weesp"})
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  }),

  describe("getting empty cityName", () => { // empty cityName and statusCode 400 
    test("get response with statusCode 400 ", ()=> { 
      return request
        .post("/weather")
        .send({cityName:""})
        .then(response => {
          expect(response.statusCode).toBe(400);
        });
    });
  }),

  describe("getting gibberish cityName", () => { // gibberish cityName and statusCode 404
    test("get response with 404 statusCode", () => {
      return request
        .post("/weather")
        .send({cityName:"babbarababbap"})
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  })
});