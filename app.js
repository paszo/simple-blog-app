const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

const dbURI = process.env.DBURI;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(router);

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to the db...');
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
});




