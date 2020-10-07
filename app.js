const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const dbURI = process.env.DBURI;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
});


app.get('/', (req, res) => {
    res.send('hello main master');
})


