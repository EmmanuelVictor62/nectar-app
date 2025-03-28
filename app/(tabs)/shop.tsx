import { CarrotIcon } from "@/assets/icons/icon";
import { mockCategories } from "@/data/mock-data";
import { styles } from "@/styles/shopStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Animated,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Shop = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowHeader(y < 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { display: showHeader ? "flex" : "none" }]}>
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
        renderSectionHeader={({ section: { name } }) => (
          <CategoryHeader name={name} />
        )}
        renderItem={({ item }) => <CategoryItem item={item} />}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        ListHeaderComponent={
          <Image
            source={require("@assets/images/banner.png")}
            resizeMode="cover"
            alt="banner"
            style={styles.banner}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Shop;

const CategoryHeader = ({ name }: { name: string }) => {
  return (
    <View style={styles.categoryHeader}>
      <Text style={styles.categoryHeaderText}>{name}</Text>
      <Link href="/categories/[id]">
        <Text style={styles.seeAllText}>See all</Text>
      </Link>
    </View>
  );
};

const CategoryItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.categoryItemContainer}>
      <Image
        source={{ uri: item?.image }}
        alt={item?.name}
        style={styles.categoryItemImage}
      />
      <Text style={styles.categoryItemName}>{item?.name}</Text>
      <Text style={styles.categoryItemPrice}>${item?.price}</Text>
    </View>
  );
};
