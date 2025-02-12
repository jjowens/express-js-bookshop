import { assert, use, expect } from 'chai';
import {request} from 'chai-http';
import app from '../../app.js';

describe("Test API", () => {
   it("Get Genres", () => {
       request.execute(app)
           .get("/api/genres")
           .set("Accept", "application/json")
           //.expect(200)
           .end(function (err, res) {
               if (err) {
                   assert.fail(err);
               }
           });
   });

});