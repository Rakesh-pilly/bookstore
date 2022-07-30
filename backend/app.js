const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express()
const cors = require('cors')
//Middleware 
app.use(express.json())
app.use(cors())
app.use("/books", router)


mongoose.connect('mongodb+srv://rakesh:64tYtVQ0WtItOqyo@cluster0.u4ikm.mongodb.net/bookStore?retryWrites=true&w=majority')
.then(()=> console.log("Connected to the database"))
.then(()=> {
    app.listen(5000,()=> {
        console.log("port running on 5000")
    })
}).catch((err)=> {
    console.log("error", err)
})



