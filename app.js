const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('landing')
});

app.get('/campgrounds', (req, res) => {
    let campgrounds = []
    // res.send('Hello')

});

app.listen(3000, console.log('Server is Started'));