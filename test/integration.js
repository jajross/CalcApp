let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

chai.use(chaiHttp);

suite("Integration tests for coin flip system", function() {

  test("Test GET /flip", function() {
    let app = server.app;

    chai.request(app).get("/flip").end(function(error, response) {
      chai.assert.equal(response.status, 200, "Wrong status code");
      chai.assert.include(["Heads", "Tails"], response.text, "Wrong response text");
    });
  });

});


suite("Integration tests for add function", function() {

  test("Test GET /add", function() {
    let app = server.app;

    chai.request(app).get("/add/5/12").end(function(error, response) {
      chai.assert.equal(response.status, 200, "Wrong status code");
      chai.assert.equal("17", response.text, "Wrong response text");
    });
  });

});