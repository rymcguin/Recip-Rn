import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummyData";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = (props) => {
  const title = props.navigation.getParam("categoryID");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryID.indexOf(title) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.text}>
        <Text>No Meals Found, Check Filters</Text>
      </View>
    );
  }
  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === title);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
