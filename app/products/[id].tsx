import Button from "@/components/Button";
import { mockCategories } from "@/data/mock-data";
import { useCartActions } from "@/hooks/useCartActions";
import { useCartStore } from "@/stores/useCartStore";
import { styles } from "@/styles/productDetailsStyles";
import { images } from "@/utils/images";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const ProductDetails = () => {
  const [showDetails, setShowDetails] = useState(true);

  const router = useRouter();
  const { cart } = useCartStore();
  const { id: productId } = useLocalSearchParams();
  const {
    handleAddProductToCart,
    getProductQuantity,
    handleUpdateProductQuantity,
    removeProductFromCart,
  } = useCartActions();
  const productQuantity = getProductQuantity(productId.toString());

  const isInCart = cart.some((item) => item.id === productId);

  const selectedProduct = mockCategories
    ?.flatMap((category) => category.data)
    ?.find((product) => product.id === productId);

  const product = {
    name: selectedProduct?.name!,
    image: selectedProduct?.image!,
    id: productId?.toString(),
    price: selectedProduct?.price!,
    weight: selectedProduct?.weight!,
  };

  const handleAddItemToCart = () => {
    if (productQuantity < 1) {
      handleAddProductToCart(product);
    } else {
      handleUpdateProductQuantity(
        selectedProduct?.id!,
        productQuantity + 1,
        selectedProduct?.name!
      );
    }
  };

  const handleRemoveItemFromCart = () => {
    if (productQuantity === 1) {
      removeProductFromCart(selectedProduct?.id!);
    } else {
      handleUpdateProductQuantity(
        selectedProduct?.id!,
        productQuantity - 1,
        selectedProduct?.name!
      );
    }
  };

  const handleButtonClick = () => {
    if (productQuantity < 1) {
      handleAddProductToCart(product);
    } else {
      router.push("/cart");
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={images[selectedProduct?.image!]}
            style={styles.image}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.title}>{selectedProduct?.name}</Text>
              <Text style={styles.subtitle}>1kg, Price</Text>
            </View>
          </View>

          <View style={styles.counterRow}>
            <Pressable
              onPress={handleRemoveItemFromCart}
              style={styles.counterBtn}
            >
              <MaterialIcons name="remove" size={20} />
            </Pressable>
            <Text style={styles.counterText}>{productQuantity}</Text>
            <Pressable onPress={handleAddItemToCart} style={styles.counterBtn}>
              <MaterialIcons name="add" size={20} />
            </Pressable>
            <Text style={styles.price}>
              ${(selectedProduct?.price! * productQuantity).toFixed(2)}
            </Text>
          </View>

          <Pressable
            onPress={() => setShowDetails(!showDetails)}
            style={styles.accordionHeader}
          >
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <MaterialIcons
              name={showDetails ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={20}
            />
          </Pressable>
          {showDetails && (
            <Text style={styles.description}>
              {selectedProduct?.description}
            </Text>
          )}

          <View style={styles.reviewRow}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.stars}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <MaterialIcons
                    key={index}
                    name="star"
                    size={20}
                    color={
                      index < selectedProduct?.rating! ? "#FFA500" : "#E0E0E0"
                    }
                  />
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Button
        title={isInCart ? "Go To Cart" : "Add To Basket"}
        onPress={handleButtonClick}
        style={styles.button}
      />
    </>
  );
};

export default ProductDetails;
