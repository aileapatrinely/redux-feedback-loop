const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log(`In /feedback POST with`, req.body);

  const feedbackAdd = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                         VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      feedbackAdd.feeling,
      feedbackAdd.understanding,
      feedbackAdd.support,
      feedbackAdd.comments,
    ])
    .then((response) => {
      console.log(response);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error in POST /tasks ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
