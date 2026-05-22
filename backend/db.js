const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Madhu1111",
  database: "ecommerce",
});

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;