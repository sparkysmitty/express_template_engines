const express = require('express');
const app = express();
const port = 8000

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  let animals = [
    { name: 'Alligator' },
    { name: 'Crocodile' }
  ];
  res.render('home', { animals: animals });
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
