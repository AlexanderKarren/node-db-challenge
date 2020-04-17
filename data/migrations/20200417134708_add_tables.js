
exports.up = function(knex) {
    return (
        knex.schema
          .createTable("projects", table => {
                table.increments("id").primary();
                table.string("name", 255).notNullable().unique();
                table.string("description", 255);
                table.boolean("completed").defaultTo(false);
          })

          .createTable("tasks", table => {
            table.increments("id").primary();
            table.string("description", 255).notNullable().unique();
            table.string("notes");
            table.boolean("completed").defaultTo(false);

            table
            .integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        })

          .createTable("resources", table => {
                table.increments("id").primary();
                table.string("name", 255).notNullable().unique();
                table.string("description", 255);
          })

          .createTable("project_resources", table => {
            table.increments("id").primary();

            table
                .integer("project_id")
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
                .onUpdate("CASCADE");
  
            table
                .integer("resource_id")
                .notNullable()
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
                .onUpdate("CASCADE");

            table.unique(["project_id", "resource_id"]);
          })
    )
  };
  
  exports.down = function(knex) {
      return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
  };
  