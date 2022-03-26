//global variables
var deliciousNameGlobal;
var menuItemGlobal;
var ingredients = [];
var formattedPriceGlobal;
var recipe = {};

function nameMenuItem(normalName) {

  deliciousNameGlobal = `Delicious ${normalName}`
  return deliciousNameGlobal;
};


function createMenuItem(menuNameParam, menuPriceParam, menuTypeParam) {
  menuItemGlobal = {
    name: menuNameParam,
    price: menuPriceParam,
    type: menuTypeParam
  }
  return menuItemGlobal
};


function addIngredients(ingredientToAdd, ingredientArray) {
  if (ingredientArray.includes(ingredientToAdd) === false) {
     ingredients = ingredientArray.push(ingredientToAdd);
     return ingredients;
  }
};


function formatPrice(initialPriceParam) {
  formattedPriceGlobal = `$${initialPriceParam}`
  return formattedPriceGlobal
};

function decreasePrice(decreasedPriceParam){
  return decreasedPriceParam * 0.9
};


function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    ingredients: ingredients,
    title: deliciousNameGlobal,
    price:formattedPriceGlobal,
    type: menuItemType
  }
  return recipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
