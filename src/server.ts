import express from 'express';

const app = express();

//middleware

app.use(express.json())

const PORT = process.env.port || 4000;

app.get('/healthy', (req, res) => {
   res.send('Server is healthy')
})

//AUTHORS

app.post('/authors', (req, res) => {
    //recuperar la informacion de la req  
   console.log(req.body)

   res.send('CREATE AUTHOR')
})


//BOOKS

app.get('/books', (req, res) => {
    res.send('GET ALL BOOKS')
 })

 app.post('/books', (req, res) => {
    res.send('Book CREATED')
 })

 app.put('/books', (req, res) => {
    res.send('Book UPDATED')
 })

 app.delete('/books', (req, res) => {
    res.send('Book DELETED')
 })

app.listen(PORT, () => {
    console.log('Server is running.');
})
