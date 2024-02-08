// backend/index.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classicmodels'
});

connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query('SELECT * FROM customers', (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results);
        console.log(results);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
