// Import Model
const Book = require ('../models/books');
// Function add and export
exports.AddBook = async (req,res) => {
    try {
        const {title,author,published_year,genre,available} = req.body;
        const book = new Book ({title,author,published_year,genre,available});
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500),json({message : err.message});
    }
};
// Function update and export
exports.UpdateBook = async (req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({message: 'Book Not Found'});
        const update = req.body;
        Object.assign(book,update);
        const UpdateBook = await book.save();
        res.status(201).json(UpdateBook);
    } catch (err) {
        res.status(500),json({message : err.message});
    }
};
// Function delete and export
exports.DeleteBook = async (req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({message: 'Book Not Found'});
        await Book.findByIdAndDelete(id);
        res.json({message: 'Book Deleted'});
    } catch (err) {
        res.status(500),json({message : err.message});
    }
}; 
// Function get all data and export
exports.GetAll = async (req,res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (err) {
        res.status(500),json({message : err.message});
    }
};
// Function get data by genre and export
exports.GetByGenre = async (req,res) => {
    try {
        const {genre} = req.params;
        const book = await Book.findOne({genre : genre});
        res.status(200).json(book);
    } catch (err) {
        res.status(500),json({message : err.message});
    }
}