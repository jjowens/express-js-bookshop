import request from "supertest";
import express from "express";

const app = express();

describe("Test API", () => {
   it("Get Genres", () => {
       request(app)
           .get('/api/genres')
           .expect('Content-Type', /json/)
           .expect('Content-Length', '15')
           .expect(200)
           .end(function(err, res) {
               console.log(res);
               if (err) throw err;
           });

       /*request(app)
           .get('/api/genres')
           .expect('Content-Type', /json/)
           .expect('Content-Length', '15')
           .expect(200)
           .end(function(err, res) {
               if (err) throw err;
           });*/
   });

});