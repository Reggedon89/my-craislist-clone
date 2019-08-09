const router = require("express").Router();
const conn = require("../../db");

router.get("/catagory", (req, res, next) => {
  const sql = `SELECT * FROM categories`;

  let data = {
    title: "home"
  };

  conn.query(sql, (err, results, fields) => {
    data.categories = results.filter(result => result.parent_id === null);
    data.categories.map(cat => {
      let subcat = results.filter(result => {
        if (result.parent_id === cat.id) {
          return result;
        }
      });
      cat.subcat = subcat;
    });
    res.json(data);
  });

  //   conn.query("SELECT name FROM categories WHERE parent_id IS NULL", function(
  //     error,
  //     results,
  //     fields
  //   ) {
  //     console.log(results);
  //     res.json(results);
  //   });
  // });
  // router.get("/subcatagory", (req, res, next) => {
  //   conn.query(
  //     "SELECT name, parent_id FROM categories WHERE parent_id IS NOT NULL",
  //     function(error, results, fields) {
  //       console.log(results);
  //       res.json(results);
  //     }
  //   );
});

module.exports = router;
