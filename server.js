const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('dist'));

app.listen(port, (err) => {
  if (err) console.log(`Error: ${err}`);

  console.log(`Server is running on port ${port}`);
});
