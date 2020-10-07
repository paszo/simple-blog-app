const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const dbURI = process.env.DBURI || 'database';
console.log(dbURI);

app.get('/', (req, res) => {
    res.send('hello main master');
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});