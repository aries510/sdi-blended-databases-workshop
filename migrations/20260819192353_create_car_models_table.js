/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('car_models', function(table) {
        table.increments('id');
        table.string('manufacturer_id');
        table.foreign('manufacturer_id').references('car_manufacturers.id');
        table.string('name').notNullable();
        table.string('chassis_code');
        table.string('years_produced')
        table.string('engine_id');
        table.foreign('engine_id').references('engine_types.id')
        table.decimal('engine_size_in_liters')
        table.string('transmission_id');
        table.foreign('transmission_id').references('transmission_types.id');
        table.string('drivetrain_id');
        table.foreign('drivertrain_id').references('drivetrain_types.id')
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
