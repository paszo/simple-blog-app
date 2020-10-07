const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const dbURI = process.env.DBURI;

app.get('/', (req, res) => {
    res.send('hello');
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

