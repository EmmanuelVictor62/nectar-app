import { Category, mockCategories } from "@/data/mock-data";
import { create } from "zustand";

type CategoryStore = {
  categories: Category[];
  category: Category;
  getCategory: (categoryId: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: mockCategories,
  getCategory: (categoryId) =>
    set((state) => {
      const category = state.categories?.find(
        (category) => category?.id === categoryId
      );
      return { category: category };
    }),
  category: null!,
}));
