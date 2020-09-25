
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RecipeGuide').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeGuide').insert([
        {I_Id: '31', R_Id: '1', Quantity:'2 slices'},
        {I_Id: '4', R_Id: '1', Quantity:'1 slice'},
        {I_Id: '34', R_Id: '1', Quantity:'1-2 tbl spoons'},
        {I_Id: '31', R_Id: '2', Quantity:'2 slices'},
        {I_Id: '32', R_Id: '2', Quantity:'1 tbl spoon'},
        {I_Id: '33', R_Id: '2', Quantity:'1 tbl spoon'},
        {I_Id: '1', R_Id: '3', Quantity:'1lb'},
        {I_Id: '7', R_Id: '3', Quantity:'1 tsp'},
        {I_Id: '8', R_Id: '3', Quantity:'1lb'},
        {I_Id: '35', R_Id: '3', Quantity:'1 can'},
        {I_Id: '36', R_Id: '3', Quantity:'1 box'},
        {I_Id: '2', R_Id: '3', Quantity:'1 cup'},
        {I_Id: '37', R_Id: '3', Quantity:'1 tbl spoon'},
        {I_Id: '40', R_Id: '3', Quantity:'1 tsp'},
        {I_Id: '10', R_Id: '4', Quantity:'1 head or 1 bag'},
        {I_Id: '39', R_Id: '4', Quantity:'varies'},
        {I_Id: '27', R_Id: '4', Quantity:'2 tbl spoons'},
        {I_Id: '25', R_Id: '4', Quantity:'varies'},
        {I_Id: '29', R_Id: '4', Quantity:'varies'},
        {I_Id: '9', R_Id: '4', Quantity:'varies'}

      ]);
    });
}; 
