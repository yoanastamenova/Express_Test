"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthorById = exports.updateAuthorById = exports.createAuthor = void 0;
const createAuthor = (req, res) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.nationality);
    res.json({
        success: true,
        message: 'CREATE AUTHOR'
    });
};
exports.createAuthor = createAuthor;
const updateAuthorById = (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: `AUTHOR UPDATED with id ${req.params.id}`
    });
};
exports.updateAuthorById = updateAuthorById;
const deleteAuthorById = (req, res) => {
    res.json({
        success: true,
        message: `AUTHOR DELETED With id: ${req.params.id}`
    });
};
exports.deleteAuthorById = deleteAuthorById;
