var apie = require('apie').app;

// return an express app
var app = apie();

app.set('view engine', 'pug');

// start server
app.listen(3000)