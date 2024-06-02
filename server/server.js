const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "weiqlu",
  password: "1200Fairwater",
  database: "edugrade",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database!");
});

app.get("/sections", (req, res) => {
  const query = "SELECT * FROM sections";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from database:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(results);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
