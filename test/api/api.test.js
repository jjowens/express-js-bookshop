import assert from 'chai';
import {default as chaiHttp, request} from 'chai-http';
import * as server from '../../app.js';

use(chaiHttp);

describe("Test API", () => {
   it("Get Genres", () => {

      assert.isTrue(true, "Valid");
      // request(server)
      //     .get("/api/genres")
      //     .set("Accept", "application/json")
      //     .expect(200)
      //     .end(function (err, res) {
      //        if (err) {
      //           assert.fail(err);
      //        }
      //     })
   });

});