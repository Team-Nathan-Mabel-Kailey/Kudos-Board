const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const boardRoutes = require('./Routes/boardRoutes');
const cardRoutes = require('./Routes/cardRoutes');

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use('/boards', boardRoutes);
app.use('/cards', cardRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
