const express = require("express");
const cors = require("cors");

const PORT = 8080;

const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test12345",
  });
});

app.listen(PORT, () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`)
);
