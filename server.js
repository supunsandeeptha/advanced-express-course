const express = require('express');
//load static content
const path = require('path');

const app = express();

const port = 3000;
// using the static middleware to link the css styles and images
app.use(express.static(path.join(__dirname,'./static')));
// serving index.html using path module
app.get('/',(request,response) =>{
    response.sendFile(path.join(__dirname, './static/index.html'));
});
// serving speakers.html to link the css stypes and images
app.get('/speakers',(request,response) => {
    response.sendFile(path.join(__dirname,'./static/speakers.html'));
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log(`Express server listening on port ${port}!`);
    }
})