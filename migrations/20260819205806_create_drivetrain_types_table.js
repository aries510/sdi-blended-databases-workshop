/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('drivetrain_types', function(table) {
        table.increments('id').primary();
        table.integer('wheels_driven').notNullable();
        table.string('engine_position').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('drivetrain_types')
};
