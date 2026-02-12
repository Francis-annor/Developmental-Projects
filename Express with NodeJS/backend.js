import express from 'express';

const app = express();
const port = 5500;
const hostname = '127.0.0.1';

app.use(express.urlencoded({extended: true}));

app.post('/submit', (req, res) =>{
    const name = req.body.fullname;
    const email = req.body.email;
    const phone = req.body.tel;
    const message = req.body.message;
    res.send(`
        <h3>Name: ${name}</h3>
        <p>Email: ${email}</p>
        <p>Telephone: ${phone}</p>
        <p>Message: ${message}</p>
    `)
});

app.listen(port, hostname, () => {
    console.log(`Backend is running successfully on port http://localhost:${port}`);
});