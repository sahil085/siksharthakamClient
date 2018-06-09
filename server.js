const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/dist')));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/iconnect/index.html'));
});
app.listen(process.env.PORT || 8080);
