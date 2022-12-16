let express = require("express");
let routes = require("./routes");

let app = express();

app.get("/flip", routes.coinFlipRoute);
app.get("/add/:number1/:number2", routes.addNumbersRoute);

module.exports.app = app;