const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const public = '/../client/dist/';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + public));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + public + 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});