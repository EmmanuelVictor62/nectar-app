import Button from "@/components/Button";
import { useAuthStore } from "@/stores/useAuthStore";
import { styles } from "@/styles/indexStyles";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const Onboarding = () => {
  const user = useAuthStore((state) => state?.user);

  const router = useRouter();

  const handleAuthRedirect = () => {
    // if (!user) {
    //   router.push("/auth/signUp");
    // } else {
    //   router.push("/shop");
    // }
    router.push("/auth/signUp");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/welcome-background.png")}
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
            onPress={handleAuthRedirect}
            style={{ marginTop: 20 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
