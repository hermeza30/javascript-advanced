var favouriteFood = "grapes";

var foodThoughts = function () {
     console.log("Original favourite food: " + favouriteFood);

     var favouriteFood = "sushi";//Al entrar a este contexto hoistea
     //favoriteFood en memoria de ese contexto. Por eso al principio toma undefined

     console.log("New favourite food: " + favouriteFood);
};

foodThoughts()
///VERSUS

var favouriteFood = "grapes";

var foodThoughts = function () {
     console.log("Original favourite food: " + favouriteFood);

     console.log("New favourite food: " + favouriteFood);
};

foodThoughts()