import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export interface Navigation {
  pageName: string;
  navigateToPage: (pageName: string) => void,
}

const useNavigationStore = create<Navigation>()(
  devtools((set) => ({
    pageName: '',
    navigateToPage: pageName => set(state => ({ pageName })),
  }))
);

export default useNavigationStore;