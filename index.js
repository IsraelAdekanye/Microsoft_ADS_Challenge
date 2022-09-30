const express = require('express');
const app = express();
const bookRouter = require('./routes/books')
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
app.use(express.json())
app.use('/books', bookRouter)
app.use(cors())


//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    //Listen for Requests
    .then(() => {
                app.listen(process.env.PORT, () => {
                    console.log(`You are Connected to MongoDB and Server has started on port ${process.env.PORT}`)
            })
        }
    )
    .catch((error)=>{
        console.log(error);
    })

