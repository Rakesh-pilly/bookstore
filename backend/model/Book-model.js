const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const bookSchema = new Schema({
    name : {
        type : String,
        requried: true
    },
    author: {
        type : String,
        required:true
    },
    description: {
        type : String,
        required:true
    },
    price: {
        type : Number,
        required:true
    },
    availabe: {
        type : Boolean,
    },
    image: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Books", bookSchema);