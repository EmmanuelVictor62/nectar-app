import Button from "@/components/Button";
import { styles } from "@/styles/indexStyles";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const Onboarding = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/welcome-background.png")}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <View style={styles.contentContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/images/carrot-img.png")}
          />
          <Text style={styles.textHeading}>Welcome to our store</Text>
          <Text style={styles.textSubheading}>
            Get your groceries in as fast as an hour
          </Text>
          <Button
            title="Get Started"
            onPress={() => router.push("/auth/signIn")}
            style={{ marginTop: 20 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
