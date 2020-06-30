import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummyData";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.grid}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryID: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  // headerTitle:"Meal Categories",

};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
