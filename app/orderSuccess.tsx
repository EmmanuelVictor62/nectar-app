import Button from "@/components/Button";
import { styles } from "@/styles/orderSuccessStyles";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderSuccess = () => {
  const router = useRouter();
  const handleGoToHome = () => {
    router.replace("/shop");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/images/checkmark-success.png")}
        style={styles.image}
      />
      <Text style={styles.heading}>Your order has been accepted</Text>
      <Text style={styles.subHeading}>
        Congratulations, Your order has been placed and is being processed and
        on it&apos;s way
      </Text>
      <Button
        title="Back To Home"
        onPress={handleGoToHome}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default OrderSuccess;
