function createRestaurant(restaurant) {
  return {
    name: restaurant,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}

function addMenuItem(restaurant, lunchKey) {
  return restaurant.menus[lunchKey.type].push(lunchKey);

}


// if (ingredientArr.includes(ingredient1) == false) {
//   ingredientArr.push(ingredient1);

// Worked in a group on this one. We used both bracket and dot notation
// I understand this working, but I am fairly certain I can't duplicate it.



module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
