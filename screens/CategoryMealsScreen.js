import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from '../constants/Colors'
import { CATEGORIES } from "../data/dummyData";

const CategoryMealsScreen = (props) => {
  const title = props.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === title);
  return (
    <View style={styles.container}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  console.log(navigationData)
  const title = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === title);

  return { 
    headerTitle: selectedCategory.title,
    

  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
