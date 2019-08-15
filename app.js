const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    let campgrounds = [
        {name: "MC Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm74HV67ZUNWNNnA5HpqfrfLcyUrcZGA2n0NYJH0VbKgBP5rFcA"},
        {name: "Central Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm74HV67ZUNWNNnA5HpqfrfLcyUrcZGA2n0NYJH0VbKgBP5rFcA"},
        {name: "Central Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm74HV67ZUNWNNnA5HpqfrfLcyUrcZGA2n0NYJH0VbKgBP5rFcA"},
        {name: "Prospect Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm74HV67ZUNWNNnA5HpqfrfLcyUrcZGA2n0NYJH0VbKgBP5rFcA"},
    ]
    res.render('campgrounds', {campgrounds: campgrounds});

});
// make the route to the convintion as REST restful toutes 7 convention
app.post('/campgrounds', (req, res) => {
    // get data from the form and add to the campgroudns
    // rediret to the camgrounds
    console.log('POSTED')
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(PORT, console.log('Server is Started on Port', PORT))