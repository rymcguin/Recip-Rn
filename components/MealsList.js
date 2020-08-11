import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealsList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id)
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        durations={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealID: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default MealsList;
