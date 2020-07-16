import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummyData";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = (props) => {


  const title = props.navigation.getParam("categoryID");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryID.indexOf(title) >= 0
  );

  return (
    <MealsList listData={displayedMeals} navigation={props.navigation}/>
  )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === title);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({

});

export default CategoryMealsScreen;
