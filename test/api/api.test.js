import { use, assert } from 'chai';
import chaiHttp from 'chai-http';
import * as server from '../../app.js';
const chai = use(chaiHttp);

chai.use(chaiHttp);

describe("Test API", () => {
   it("Get Genres", () => {

      assert.isTrue(true, "Valid");
      chai.request(server)
          .get("/api/genres")
          .set("Accept", "application/json")
          .expect(200)
          .end(function (err, res) {
             if (err) {
                assert.fail(err);
             }
          })
   });

});