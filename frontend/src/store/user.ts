import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export type User = {
  id: number;
  username: string;
  email: string;
  roleId: number;
}

export type UserState = {
  user: User | null;
  token: string;
  setUser: (user: User) => void;
}

const useUserStore = create<UserState>()(
  devtools(set => ({
    user: null,
    token: '',
    setUser: user => set(state => ({ ...state, user })),
  }))
);

export default useUserStore;