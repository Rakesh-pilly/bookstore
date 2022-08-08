const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express()
const cors = require('cors')
//Middleware 

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.get("/",(req,res,next)=> {
    res.status(200).json({message: "hello world"})
})
app.use("/books", router)


mongoose.connect('mongodb+srv://rakesh:64tYtVQ0WtItOqyo@cluster0.u4ikm.mongodb.net/bookStore?retryWrites=true&w=majority')
.then(()=> console.log("Connected to the database"))
.then(()=> {
    app.listen(PORT,()=> {
        console.log("port running on ", PORT)
    })
}).catch((err)=> {
    console.log("error", err)
})



