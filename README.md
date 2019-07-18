# DISCOUNT SERVICE
backend service for calculating a discount on a trip and split it into different customers.

## run

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

```docker run -it docker_nodejs_app```
