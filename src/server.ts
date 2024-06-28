import express from 'express';
import { createAuthor, deleteAuthorById, updateAuthorById } from '../controllers/auto.controller';
import { createBooks, deleteBookById, updateBookById } from '../controllers/books.controller';
import { createUser, deleteUserById, updateUserById } from '../controllers/users.controller';

const app = express();

//middleware

app.use(express.json())

const PORT = process.env.port || 4000;

app.get('/healthy', (req, res) => {
    //    res.send('Server is healthy')

    res.status(200).json(
        {
     success: true,
     message: "Server is healthy"
    }
)
})

app.listen(PORT, () => {
    console.log('Server is running.');
})


//AUTHORS

app.post('/authors', createAuthor)

//rutas dianmicas usamos req params
app.put('/authors/:id', updateAuthorById);

//DELETE
app.delete('/authors/:id', deleteAuthorById);

//BOOKS

app.get('/books', (req, res) => {
    res.send('GET ALL BOOKS')
})

app.post('/books', createBooks);

app.put('/books/:id', updateBookById);

app.delete('/books/:id', deleteBookById);

//USERS

app.get('/users', (req, res) => {
    res.send('GET ALL USERS')
})

app.post('/users', createUser);

app.put('/users/:id', updateUserById);

app.delete('/users/:id', deleteUserById);
