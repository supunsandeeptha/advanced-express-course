const express = require('express');
// load static content
const path = require('path');

const route = require('./routes/routes.js');

const app = express();
const port = 3000;
// ejs template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// using the static middleware to link the css styles and images
app.use(express.static(path.join(__dirname, './static')));
// serving index.html using path module

// using the route middleware
app.use('/', route());

app.listen(3000, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${port}!`);
  }
});
