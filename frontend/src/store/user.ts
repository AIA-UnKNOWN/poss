import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export type User = {
  id: number;
  username: string;
  email: string;
  roleId: number;
}

export type UserState = {
  data?: User;
}

const useUserStore = create<UserState>()(
  devtools(set => ({
    data: undefined,
  }))
);

export default useUserStore;