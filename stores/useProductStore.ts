import { Product } from "@/data/mock-data";
import { create } from "zustand";

type ProductStoreType = {
  selectedProduct: Product;
  getSelectedProduct: (product: Product) => void;
};

export const useProductStore = create<ProductStoreType>((set) => ({
  selectedProduct: null!,
  getSelectedProduct: (product: Product) =>
    set(() => {
      return {
        selectedProduct: product,
      };
    }),
}));
