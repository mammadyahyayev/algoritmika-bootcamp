const express = require("express");
const app = express();
const Worker = require("./worker");

app.get("/", (request, response) => {
  const workers = [new Worker(1, "John", 30), new Worker(2, "Jack", 40)];
  response.send(JSON.stringify(workers));
});

app.listen(3000, () => {
  console.log("Server is listening port 3000...");
});
