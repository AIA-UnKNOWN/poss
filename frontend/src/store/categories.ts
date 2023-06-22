import { create } from "zustand";
import { devtools } from 'zustand/middleware';
// Services
import categoriesService from "src/services/categories/categories.service";

export type Category = {
  name: string;
  id?: number;
}

export type CategoryState = {
  data: Category[],
  getAll: () => Promise<void>,
}

const useCategoryStore = create<CategoryState>()(
  devtools(set => ({
    data: [],
    getAll: async () => {
      const categories = await categoriesService.getAll();
      return set(() => ({ data: categories }));
    },
  }))
);

export default useCategoryStore;