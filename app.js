const express = require('express');
const app = express();
const router = require('./routes/routers');
const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3000, (err) => {
    if(err) throw err;
    console.log('Mini-Message-Board Running on server http://127.0.0.1:3000')
});