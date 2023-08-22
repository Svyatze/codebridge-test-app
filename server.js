let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/angular-cdbrdg-test'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname+'/dist/angular-cdbrdg-test/index.html')
});

app.listen(process.env.PORT || 8080)
