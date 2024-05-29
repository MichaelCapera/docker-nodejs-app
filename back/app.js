const express = require('express');
const app = express();
const PORT = 4000;

app.get('/healthcheck', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
