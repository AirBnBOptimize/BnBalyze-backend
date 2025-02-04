const express = require('express');
const router = express.Router();
const axios = require('axios');
const restricted = require('../helpers/auth/restricted');
const request = require("request");
const Properties = require('../data/models/properties');

router.get('/',restricted,  (req, res) => {
    Properties.find()
        .then(properties => {
            if (properties) {
                res.status(200).json(properties)
            } else {
                res.status(404).json({ error: 'Could not find properties' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.post('/userproperties',     (req, res) => {
    axios
        .post("https://bnbalyze-ds.herokuapp.com", req.body)
        .then(response =>
            res.status(200).json(response.data.results.y_hat))

        .catch(err => res.status(500).json(err));
})

// router.post("/test",  restricted,  async (req, res) => {
//     try {
//         request.post(
//             {
//                 headers: { "content-type": "application/json" },
//                 url:
//                     "http://flask-env.kmg6svp6sr.us-east-2.elasticbeanstalk.com/prediction",
//                 zipcode: req.body.zipcode.toString(),
//                 bedrooms: parseFloat(req.body.bedrooms),
//                 bathrooms: parseFloat(req.body.bathrooms),
//                 property_type: req.body.property_type,
//                 room_type: req.body.room_type.toString(),
//                 accommodates: (req.body.accommodates),
//                 beds: (req.body.beds),
//                 bed_type: req.body.bed_type.toString()
                
//             },
//             (error, response, body) => {
//                 if (error) {
//                     return console.error(error);
//                 }
//                 console.log(body);
//                 res.status(200).json(JSON.parse(body));
//             }
//         );
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "error" });
//     }
// });

router.post('/account',  (req, res) => {
    Properties.add(req.body)
    .then(property => {
        if(property){
        res.status(200).json(property)
} else {
    res.status(404).json({error: ' Could not add that property'});
}
    })
    .catch(error => 
        res.status(500).send(error))
})

router.get('/:id', restricted, (req, res) => {
    Properties.findById(req.params.id)
        .then(properties => {
            if (properties) {
                res.status(200).json(properties);
            } else {
                res.status(404).json({ error: 'Could not find properties' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.get('/:id/properties', restricted, (req, res) => {
    Properties.findPropertiesByUserId(req.params.id)
        .then(userProperties => {
            if (userProperties) {
                res.status(200).json(userProperties)
            } else {
                res.status(404).json({ error: 'Could not find properties' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.put('/:id', restricted, (req, res) => {
    let properties = req.body;
    let id = req.params.id;
    Properties.update(properties, id)
        .then(updated => {
            if (updated) {
                res.status(200).json({ message: 'Updated Property' });
            } else {
                res.status(404).json({ message: 'Could not update Property' })
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.delete('/:id', restricted, (req, res) => {
    Properties.remove(req.params.id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ message: 'Property successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not delete user.' })
            }
        })
        .catch(error =>
            res.status(500).send(error))
});

module.exports = router;