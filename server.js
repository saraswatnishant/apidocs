const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const mockData = require('./mock/mock.json'); 

app.get('/getApisList', function (req, res) {
 return res.json(mockData);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
let listener = app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${listener.address().port}!`))