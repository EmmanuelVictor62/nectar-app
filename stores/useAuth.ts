import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserType = {
  name: string;
  email: string;
  password: string;
};

type AuthStoreType = {
  user: UserType;
  setUser: (user: UserType) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      user: null!,
      setUser: (user: UserType) =>
        set(() => {
          return {
            user: { ...user, isAuth: true },
          };
        }),
      logout: () =>
        set(() => {
          return {
            user: null!,
          };
        }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
