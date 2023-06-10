import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export enum PageName {
  PRODUCTS = 'Products',
  TRANSACTIONS = 'Transactions',
  DASHBOARD = 'Dashboard',
  INVENTORY = 'Inventory',
  SIGN_OUT = 'Sign Out',
}

export interface Navigation {
  pageName: PageName;
  navigateToPage: (pageName: PageName) => void,
}

const useNavigationStore = create<Navigation>()(
  devtools((set) => ({
    pageName: PageName.INVENTORY,
    navigateToPage: pageName => set(state => ({ pageName })),
  }))
);

export default useNavigationStore;