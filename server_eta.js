const express = require('express');
const app = express();
const port = 8000

var eta = require("eta")
app.engine("eta", eta.renderFile)
app.set("view engine", "eta")
// app.set("views", "./views")

app.get('/home', (req, res) => {
  let animals = [
    { name: 'Alligator' },
    { name: 'Crocodile' }
  ];
  console.log(animals)
  res.render('home', { animals: animals });
});

app.get('/', (req, res) => {
  res.send('Successful response.  No Eta usage, though.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
