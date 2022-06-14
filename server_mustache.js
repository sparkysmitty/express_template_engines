const express = require('express');
const app = express();
const port = 8000

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/home', (req, res) => {
  let animals = [
    { name: 'Alligator' },
    { name: 'Crocodile' }
  ];
  res.render('home', { animals: animals });
});


// app.get('/home', (req, res) => {
//   res.render('home', { animal: 'Alligator' });
// });

app.get('/', (req, res) => {
  res.send('Successful response.  No Mustache usage, though.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
