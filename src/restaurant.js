function createRestaurant(nameParam) {
  return {
    name: nameParam,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};

function addMenuItem(restaurantObj, foodObj) {
  var foodType = foodObj.type;
    if (restaurantObj.menus[foodType].includes(foodObj) === false) {
        restaurantObj.menus[foodType].push(foodObj)
  }
};

function removeMenuItem(restaurantObj, foodObj, foodType) {
  for (var i = 0; i < restaurantObj.menus[foodType].length; i++) {
      if (restaurantObj.menus[foodType][i].name === foodObj) {
        restaurantObj.menus[foodType].splice(i, 1)
        return `No one is eating our ${foodObj} - it has been removed from the ${foodType} menu!`;
      }
    }
  return `Sorry, we don't sell ${foodObj}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
