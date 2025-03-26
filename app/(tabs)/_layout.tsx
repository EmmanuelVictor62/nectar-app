import StoreIcon from "@/assets/icons/store.svg";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <StoreIcon />,
        }}
      />
    </Tabs>
  );
}
