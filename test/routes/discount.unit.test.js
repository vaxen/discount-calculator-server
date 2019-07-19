let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../app");
let should = chai.should();
const expect = require("chai").expect;
chai.use(chaiHttp);

const validResponse = {
  "discount-percentage": "25%",
  customers: 4,
  "discount-total-amount": 25,
  "amount-to-pay": 75,
  "amount-to-pay-each": 18.75
};

describe("Discount route", function() {
  it("Should send valid response", done => {
    chai
      .request(server)
      .get("/discount?percentage=25&customers=4&amount=100")
      .end((err, result) => {
        result.should.have.status(200);
        expect(result.body).to.eql(validResponse);
        done();
      });
  });
});
