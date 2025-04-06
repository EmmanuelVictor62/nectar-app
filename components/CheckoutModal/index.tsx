import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Button from "../Button";
import { styles } from "./style";

interface CheckoutModalProps {
  visible: boolean;
  handleCloseModal: () => void;
  totalCost: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  visible,
  handleCloseModal,
  totalCost,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      navigationBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContentContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Checkout</Text>
            <MaterialIcons name="close" size={24} onPress={handleCloseModal} />
          </View>
          <View style={styles.modalListWrapper}>
            <View style={styles.modalListContainer}>
              <Text style={styles.modalListText}>Payment</Text>
              <Pressable style={styles.modalListActionButton}>
                <Text style={styles.modalListActionText}>Visa</Text>
                <MaterialIcons name="arrow-forward-ios" />
              </Pressable>
            </View>
            <View style={styles.modalListContainer}>
              <Text style={styles.modalListText}>Promo Code</Text>
              <Pressable style={styles.modalListActionButton}>
                <Text style={styles.modalListActionText}>Pick discount</Text>
                <MaterialIcons name="arrow-forward-ios" />
              </Pressable>
            </View>
            <View style={styles.modalListContainer}>
              <Text style={styles.modalListText}>Total Cost</Text>
              <Pressable style={styles.modalListActionButton}>
                <Text style={styles.modalListActionText}>${totalCost}</Text>
              </Pressable>
            </View>
            <Text style={styles.termsAndConditions}>
              By placing an order you agree to our{" "}
              <Text style={styles.termsAndConditionsSpan}>Terms</Text> and{" "}
              <Text style={styles.termsAndConditionsSpan}>Conditions</Text>
            </Text>
            <Button title="Place order" onPress={() => {}} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CheckoutModal;
