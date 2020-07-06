function nameMenuItem(food) {
  return `Delicious ${food}`;
  }

// FUNCTION
// My first try for: "should take in a name and make a delicious name"
// - total mess! But I'm learning! :)
// What worked was the first line, but there was no parameter for the menuItemName
// It was "hard coded". I think that is the term.
    // var menuItemName = "Pizza";
    // var burritoItem = "Burrito";
    // var sushiItem = "Pizza";
    // var tacoItem = "Taco";
    // return `Delicious ${menuItemName}`;
    // return `Delicious ${burritoItem}`;
// THESE are instantiated in the test file!!!! That's why I don't
// need all those variables!

  function createMenuItem(food, money, timeOfDay) {
    var menuItem = {
      name: food,
      price: money,
      type: timeOfDay
    };
    return menuItem;
  }

// OBJECT inside a FUNCTION.
// I was completely stumped on this one ... partly because I was getting fatigued
// I was in a study group when someone asked about this one.
// I didn't struggle as much because we all talked through it
// together. However ... I am now understanding better what the test is
// actually asking for, so overall, it was a win!! Grateful to a lot of amazing
// people in the cohort!

function addIngredients(ingredient1, ingredientArr) {
  if (ingredientArr.includes(ingredient1) == false) {
    ingredientArr.push(ingredient1);
  }
}

// IF statement inside a FUNCTION (**what are .push, etc called??**)
// Key take aways for me are understanding passing an
// argument into a parameter that is an array.
// I changed my parameter names several times to find out what would
// break my code. I feel like I am really understaning createMenuItem more now
// from this. Hopefully also tests more!

// Also ... READ BACKWARDS!
// ingredient1 is pushing into ingredientArr
// see the screen shot with the breakfastFoods array for reference on this one!!

// I found this method?/formula?: Array.from(new Set(ingredients)
// which I thought was going to work, but I couldn't figure it out.
// I think I could (possibly?) make it work if I have more time to come back to this.


// I typed this out because several people were talking in a study group
// about the length of the array filtering out the duplicated ingredients.
// I don't understand it at all, but I wanted to make an attempt
// to try to understand it. Also, this person's code was not working. I can't
// identify why, because I barely undestand what this is doing. Mainly, this
// intriqued me.
  // if ingredients.length !== 0 {
  //   ingredientArray.push(ingredient1);
  // } else if {
  //   ingredients.length !==1
  //   conole.log(ingredientArray.push(ingredientArray));
  // } else {
  //   ingredients.length > 2
  //   console.log(ingredientArray = new ingredientArray Set(ingredient1));
  //
  // }

// I typed this out because some classmates with much more experience than me
// suggested that this needs a "for loop". I don't quite understand for loops,
// but we are supposed to cover them on Monday, so maybe I will then!
    // for (var i = 0; i = ingredients.length, i++) {
    //   return ...
    // }

    // var isItIn = false;
    //
    //   if(ingredientArr.length > 0) {
    //
    //   for (i = 0; i < ingredients.length; i++) {
    //     if (ingredient1 == ingredients[i]) {
    //       var isItIn = true
    //       break;
    //       }
    //     }
    //     if isItIn = true;
    //       ingredientArr.push(ingredient1);
    //     } else {
    //       ingredients.push(ingredient1);
    //     } else {
    //     ingredientArr.push(ingredient1);
    //   }
    // }


function formatPrice(priceNum) {
    var formattedPrice = `$${priceNum}`;
    return formattedPrice;
}

// Note to self: Paramater is basically a variable: var priceNum = 10.99

// !!!term of art!!! line 92
// var menuItemName = nameMenuItem("French Toast");
// Declare the variable menuItemName and assign it to the evaluation of
// nameMenuItem with a string French Toast as it's arguement.
// !!!!!!!

// !!!term of art!!! Backwards:
// Call the function createMenuItem with the string arguement "French Toast"
// that is assigned to the variable menuItemName.
// !!!!!!

function decreasePrice(fullPrice) {
  var decreasedPrice = fullPrice * .9
  return decreasedPrice;
}

// Below is a simpler version of above:
// (Matt: eliminate the middle man!)
// function decreasePrice(fullPrice) {
//   return fullPrice * .9;
// }


function createRecipe(heading, foods, time) {
  var recipe = {
    title: heading,
    ingredients: foods,
    type: time
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
