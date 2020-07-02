import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AppLoading } from "expo";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <View style={{ ...styles.boxes, ...{ backgroundColor: props.color } }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  boxes: {
    flex: 1,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
