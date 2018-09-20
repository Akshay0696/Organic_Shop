const express = require('express');
const app = express();
const path =require('path');
app.use(express.static(__dirname + '/dist/oshop'));

// PathLocationStrategy

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/dist/oshop/index.html'));
});

console.log('Console Listening!');

app.listen(process.env.PORT || 8080);