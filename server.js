
// SET VARIABLES
    // Will need to DOWNLOAD EXPRESS. turn on express
const express = require('express')  
const app = express()
const PORT = 8000

    // set up CORS to get API to work. download CORS. turn on CORS
const cors = require('cors')
app.use(cors())

// API Objects
const artists = {
    'taylor swift': {
        'birthday': 'December 13, 1989', 
        'name': 'taylor swift', 
        'birthLocation': 'West Reading, Pennsylvania', 
        'instruments': 'vocals'
    },
    'unknown': {
        'birthday': 'unknown', 
        'name': 'unknown', 
        'birthLocation': 'unknown', 
        'instruments': 'unknown'
    },
    'britney spears': {
        'birthday': 'December 2, 1981', 
        'name': 'Britney Jean Spears', 
        'birthLocation': 'McComb, Mississippi', 
        'instruments': 'vocals'
    },
    'selena gomez': {
        'birthday': 'July 22, 1992', 
        'name': 'Selena Marie Gomez', 
        'birthLocation': 'Grand Prairie, Texas', 
        'instruments': 'vocals'
    },
    'rihanna': {
        'birthday': 'February 20, 1988', 
        'name': 'Robyn Rihanna Fenty', 
        'birthLocation': 'Saint Michael, Barbados', 
        'instruments': 'vocals'
    },
    'beyonce': {
        'birthday': 'September 4, 1981', 
        'name': 'Beyonce Giselle Knowles', 
        'birthLocation': 'Houston, Texas', 
        'instruments': 'vocals'
    },
    'mariah carey': {
        'birthday': 'March 27, 1969', 
        'name': 'Mariah Carey', 
        'birthLocation': 'Huntington, New York', 
        'instruments': 'vocals'
    },
    'olivia rodrigo': {
        'birthday': 'February 20, 2003', 
        'name': 'Olivia Isabel Rodrigo', 
        'birthLocation': 'Murrieta, California', 
        'instruments': 'vocals'
    }
}

// serve up a file
    // set up GET requests
app.get( '/' , (request, response) => {
    response.sendFile( __dirname + '/index.html' )
})

    // set up GET api requests using parameters
app.get('/api/:artistName', (request, response) => {
        // set a variable for the requested parameter
    const nameOfArtist = request.params.artistName.toLowerCase()
        // set up responses
    if ( artists[ nameOfArtist ] ) {
        response.json(  artists[ nameOfArtist ] )
    } else {
        response.json( artists['unknown'] )
    }

    // response.json( console.log( artists ) )
    // console.log( artists[nameOfArtist] )
    
})

    // set up server port
app.listen( process.env.PORT || PORT, () => {
    console.log(`Server running Port ${PORT}`)
})