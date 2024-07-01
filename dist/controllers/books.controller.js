"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookById = exports.updateBookById = exports.createBooks = void 0;
const createBooks = (req, res) => {
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.author);
    res.json({
        success: true,
        message: 'CREATE BOOK'
    });
};
exports.createBooks = createBooks;
const updateBookById = (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: `BOOK UPDATED with id ${req.params.id}`
    });
};
exports.updateBookById = updateBookById;
const deleteBookById = (req, res) => {
    res.json({
        success: true,
        message: `BOOK DELETED With id: ${req.params.id}`
    });
};
exports.deleteBookById = deleteBookById;
