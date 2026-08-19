/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('car_models').del()
  await knex('car_models').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
