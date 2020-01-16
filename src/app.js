
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
    res.render('index');
})

//Rendering the ABOUT page
app.get('/about', (req, res) => {
    res.render('about');
})


//404 Page
//**************************************************
app.get('*', (req, res) => {

    res.send('404 PAGE NOT FOUND')

})
//**************************************************

app.listen(3000, () => {

    console.log('Server Started')
})
