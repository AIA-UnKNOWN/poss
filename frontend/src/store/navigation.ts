import { create } from "zustand";

export interface Navigation {
  pageName: string;
  navigateToPage: (pageName: string) => void,
}

const useNavigationStore = create<Navigation>((set) => ({
  pageName: '',
  navigateToPage: pageName => set(state => ({ pageName })),
}));

export default useNavigationStore;