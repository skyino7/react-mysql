// backend/index.js

const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classicmodels'
});

connection.connect();

app.get('/api/employees', (req, res) => {
    connection.query('SELECT * FROM employees', (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
