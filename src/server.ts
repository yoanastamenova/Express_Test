import 'dotenv/config';
import express from 'express';
import { createAuthor, deleteAuthorById, getAllAuthors, updateAuthorById } from './controllers/auto.controller';
import { createBooks, getAllBooks } from './controllers/books.controller';
import { getAllUsers, getUserProfile, getUserFavouritesBooks, updateUser } from './controllers/users.controller';
import { AppDataSource } from './database/db';
import { auth } from './middlewares/auth';
import { register, login } from './controllers/auth.controller';
import { isAdmin } from './middlewares/isAdmin';
import { addFavouriteBook, deleteFavourite } from './controllers/favourites.controller';
import cors from 'cors';


const app = express();

app.use(cors());

//middleware

app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
  // res.send('Server is healthy');

  res.status(200).json(
    {
      success: true,
      message: 'Server is Healthy'
    }
  )
})

//  AUTHORS
app.post('/authors', auth, createAuthor)
// rutas dinamincas usamos req params
app.put('/authors/:id', updateAuthorById)
app.delete('/authors/:id', deleteAuthorById)
app.get('/authors', getAllAuthors)

// BOOKS
app.get('/books', getAllBooks)
app.post('/books', auth, createBooks)
app.put('/books', )
app.delete('/books', )

// USER

app.get('/user', auth, isAdmin, getAllUsers);
app.get('/users/profile', auth, getUserProfile);
app.get('/users/favourites', auth, getUserFavouritesBooks)
app.post('/users/addFavourite', auth, addFavouriteBook)
app.put('/users/update', auth, updateUser)

//FAVOURITES 

app.delete('/favourites/delete/:id', auth, deleteFavourite)

// AUTH
app.post('/register', register)
app.post('/login', login)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })