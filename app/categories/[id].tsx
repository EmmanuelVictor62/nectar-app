import { useCartActions } from "@/hooks/useCartActions";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { styles } from "@/styles/categoryStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryItem } from "../(tabs)/shop";

const Category: React.FC = () => {
  const categories = useCategoryStore((state) => state.categories);

  const router = useRouter();
  const { id } = useLocalSearchParams();
  const {
    handleAddProductToCart,
    getProductQuantity,
    handleUpdateProductQuantity,
  } = useCartActions();

  const selectedCategory = categories?.find((category) => category?.id === id);

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={18} />
        </Pressable>
        <Text style={styles.headerText}>{selectedCategory?.name}</Text>
      </View>

      <Animated.FlatList
        data={selectedCategory?.data}
        numColumns={2}
        columnWrapperStyle={styles.productWrapperColumn}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productWrapper}
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

export default Category;
