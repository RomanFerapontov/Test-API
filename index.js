const app = require("./server.js");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
