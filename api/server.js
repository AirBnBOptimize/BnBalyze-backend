const express = require('express');
const helmet = require('helmet');

/*const usersRouter= require('../dummyusers/users-router.js');*/
const server = express();

server.use(express.json());
server.use(helmet());
//server.use('/api/users', usersRouter)
const properties = [
    {
        id: 0,
        "title": 'Southside Hacienda',
        "bedrooms": 3,
        "baths": 2,
        "sqfoot": 1500,
        "pool" :" yes", 
        "asking price": 740
    },
    {
        id: 1,
        "title": 'Magic Mountain Mirage',
        "bedrooms": 4,
        "baths": 5,
        "sqfoot": 2500,
        "pool": " yes",
        "asking price": 850
    },
    {
        id: 2,
        "title": 'Bluff Creek Escape', 
        "bedrooms": 3,
        "baths": 2,
        "sqfoot": 2500,
        "pool": " yes",
        "asking price": 1050 
    },
    {
        id: 3,
        "title": 'Neighborhood Chalet',
        "bedrooms": 9,
        "baths": 12,
        "sqfoot": 4500,
        "pool": " yes",
        "asking price": 1500
    },

]



server.get('/', (req, res) => {
    res.send('hello the server is up and running')
});

server.get('/properties', (req, res)=> {
    res.status(200).json(properties);
})

module.exports = server;