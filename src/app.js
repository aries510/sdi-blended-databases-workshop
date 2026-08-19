const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080;

const knex = require('knex')(require('../knexfile.js')['development']);


app.get('/', (request, response) => {
    response.send('Home Page')
});

app.listen(port, () => console.log(`App running on http://localhost:${port}`));