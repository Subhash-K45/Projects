const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const router = require("./Router/Router");
const PORT = 8080;
const path=require('path')

// app.use(bodyParser.json());
// const corsOptions = {
//   origin: '*', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// };

app.use(cors());
//app.use(express.static(path.join(__dirname, "../ArtGallery-Frontend/build")));

app.use(router);

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
