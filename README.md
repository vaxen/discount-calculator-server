# DISCOUNT SERVICE
backend service for calculating a discount on a trip and split it into different customers.

## run

``` docker run -d -p 27017-27019:27017-27019 --name discount.service.mongo mongo:4.0.4```

```npm install```

```npm start```

or

```nodemon myapp```

parameters: total-amount discount% number-of-customers

formula:

```discount-total -> total-amount * discount%```

```amount-to-pay -> (total-amount - discount-total)```

server run on port 4000

## docker

```docker build -t discount-calculator-server .```

```docker run --rm -it -p 4000:4000/tcp discount-calculator-server:latest```

## test with coverage

```npm run test-coverage```

it will generate a test coverage report in ```./coverage/index.html```
