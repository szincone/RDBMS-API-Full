exports.up = function(knex, Promise) {
  // implement the change we want in our db
  return knex.schema.createTable("students", function(table) {
    // generates a primary key called id and makes it auto-increment
    table.increments();

    table
      .string("name", 128)
      .notNullable()
      .unique("uq_name");

    // foreign key
    table
      .integer("cohort_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cohorts");
  });
};

exports.down = function(knex, Promise) {
  // we undo the changed made to the db on knex:migrate rollback
  return knex.schema.dropTable("students");
};
