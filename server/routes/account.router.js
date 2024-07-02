const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET all accounts and balances
router.get('/', (req, res) => {
  const queryText = `
    SELECT "account"."name", SUM("amount") FROM account
    JOIN "register" on "account"."id"="acct_id"
    GROUP BY "account"."id";
  `

  pool.query(queryText)
    .then((result) => {
      console.log("Account Balances:", result.rows)
      res.send(result.rows)
    })
    .catch(error => {
      console.log("Error with GET accounts/ :", error)
      res.sendStatus(500)
    })
})

router.post('/transfer', async (req, res) => {

  // * Incoming values from body
  const { toId, fromId, amount } = req.body
  console.log("Incoming Body: ", req.body)

  // The same connection will be used by all queries
  const connection = await pool.connect()

  try {
    // Code in here will be attempted, and if failed will go to the catch statement
    await connection.query('BEGIN')

    // * These lines are the ones you would want to change if you were customizing this for your project.
    const queryText = `INSERT INTO "register" (acct_id, amount) VALUES($1, $2);`
    // ! transfer money out of the "from" account
    await connection.query(queryText, [fromId, -amount])
    // ! transfer money to the "to" account
    await connection.query(queryText, [toId, amount])


    await connection.query('COMMIT')
    res.sendStatus(200);
  } catch (error) { // This is what will run if the try code doesn't succeed.
    
    // * Will rollback to previous state if there is an error
    await connection.query('ROLLBACK')
    console.log("Transacrtion error on POST /transfer, rolling back...", error)
    res.sendStatus(500)

  } finally {
    // This is basically for cleanup and final things to do.
      // Will us to release our connection.
    connection.release()
  }
})

module.exports = router;
