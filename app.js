const express = require('express');

let app = express();

app.use(express.static('public'));

app.use('/', (req, res) => {
				res.send(public/index.html);
});

app.listen(3000, () => {console.log('server started')});
