const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:4000/healthcheck');
        res.send(`<h1>${response.data}</h1>`);
    } catch (error) {
        res.send(`<h1>Error: ${error.message}</h1>`);
    }
});

app.listen(PORT, () => {
    console.log(`Frontend is running on port ${PORT}`);
});
