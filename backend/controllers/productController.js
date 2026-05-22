const db = require("../config/db");


// GET ALL PRODUCTS
exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Database Error");
    } else {
      res.json(result);
    }
  });
};


// GET SINGLE PRODUCT
exports.getProductById = (req, res) => {
  const sql = "SELECT * FROM products WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Database Error");
    } else {
      res.json(result[0]);
    }
  });
};
// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { name, price, image, description , category } = req.body;

  const sql =
    "INSERT INTO products (name, price, image, description, category) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, price, image, description, category],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Database Error");
      } else {
        res.send("Product Added");
      }
    }
  );
};