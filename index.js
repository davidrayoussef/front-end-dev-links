const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  // response.send('Hello World!');
  throw new Error('oops');
});

app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send('Something broke!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err}`);
  }

  console.log(`Server is running on port ${port}`);
});
