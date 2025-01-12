const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Поврзан со MongoDB'))
    .catch((err) => console.error('Грешка при поврзување:', err));

app.use(cors());
app.use(express.json());

// Пример рута
app.get('/', (req, res) => {
    res.send('Moj Trosok Backend!');
});

app.listen(PORT, () => {
    console.log(`Серверот работи на порта ${PORT}`);
});
