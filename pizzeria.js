// Create a function pizzaOven(crustType, sauceType, cheese, extraToppings)
function pizzaOven(crustType, sauceType, cheese, extraToppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.extraToppings = extraToppings;
    return pizza;
}
var pieOne = pizzaOven('Deep Dish', 'Traditional', 'Mozzarella', ['Pepperoni', 'Sausage']);
console.log(pieOne);

var pieTwo = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pieTwo);

var pieThree = pizzaOven('Stuffed Crust', 'Traditional', 'Mozzarella', ['Bacon', 'Sausage']);
console.log(pieThree);

var pieFour = pizzaOven('Thin Crust', 'Alfredo', 'Mozzarella', ['Chicken', 'Bacon']);
console.log(pieFour);

//Bonus Challenge
function randPizza(crustType, sauceType, cheese, extraToppings){
    var pizza = {
        "crustType": "soft corn tortilla",
        "protein":  "tinga chicken",
        "cheese":   "cotija cheese",
        "toppings": ["lettuce", "pico de gallo", "guacamole"]
    };
}

var pizza = {
    "crustType": ["traditional", 'thin crust', 'stuffed crust', 'deep dish'],
    "sauceType":  ["traditional", 'alfredo', 'bbq'],
    "cheese":   ["mozzarella",'feta', 'maragita style'],
    "toppings": ["pepperoni", "sausage", "peppers", 'mushrooms', 'bacon', 'onions', 'olives'],
    "pizzaInfo": function(){
            console.log("I guess we will try " + pizza.crustType[Math.floor(Math.random()* this.crustType.length)] + " crust")
            console.log("I guess we will try " + pizza.sauceType[Math.floor(Math.random()* this.sauceType.length)] + " sauce")
            console.log("I guess we will try " + pizza.cheese[Math.floor(Math.random()* this.cheese.length)] + " cheese")
            console.log("I guess we will try " + pizza.toppings[Math.floor(Math.random()* this.toppings.length)] + "as the toppings")
    }
}
pizza.pizzaInfo();