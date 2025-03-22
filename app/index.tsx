import { Image } from "expo-image";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/welcome-background.png")}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <View>
          <Image source={require("../assets/images/carrot-img.png")} />
          <Text>Welcome to our store</Text>
          <Text>Get your groceries in as fast as an hour</Text>
          <Text>Onboarding, okay</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  imgBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
