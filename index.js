const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./src/application/routes/');
const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(express.json())

mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Connected to DB');
        https.createServer({
            key: fs.readFileSync('catdog.key'),
            cert: fs.readFileSync('catdog.crt')
        }, app).listen(process.env.PORT, () =>{
            console.log(`Listening with SSL certificate en ${process.env.PORT}`)
        });
    })
    .catch(err => console.error(err));
