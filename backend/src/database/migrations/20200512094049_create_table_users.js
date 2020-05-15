
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table){
  	table.increments('id_usuario').primary()
  	table.string('nome').notNullable()
  	table.string('email').notNullable()
  	table.string('senha').notNullable()
  	table.timestamp('data_insercao').defaultTo(knex.fn.now())
  	table.timestamp('data_edicao').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios')
};
