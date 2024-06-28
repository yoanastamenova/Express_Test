"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.port || 4000;
app.get('/healthy', (req, res) => {
    res.send('Server is healthy');
});
app.get('/books', (req, res) => {
    res.send('GET ALL BOOKS');
});
app.get('/books', (req, res) => {
    res.send('Book create');
});
app.listen(PORT, () => {
    console.log('Server is running.');
});
