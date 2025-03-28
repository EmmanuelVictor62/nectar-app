import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ProductDetails, {id}</Text>
    </View>
  );
};

export default ProductDetails;
