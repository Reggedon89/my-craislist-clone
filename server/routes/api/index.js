const router = require("express").Router();
const conn = require("../../db");

router.get("/catagory", (req, res, next) => {
  conn.query("SELECT name FROM categories WHERE parent_id IS NULL", function(
    error,
    results,
    fields
  ) {
    console.log(results);
    res.json(results);
  });
});
router.get("/subcatagory", (req, res, next) => {
  conn.query(
    "SELECT name, parent_id FROM categories WHERE parent_id IS NOT NULL",
    function(error, results, fields) {
      console.log(results);
      res.json(results);
    }
  );
});

module.exports = router;
