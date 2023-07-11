import { create } from "zustand";
import { devtools } from "zustand/middleware";
// Services
import categoriesService from "src/services/categories/categories.service";

export type Category = {
  name: string;
  id?: number;
};

export type CategoryState = {
  isLoading: boolean;
  data: Category[];
  getAll: () => Promise<void>;
  create: (categoryName: string) => Promise<void>;
};

const useCategoryStore = create<CategoryState>()(
  devtools((set) => ({
    isLoading: false,
    data: [],
    getAll: async () => {
      set(() => ({ isLoading: true }));
      const categories = await categoriesService.getAll();
      return set(() => ({ isLoading: false, data: categories }));
    },
    create: async (categoryName: string) => {
      await categoriesService.create(categoryName);
    },
  }))
);

export default useCategoryStore;
