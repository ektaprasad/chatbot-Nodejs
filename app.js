async function init() {
  const http = require("http");
  const bodyParser = require("body-parser");
  const express = require('express');
  const dotenv = require('dotenv');
  dotenv.config();
  const cors = require('cors');

 
  const errorHandler = require("./lib/errorHandler");
  const connectDB = require("./lib/connectDB");
  const mountRoutes = require("./mountRoutes");

  const app = express();
  app.use(cors({ exposedHeaders: ["Authorization"] }));
  app.use(bodyParser.json());

  await connectDB();
  mountRoutes(app);

  app.use(errorHandler);

  const port = 3000 || process.env.port;

  const server = http.createServer(app);
  server.listen(port, () => console.log(`app listening on port ${port}!`));
}
init().catch(error => {
    throw error;
})