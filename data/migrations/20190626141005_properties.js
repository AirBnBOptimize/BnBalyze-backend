
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', prop => {
      prop.increments();
      prop
      .string('neighborhood')
      .notNullable();
      prop
      .string('room_type')
      .notNullable();
      prop
      .float('accommodates')
      .notNullable();
      prop
      .float('bedrooms')
      .notNullable();
      prop
      .float('number_of_reviews')
      .notNullable();
      prop
      .boolean('wifi')
      .notNullable();
      prop
      .boolean('cable_tv')
      .notNullable();
      prop
      .boolean('washer')
      .notNullable();
      prop
      .boolean('kitchen')
      .notNullable();
      prop
      .string('photo_url')
      .notNullable();
      prop
      .string('title')
      .notNullable();
      prop
      .string('url')
      .notNullable();
      prop
      .string('current_price')
      .notNullable();
      prop
      .float('recommendation_price')
      .notNullable();
      prop
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('properties')
};
