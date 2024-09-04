const express = require("express");
const router = express.Router();

// Import Controller
const {AddBook,UpdateBook,GetAll,GetByGenre,DeleteBook} = require ('../controllers/bookController');
// APIs Routing Config
router.post('/',AddBook);
router.put('/:id',UpdateBook);
router.get('/',GetAll);
router.get('/:genre',GetByGenre);
router.delete('/:id',DeleteBook);

// Export routers
module.exports = router;