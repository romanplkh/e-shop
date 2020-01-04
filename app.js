const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "UI", "build")));

  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "UI", "build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  console.log(req.body.token.id);
  const paymentConfig = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "CAD"
  };

  stripe.charges.create(paymentConfig, (onError, onSuccess) => {
    if (onError) {
      res.status(500).send({ error: onError });
    } else {
      res.status(200).send({ success: onSuccess });
    }
  });
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`App is running in port ${port}`);
});
