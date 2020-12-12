const express = require('express');
const api = require('./routs/api.js')

let app = express();

app.use(express.static('public'));

app.use('/api', api);

// корень сайта
app.use('/', (req, res) => {
// res.render('public/index');
res.end();
});

app.listen(3000, () => {console.log('server started')});
