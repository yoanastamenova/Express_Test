import 'dotenv/config';
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


//AUTHORS entitiy included

app.post('/authors', createAuthor)

app.put('/authors/:id', updateAuthorById);

app.delete('/authors/:id', deleteAuthorById);

//BOOKS entitiy included

app.get('/books', (req, res) => {
    res.send('GET ALL BOOKS')
})

app.post('/books', createBooks); 

app.put('/books/:id', updateBookById);

app.delete('/books/:id', deleteBookById);

//USERS entitiy included

app.get('/users', (req, res) => {      //show all users
    res.send(req.body)
})

app.put('/users/:id', updateUserById);

app.get('/users', (req, res) => {      //show all users
    res.send('Detalles del perfil')
})

app.post('/users', createUser);

app.delete('/users/:id', deleteUserById);

app.post('/users', );

app.get('/users/:id', )

// LOANS entitiy included

app.get('/loans', (req, res) => {
    res.send('Loans details')
})

