exports.up = function(knex, Promise) {
  return knex.schema.table("students", tbl => {
    tbl
      .integer("roles_id")
      .unsigned()
      .references("id") // column
      .inTable("roles") //table
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("students", tbl => {
    tbl.dropColumn("roles_id");
  });
};
