const express = require('express');

const app = express();
const port = 8000

// simple middleware example -- print time for every request, then continue
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
