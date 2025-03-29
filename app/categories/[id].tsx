import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Category = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Category, {id}</Text>
    </View>
  );
};

export default Category;
