import express, { json } from 'express';
import sqlite from 'sqlite3';

const sqlite3 = new sqlite.verbose();

let sql;

let db = new sqlite3.Database('./messagedb.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Connection to SQL Database Successful');
});

// sql = `CREATE TABLE IF NOT EXISTS messages(
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// name TEXT,
// email VARCHAR,
// phone VARCHAR,
// message VARCHAR)`;

// db.run(sql, [], (err) =>{
//     if(err) return console.log(err.message);
//     console.log(`Message Table created successfully`);
// });

const app = express();
const port = 5500;
const hostname = '127.0.0.1';

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req, res) =>{
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.tel;
    const message = req.body.message;

    if(id == null){
        sql = `INSERT INTO messages(name, email, phone, message) VALUES(?,?,?,?)`
        db.run(sql,
            [name, email, phone, message],
            (err) =>{
                if(err) return console.error(err.message);
                console.log(`Data Insertion Successful`);
            }
        );
    }else if(id != null){
        sql =  `UPDATE messages SET name = ?, email = ?, phone = ?, message = ? WHERE id = ?`;
        db.run(
            sql,
            [name, email, phone, message, id],
            (err) => {
                if(err) return console.error(err.message);
                console.log('Message Updated Successfully');
            }
        );
    }
});

app.get('/api/messages', (req, res) => {    
    sql = `SELECT * FROM messages`;
    db.all(
        sql,
        [],
        (err, rows) => {
        if(err) return console.error(err.message);
        // rows.forEach(row => {
        //     console.log(row);
        // });
        // for(let r in rows){
        //     console.log(r);
        // }
        res.json(rows);
    });
});

app.post('/delete', (req, res) =>{
    const id = req.body.id;
    sql = `DELETE FROM messages WHERE id = ?`;
    db.run(
        sql,
        [id],
        (err) => {
            if (err) return console.error(err.message);
            console.log('Message Deleted Successfully');
        }
    );
});

app.listen(port, hostname, () => {
    console.log(`Backend is running successfully on port http://localhost:${port}`);
});