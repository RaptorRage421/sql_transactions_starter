const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const accountRouter = require('./routes/account.router');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/account', accountRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
