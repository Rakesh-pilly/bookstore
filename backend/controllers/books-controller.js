const BookModel = require("../model/Book-model");



const getAllBooks = async(req,res,next)=> {
    let books;
    try{

        books = await BookModel.find();
    }
    catch(err){
        console.log(err);
    }  

    if(!books){
        return  res.status(404).json({message: "No products found"})
    }else{
        return res.status(200).json({books})
    }

}

const getById = async(req,res,next)=> {
    const id = req.params.id;
    let book;
    try {
        book = await BookModel.findById(id);

    } catch (error) {
        console.log(error)
    }

    if(!book){
        return res.status(404).json({message: "No Book Found"})
    }

    return res.status(201).json({book});
}

const addBook = async(req,res,next)=> {
    const {name,author,availabe, price,description, image} = req.body;
    let book;
    try{
        book = new BookModel({
            name,
            author,
            availabe,
            price,
            description,
            image
        })

        await book.save();


    }
    catch(err){
        console.log(err);
    }


    if(!book){
        return res.status(500).json({message: "Unable To Add"})
    }

    return res.status(201).json({book})
}


const updateBook = async(req,res,next)=> {
    const id = req.params.id;
    const {name,author,availabe, price,description,image} = req.body;

    let book;
    try {
        book = await BookModel.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            availabe,
            image
        });

        book = await book.save()

    } catch (error) {
        console.log(error)
    }

    if(!book){
        return res.status(404).json({message: "Unable to Update by this Id"})
    }

    return res.status(201).json({book});
}

const deleteBook = async(req,res, next)=>{
    const id = req.params.id;

    let book;

    try {
        book = await BookModel.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }

    if(!book){
        return res.status(404).json({message: "Unable to Delete by this Id"})
    }

    return res.status(201).json({message: "product succfully deleted"});
    
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
