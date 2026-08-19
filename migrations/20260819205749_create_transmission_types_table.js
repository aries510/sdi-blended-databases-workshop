/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('transmission_types', function(table) {
        table.increments('id').primary();
        table.string('type').notNullable();
        table.integer('number_of_gears').notNullable;
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('transmission_types')
};
