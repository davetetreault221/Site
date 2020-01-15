
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Paths used to set up config files
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Sets a certain value of EXPRESS with a given value
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//Setting the main route for the default welcome page
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
                        title: 'Daves Life',
                        name: 'Dave Tetreault'
    })
})


//Sending JSON
app.get('/help', (req, res) => {
    res.send({
        name: 'Dave',
        age: '26'
    })
})

//Rendering the ABOUT page
app.get('/about', (req, res) => {

    res.render('about', {
                    title: 'About Page',
                    name: 'Dave Tetreault'
    })

})

// Used Purely For Testing
//************************************************************
app.get('/testing', (req, res) => {

    let name;

    if(req.query.hello) {
        name = req.query.hello;
    }
    else
    {
        name = "Unknown";
    }


    res.render('testing', {
        title: 'About Page',
        name: name
    })

});
//************************************************************



app.get('/weather', (req, res) => {

    res.send('This is the WEATHER PAGE')

})


//This is how to set up a 404 page

app.get('*', (req, res) => {

    res.send('This is a 404 PAGE')

})

app.listen(3000, () => {

    console.log('Hey Dawg')
})
