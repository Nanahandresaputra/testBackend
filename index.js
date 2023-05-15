const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const db = require("./db/db");
const promoRouter = require("./app/promo/router");
const busRouter = require("./app/booking_bus/bus/router");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>testing hello backend</h1>");
});

app.use("/api/", promoRouter);
app.use("/api/", busRouter);

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: `${req.originalUrl} not found`,
  });
});

app.listen(3000, console.log("app running http://localhost:3000"));
