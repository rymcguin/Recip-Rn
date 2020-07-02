import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummyData";

const MealDetailScreen = (props) => {
  const mealID = props.navigation.getParam("mealID");

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title} </Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealID = navigationData.navigation.getParam("mealID");
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
