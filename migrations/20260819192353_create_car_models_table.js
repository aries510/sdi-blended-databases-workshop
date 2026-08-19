/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('car_models', function(table) {
        table.increments('id');
        table.string('manufacturer_id').unsigned();
        table.foreign('manufacturer_id').references('car_manufacturers.id')
        table.string('name').notNullable();
        table.string('engine');
        table.decimal('engine_size_in_liters')
        table.string('transmission');
        table.string('drivetrain');
        table.integer('hp');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('car_models', table => {
        table.dropForeign('manufacturer_id')
    })
    .then(function() { 
        return knex.schema.dropTableIfExists('car_models')
    })
};
