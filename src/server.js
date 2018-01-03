const express = require("express");
const app = express();
const routes = require("./server/routes")

app.use("/", routes);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Listining on port: " + port );
});
