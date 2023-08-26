require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3500
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
connectDB()

app.use(cors(corsOptions))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, '/public')))

// Routes


// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('js')) {
//         res.sendFile(path.join(__dirname, 'app', '404.js'))
//     } else if (req.accepts('json')) {
//         res.json({ message: "404 Not Found" })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

mongoose.connection.on('error', error => {
    console.log(error);
})