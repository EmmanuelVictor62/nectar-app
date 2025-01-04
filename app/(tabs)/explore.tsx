import { mockCategories } from "@/data/mock-data";
import { styles } from "@/styles/exploreStyles";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Animated, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryItem } from "./shop";

const explore = () => {
  const products = mockCategories?.flatMap((product) => product?.data);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialIcons name="search" size={22} color="#181B19" />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <Animated.FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.productWrapperColumn}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryItem item={item} style={{ width: 157 }} />
        )}
      />
    </SafeAreaView>
  );
};

export default explore;
