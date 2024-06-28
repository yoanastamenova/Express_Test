import express from 'express';

const app = express();

const PORT = process.env.port || 4000


app.get('/healthy', (req, res) => {
   res.send('Server is healthy')
})

app.listen(PORT, () => {
    console.log('Server is running.');
})

