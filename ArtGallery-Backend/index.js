const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./Router/Router");
const PORT = 8080;
const cors=require('cors')

app.use(bodyParser.json());
app.use(router);
app.use(cors())

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
