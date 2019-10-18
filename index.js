const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const router = require('./routes/router');
const fs = require('fs');
const https = require('https');

app.use(express.urlencoded({extended:true}));
app.use(router);


app.get('/a', (req, res) => {
    console.log('djfds')
})
mongoose.connect('mongodb://localhost:27017/pepe')
    .then(() => {
        console.log('Connected to DB');
        https.createServer({
            key: fs.readFileSync('catdog.key'),
            cert: fs.readFileSync('catdog.crt')
        }, app).listen(PORT, () =>{
            console.log(`Listening with SSL certificate en ${PORT}`)
        });
    })
    .catch(err => console.error(err));
