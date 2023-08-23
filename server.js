let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/space-news-app'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname+'/dist/space-new-app/index.html')
});

app.listen(process.env.PORT || 8080)
