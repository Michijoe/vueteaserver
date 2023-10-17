const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOption = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOption));

const db = require('./app/models');
// Sequelize
db.connex.sync();

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route
require('./app/routes/product.route')(app);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to my application." });
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})