import { CarrotIcon } from "@/assets/icons/icon";
import ProductCard from "@/components/ProductCard";
import { mockCategories, Product } from "@/data/mock-data";
import { styles } from "@/styles/shopStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Animated, FlatList, Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Shop = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <CarrotIcon height={26} />
        <View style={styles.headerTextContainer}>
          <MaterialIcons name="location-on" size={20} />
          <Text style={styles.headerText}>Dhaka, Banassre</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="search" size={22} color="#181B19" />
        <TextInput placeholder="Search" style={styles.input} />
      </View>

      <Animated.SectionList
        sections={mockCategories}
        keyExtractor={(item) => item?.id}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={() => null}
        renderSectionHeader={({ section: { name, id } }) => (
          <CategoryHeader name={name} id={id} />
        )}
        renderSectionFooter={({ section }) => (
          <FlatList
            data={section.data}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productWrapper}
            renderItem={({ item }) => <CategoryItem item={item} />}
          />
        )}
        ListHeaderComponent={
          <Image
            source={require("@assets/images/banner.png")}
            resizeMode="cover"
            alt="banner"
            style={styles.banner}
          />
        }
        style={styles.categoryWrapper}
      />
    </SafeAreaView>
  );
};

export default Shop;

const CategoryHeader = ({ name, id }: { name: string; id: string }) => {
  return (
    <View style={styles.categoryHeader}>
      <Text style={styles.categoryHeaderText}>{name}</Text>
      <Link href={{ pathname: "/categories/[id]", params: { id } }}>
        <Text style={styles.seeAllText}>See all</Text>
      </Link>
    </View>
  );
};

const CategoryItem = ({ item }: { item: Product }) => {
  return (
    <ProductCard
      image={item?.image}
      productName={item?.name}
      weight={item?.weight}
      price={item?.price}
    />
  );
};
