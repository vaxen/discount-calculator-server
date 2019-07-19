let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../app");
let should = chai.should();
const expect = require("chai").expect;
chai.use(chaiHttp);

let req = {
  body: {}
};

let res = {
  sendCalledWith: "",
  send: function(arg) {
    this.sendCalledWith = arg;
  }
};

describe("Users route", function() {
  it("Should read users message", done => {
    chai
      .request(server)
      .get("/users/")
      .end((err, result) => {
        result.should.have.status(200);
        //expect(result.text).to.equals("respond with a resource");
        done();
      });
  });
});
