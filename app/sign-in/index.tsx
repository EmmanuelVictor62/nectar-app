import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";

const SignInScreen = () => {
  return (
    <>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/groceries-with-cucumber.png")}
          style={styles.image}
        />
        <View>
          <Text>Get your groceries with nectar</Text>
        </View>
      </View>
    </>
  );
};

export default SignInScreen;
