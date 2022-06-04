
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
        'age': 32, 
        'name': 'taylor swift', 
        'birthLocation': 'West Reading, Pennsylvania', 
        'instruments': 'vocals'
    },
    'unknown': {
        'age': 0, 
        'name': 'unknown', 
        'birthLocation': 'unknown', 
        'instruments': 'unknown'
    },
    'britney spears': {
        'age': 40, 
        'name': 'Britney Jean Spears', 
        'birthLocation': 'McComb, Mississippi', 
        'instruments': 'vocals'
    },
    'olivia rodrigo': {
        'age': 19, 
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