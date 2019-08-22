const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const mongoose = require('mongoose')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// connect mongoose to our local database
mongoose.connect('mongodb://localhost/yelpcamp', { useNewUrlParser: true });
// setup schema 
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Campground = mongoose.model('Campground', campgroundSchema)

// Campground.create({
//     name: "MC Park",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm74HV67ZUNWNNnA5HpqfrfLcyUrcZGA2n0NYJH0VbKgBP5rFcA"
// }, (err, newCampGround) => {
//         if (err) {
//             console.log("SOmething Went Wrong Try again", err)
//         } else {
//             console.log("New Camp Ground is created", newCampGround )
//         }
// } )



app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log('SOmething went wrong', err)
        } else {
            
            res.render('campgrounds', {campgrounds: allCampgrounds});
        }
    })
});
// make the route to the convintion as REST restful toutes 7 convention
app.post('/campgrounds', (req, res) => {
    
    // get data from the form and add to the campgroudns
    let name = req.body.name
    let image = req.body.image
    let newCampGround = {
        name: name,
        image: image
    }
    Campground.create(newCampGround, (err, newCampgtound) => {
        if (err) {
            console.log("SOmethign went wrong", err)
        } else {
            // rediret to the camgrounds
            res.redirect('/campgrounds')
        }
    }); 
});


// Create Form Render 
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(PORT, console.log('Server is Started on Port', PORT))