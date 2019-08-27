bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {user_id: 1, id:1,  "neighborhood": "Pankow", "room_type": "Entire home/apt", "accommodates": 5, "bathrooms": 5.0, "bedrooms": 5.0, "number_of_reviews":243, "wifi": true, "cable_tv": false, "washer": true, "kitchen": true },
        { user_id: 1, id: 2, "neighborhood": "Mitte", "room_type": "Entire home/apt", "accommodates": 9, "bathrooms": 3.0, "bedrooms": 3.0, "number_of_reviews":43, "wifi": true, "cable_tv": false, "washer": true, "kitchen": false  },
        { user_id: 1, id: 3, "neighborhood": "Lichtenberg", "room_type": "Private Room", "accommodates": 13, "bathrooms": 4.0, "bedrooms": 7.0, "number_of_reviews":143, "wifi": true, "cable_tv": true, "washer": true, "kitchen": true   }
      ]);
    });
};
