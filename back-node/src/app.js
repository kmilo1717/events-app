const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.use('/api', eventRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not found' });
})

module.exports = app;