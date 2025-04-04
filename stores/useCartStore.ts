import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItemType = {
  name: string;
  image: string;
  id: string;
  quantity: number;
  price: number;
  weight: string;
};

type CartStoreProps = {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
};

export const useCartStore = create<CartStoreProps>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          return {
            cart: [...state.cart!, { ...item, quantity: 1 }],
          };
        }),
      removeFromCart: (id) =>
        set((state) => {
          const updatedCart = state.cart?.filter((item) => item?.id !== id);

          return {
            cart: updatedCart,
          };
        }),
      updateProductQuantity: (id, quantity) =>
        set((state) => {
          const itemIndex = state.cart?.findIndex((item) => item?.id === id);

          if (itemIndex > -1) {
            const updatedCart = [...state.cart];
            updatedCart[itemIndex] = {
              ...updatedCart[itemIndex],
              quantity: quantity,
            };
            return {
              cart: updatedCart,
            };
          }
          return {};
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
