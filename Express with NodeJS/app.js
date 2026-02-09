import express, { urlencoded } from 'express';

const app = express();
const port = 3997;

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.listen(port, ()=>{
    console.log(`Server running on port: http://localhost:${port}`);
});