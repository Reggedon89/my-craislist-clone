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

router.get("/listings", (req, res, next) => {
  const sql = `select p.title, p.description, p.id, c.parent_id as parent_id
  from listings p 
  left join categories c ON p.cat_slug = c.slug
  where p.cat_slug = "activities" or c.slug = "activities"`;

  conn.query(sql, (err, results, fields) => {
    console.log(results);
  });
});

module.exports = router;
