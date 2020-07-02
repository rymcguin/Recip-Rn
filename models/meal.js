class Meal {
  constructor(
    id,
    categoryID,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegitarian,
    isLactoseFree
  ) {
	  this.id = id;
	  this.categoryID= categoryID;
	  this.title= title;
	  this.affordability =affordability;
	  this.complexity=complexity;
	  this.imageUrl=imageUrl;
	  this.duration=duration;
	  this.ingredients=ingredients;
	  this.steps = steps;
	  this.isGlutenFree = isGlutenFree
	  this.isVegan =isVegan;
	  this.isVegitarian = isVegitarian;
	  this.isLactoseFree=isLactoseFree;

  }
}

export default Meal;
