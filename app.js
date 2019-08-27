const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const mongoose = require('mongoose')
// using ejs on the front end view engine
app.set('view engine', 'ejs');
// this need to take a look into why
app.use(bodyParser.urlencoded({ extended: true }));

// connect mongoose to our local database
mongoose.connect('mongodb://localhost/yelpcamp', { useNewUrlParser: true });

// setup schema
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    des: String
});
// setup the model
const Campground = mongoose.model('Campground', campgroundSchema)


app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log('SOmething went wrong', err)
        } else { 
            res.render('index', {campgrounds: allCampgrounds});
        }
    })
});
// make the route to the convintion as REST restful routes 7 convention
app.post('/campgrounds', (req, res) => {
    
    // get data from the form and add to the campgroudns
    let name = req.body.name
    let image = req.body.image
    let des = req.body.des
    let newCampGround = {
        name: name,
        image: image,
        des: des
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


// Create Form Render new has to before the show routes
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});
// SHOW
app.get('/campgrounds/:id', (req, res) => {
    // find the campground with the id and show it to the
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err) {
            console.log("Something Went Wrong")
        } else {
            res.render("show", { campground: foundCampground });
        }
    })
});

app.listen(PORT, console.log('Server is Started on Port', PORT))