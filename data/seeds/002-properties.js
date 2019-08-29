bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {user_id: 1, id:1,  "neighborhood": "Berlin", "room_type": "Entire home/apt", "accommodates": 5, "bedrooms": 5.0, "number_of_reviews":243, "wifi": true, "cable_tv": false, "washer": true, "kitchen": true, "photo_url": "https://a0.muscache.com/im/pictures/19350d59-9b5e-4090-a0c7-21b03f1bb3a3.jpg?aki_policy=xx_large", "title": "Cosy bedroom at Berlin's green outskirts", "url": "https://www.airbnb.com/rooms/30457599?toddlers=0&adults=1&check_in=2019-09-29&check_out=2019-09-30&source_impression_id=p3_1567046952_mSTZf1jHN0mU4PvB", "current_price": 30, "recommendation_price": 37 },
        {user_id: 1, id:2,  "neighborhood": "Berlin", "room_type": "Entire home/apt", "accommodates": 2, "bedrooms": 1.0, "number_of_reviews":5, "wifi": true, "cable_tv": true, "washer": true, "kitchen": true, "photo_url": "https://a0.muscache.com/im/pictures/16e55977-167c-4c65-9e32-5cd07d504ae9.jpg?aki_policy=xx_large", "title": "120m2 Altbau flat room w. balcony in Mitte/P-berg", "url": "https://www.airbnb.com/rooms/30457599?toddlers=0&adults=1&check_in=2019-09-29&check_out=2019-09-30&source_impression_id=p3_1567046952_mSTZf1jHN0mU4PvB", "current_price": 120, "recommendation_price": 115 },
        {user_id: 1, id:3,  "neighborhood": "Berlin", "room_type": "Entire home/apt", "accommodates": 11, "bedrooms": 3.0, "number_of_reviews":72, "wifi": true, "cable_tv": true, "washer": true, "kitchen": true, "photo_url": "https://a0.muscache.com/im/pictures/95d0baa8-7f6a-4031-a3e1-25cd266c805a.jpg?aki_policy=xx_large", "title": "BIG Central CityApt.PotsdamerPlatz Kreuzberg Mitte", "url": "https://www.airbnb.com/rooms/22739003?toddlers=0&adults=2&check_in=2019-12-04&check_out=2019-12-05&source_impression_id=p3_1567048004_cr5CqjHhsMUiFz28", "current_price": 249, "recommendation_price": 276 }
      ]);
    });
};
