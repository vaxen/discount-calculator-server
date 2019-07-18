var express = require("express");
var _ = require("lodash");
var router = express.Router();

const UNDEFINED_DISCOUNT = { error: "discount is mandatory" };
const UNDEFINED_CUSTOMERS = { error: "customers is mandatory" };
const UNDEFINED_AMOUNT = { error: "invalid amount value" };

/* GET discount api. */
router.get("/", function(req, res, next) {
  var { percentage, customers, amount } = req.query;
  if (!percentage) {
    return res.send(UNDEFINED_DISCOUNT);
  } else if (!customers) {
    return res.send(UNDEFINED_CUSTOMERS);
  } else if (!amount) {
    return res.send(UNDEFINED_AMOUNT);
  }
  var discount_total_amount = amount * _.divide(percentage, 100);
  var amount_to_pay = amount - discount_total_amount;
  var amount_to_pay_each = _.divide(amount_to_pay, customers);

  discount = {
    "discount-percentage": percentage + "%",
    customers: parseInt(customers),
    "discount-total-amount": discount_total_amount,
    "amount-to-pay": amount_to_pay,
    "amount-to-pay-each": amount_to_pay_each
  };
  res.send(discount);
});

module.exports = router;
