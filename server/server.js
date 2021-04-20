const express = require('express');
const { router } = require('./controllers/index.js');

const app = express();
const PORT = 3001;

app.use(router);

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));