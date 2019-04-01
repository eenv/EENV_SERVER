const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Success');
});
