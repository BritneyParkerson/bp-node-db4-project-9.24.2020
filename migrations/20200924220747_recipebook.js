
exports.up = function(knex) {
  return knex.schema
   .createTable('Recipes', tbl => {
       tbl.increments()
       tbl.text('RecipeTitle', 128).unique().notNullable()
   })
   .createTable('Ingredients', tbl => {
       tbl.increments()
       tbl.text('ingredient', 128).unique().notNullable()
   })
   .createTable('Directions', tbl => {
       tbl.increments()
       tbl.integer('R_Id', 128).unsigned().notNullable().references('R_Id')
       tbl.integer('SNum').notNullable().unsigned()
       tbl.text('Step', 256).notNullable()
   })

   .createTable('RecipeGuide', tbl => {
        tbl.integer('I_Id').notNullable().references('I_Id')
        tbl.integer('R_Id').notNullable().references('R_Id')
        tbl.float('Quantity', 128).notNullable().unsigned()
   })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Recipes')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Directions')
    .dropTableIfExists('RecipeGuide')
};
