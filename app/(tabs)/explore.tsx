import { mockCategories } from "@/data/mock-data";
import { useCartActions } from "@/hooks/useCartActions";
import { styles } from "@/styles/exploreStyles";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Animated, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryItem } from "./shop";

const Explore = () => {
  const products = mockCategories?.flatMap((product) => product?.data);
  const {
    handleAddProductToCart,
    getProductQuantity,
    handleUpdateProductQuantity,
  } = useCartActions();

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
          <CategoryItem
            item={item}
            quantity={getProductQuantity(item?.id!)}
            style={{ width: 157 }}
            handleAddProductToCart={handleAddProductToCart}
            handleUpdateProductInCart={handleUpdateProductQuantity}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Explore;
