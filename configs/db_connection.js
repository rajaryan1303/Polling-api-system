const mongoose = require('mongoose');

const url = process.env.PS_DB_URI; // mongoodb url
mongoose.connect(mongodb+srv://shaktibtcs38:shaktibtcs38@cluster0.nahvsqz.mongodb.net/?retryWrites=true&w=majority); // connecting to db

const db = mongoose.connection; // getting connection of db

db.on('error', console.error.bind(console, 'Error: connecting to db :: MongoDB')); // if error while conecting to db


// once connection is open (started)
db.once('open', (err) => {
    if (err) {
        console.log('Error: while opening db connection', err);
    } else {
        console.log('DB connection successfull :: MongoDB');
    }
})


module.exports = db;