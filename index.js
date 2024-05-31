const express = require("express");
const app = express();
const port = 5678;
const userRouter = require("./routes/userRoute");

const mysql = require("mysql2/promise");
const dbPromise = () => {
  return mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "user_db",
    connector: "mysql",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });
};

dbPromise()
  .then((connection) => {
    console.log("Connected to MySQL");
    app.set("db", connection);
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
  });

app.use(express.json());
app.get("/", (req, res) => {
  res.json("Welcome on API for users");
});
app.use("/api/users", userRouter);

app.listen(port, () =>
  console.log(`[SERVER] is running on http://localhost:${port}`)
);
