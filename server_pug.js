const express = require('express');
const app = express();
const port = 8000

app.set('view engine', 'pug');

app.get('/home', (req, res) => {
  res.render('home', { animal: 'Alligator' });
});

app.get('/', (req, res) => {
  res.send('Successful response.  No Pug usage, though.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
