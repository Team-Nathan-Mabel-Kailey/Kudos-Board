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
<<<<<<< HEAD
// app.use('/comments', commentRoutes);
=======
>>>>>>> 6f2890b069884de8557e168c0d6555e9379c29ae

const PORT = 5173;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
