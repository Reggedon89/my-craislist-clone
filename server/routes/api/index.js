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
});

router.get("/listings/:slug", (req, res, next) => {
  const slug = req.params.slug;

  const sql = `SELECT p.title, p.description, p.id, c.parent_id as parent_id
  FROM listings p 
  LEFT JOIN categories c ON p.cat_slug = c.slug
  WHERE c.slug = ?
 `;

  conn.query(sql, [slug], (err, results, fields) => {
    console.log(results);
    res.json(results);
  });
});
// WHERE slug= ?
router.post("/post", (req, res, next) => {
  const { slug, title, description } = req.body;
  console.log(slug, title, description);
  const getsql = ` SELECT slug FROM categories `;

  conn.query(getsql, [slug], (geterr, getresults, getfields) => {
    const id = getresults[0].slug;
    const sql = `
  INSERT INTO listings (title, description,cat_slug) VALUES (?,?,?)`;

    conn.query(sql, [title, description, slug], (err, results, fields) => {
      res.json(results);
    });
  });
});

module.exports = router;
