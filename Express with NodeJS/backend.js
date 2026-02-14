import express from 'express';
import sqlite from 'sqlite3';

const sqlite3 = sqlite.verbose();

let db = new sqlite3.Database('./schooldb.sqlite', (err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Connection to SQL Database Successful');
});

db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email VARCHAR,
    phone VARCHAR,
    message VARCHAR
    )`
);

const app = express();
const port = 5500;
const hostname = '127.0.0.1';

app.use(express.urlencoded({extended: true}));

app.post('/submit', (req, res) =>{
    const name = req.body.fullname;
    const email = req.body.email;
    const phone = req.body.tel;
    const message = req.body.message;

    db.run(`INSERT INTO users(name, email, phone, message) VALUES(?,?,?,?)`,
        [name, email, phone, message]
    );

    res.send(`Dear ${name}, Your message has successfully been received. We will get back to you within 48 hours.`)
});

app.listen(port, hostname, () => {
    console.log(`Backend is running successfully on port http://localhost:${port}`);
});