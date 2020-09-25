
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {RecipeTitle: 'Grilled Cheese Sandwich'},
        {RecipeTitle: 'Peanut Butter and Jelly Sandwich'},
        {RecipeTitle: 'Spaghetti'},
        {RecipeTitle: 'Salad'},
        {RecipeTitle: 'Burgers'},
        {RecipeTitle: 'Nachos'},
        {RecipeTitle: 'Crockpot BBQ Chicken'},
        {RecipeTitle: 'Pizza'},
        {RecipeTitle: 'Philly Cheese Steak Subs'},
        {RecipeTitle: 'Tacos/Burritos'}
      ]);
    });
};
