const express = require('express');
const app = express();
app.set('view engine', 'ejs');


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
    res.render('campgrounds');

});

app.listen(3000, console.log('Server is Started'))