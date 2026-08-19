/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('car_models', function(table) {
        table.increments('id').primary();
        table.integer('manufacturer_id').unsigned();
        table.foreign('manufacturer_id').references(`id`).inTable('car_manufacturers');
        table.string('name').notNullable();
        table.string('chassis_code');
        table.string('years_produced')
        table.integer('engine_id').unsigned();
        table.foreign('engine_id').references(`id`).inTable('engine_types');
        table.decimal('engine_size_in_liters');
        table.integer('transmission_id').unsigned();
        table.foreign('transmission_id').references(`id`).inTable('transmission_types');
        table.integer('drivetrain_id').unsigned();
        table.foreign('drivetrain_id').references(`id`).inTable('drivetrain_types');
        table.integer('hp');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('car_models', table => {
        table.dropForeign('manufacturer_id');
        table.dropForeign('engine_id');
        table.dropForeign('transmission_id');
        table.dropForeign('drivetrain_id');
    })
    .then(function() { 
        return knex.schema.dropTableIfExists('car_models')
    })
};
