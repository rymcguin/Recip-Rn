import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from '../constants/Colors'

const MealItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bg} >
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
			</ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetail }}>
            <Text>{props.durations}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
	backgroundColor: Colors.secondaryColor,
	borderRadius:15,
	overflow:'hidden',
	marginVertical:10,

  },
  title:{
	  fontFamily:'open-sans-bold',
	  fontSize:20,
	  color:'white',
	  backgroundColor:'rgba(0,0,0,0.5)',
	  paddingVertical:5,
	  paddingHorizontal:10,
	  textAlign:'center',
  },
  row: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "80%",
  },
  mealDetail: {
	height:'20%',
	paddingHorizontal: 10,
	paddingVertical:0,
	justifyContent: "space-between",
	alignItems:'center',

  },
  bg: {
    width: "100%",
	height: "100%",
	justifyContent:'flex-end'
  },
});

export default MealItem;
