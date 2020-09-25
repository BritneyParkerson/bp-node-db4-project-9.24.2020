
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {ingredient: 'Ground Beef'},
        {ingredient: 'Ketchup'},
        {ingredient: 'Mustard'},
        {ingredient: 'Cheese Slices'},
        {ingredient: 'Shredded Cheese'},
        {ingredient: 'Cheese Sauce'},
        {ingredient: 'Garlic'},
        {ingredient: 'Onion'},
        {ingredient: 'Tomatos'},
        {ingredient: 'Lettuce'},
        {ingredient: 'Taco Seasoning'},
        {ingredient: 'Taco Sauce'},
        {ingredient: 'Salsa'},
        {ingredient: 'Chili'},
        {ingredient: 'Worcestershire Sauce'},
        {ingredient: 'BBQ Sauce'},
        {ingredient: 'Flour Tortillas'},
        {ingredient: 'Taco Shells'},
        {ingredient: 'Tortilla Chips'},
        {ingredient: 'Beef Steak'},
        {ingredient: 'Chicken Breasts'},
        {ingredient: 'Pizza Crust'},
        {ingredient: 'Pizza Sauce'},
        {ingredient: 'Pepperoni'},
        {ingredient: 'Pinapples'},
        {ingredient: 'Peppers'},
        {ingredient: 'Salad Dressing'},
        {ingredient: 'Salad Toppings'},
        {ingredient: 'Bacon'},
        {ingredient: 'Buns'},
        {ingredient: 'Bread'},
        {ingredient: 'Peanut Butter'},
        {ingredient: 'Jelly'},
        {ingredient: 'Butter'},
        {ingredient: 'Spaghetti Sauce'},
        {ingredient: 'Uncooked Pasta'},
        {ingredient: 'Brown Sugar'},
        {ingredient: 'Provolone Cheese'},
        {ingredient: 'Desired fruits and veggies'},
        {ingredient: 'Meat Tenderizer'}       
      ]);
    });
};
