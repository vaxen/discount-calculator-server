export default class Discount {
  constructor(
    percentage,
    customers,
    discount_total_amount,
    amount_to_pay,
    amount_to_pay_each
  ) {
    this.percentage = percentage + "%";
    this.customers = parseInt(customers);
    this.discount_total_amount = discount_total_amount;
    this.amount_to_pay = amount_to_pay;
    this.amount_to_pay_each = amount_to_pay_each;
  }
}
