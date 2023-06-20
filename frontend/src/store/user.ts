import { create } from "zustand";
import { devtools } from 'zustand/middleware';
// Services
import authService from "src/services/auth/auth.service";

export type User = {
  id: number;
  username: string;
  email: string;
  roleId: number;
}

export type UserState = {
  data?: User;
  getCurrentUser: () => Promise<boolean>;
}

const useUserStore = create<UserState>()(
  devtools(set => ({
    data: undefined,
    getCurrentUser: async () => {
      const data = await authService.getCurrentUser();
      if (!data.id) return false;
      set(() => ({ data }));
      return true;
    },
  }))
);

export default useUserStore;