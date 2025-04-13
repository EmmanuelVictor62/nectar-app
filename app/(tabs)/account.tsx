import { useAuthStore } from "@/stores/useAuthStore";
import { styles } from "@/styles/accountStyles";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type IconName = keyof typeof MaterialIcons.glyphMap;

const options = [
  { label: "Orders", icon: "shopping-bag" },
  { label: "My Details", icon: "person" },
  { label: "Delivery Address", icon: "location-on" },
  { label: "Payment Methods", icon: "credit-card" },
  { label: "Promo Cord", icon: "local-offer" },
  { label: "Notifications", icon: "notifications" },
  { label: "Help", icon: "help-outline" },
  { label: "About", icon: "info" },
];

const ProfileScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=2" }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name ?? "John Doe"} </Text>
          <Text style={styles.userEmail}>
            {user.email ?? "john.doe@gmail.com"}{" "}
          </Text>
        </View>
        <MaterialIcons name="edit" size={18} color="#6B7280" />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {options.map((option, index) => (
          <TouchableOpacity style={styles.optionItem} key={index}>
            <View style={styles.optionLeft}>
              <MaterialIcons
                name={option.icon as IconName}
                size={22}
                color="#111827"
              />
              <Text style={styles.optionLabel}>{option.label}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="#6B7280" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.logoutBtn}>
        <MaterialIcons name="logout" size={20} color="#53B175" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
