import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { setCookie } from 'typescript-cookie';

export type User = {
  id: number;
  username: string;
  email: string;
  roleId: number;
}

export type UserState = {
  user: User | null;
  isAuthenticated: null | boolean;
  signIn: (details: { username: string, password: string }) => void;
}

const useUserStore = create<UserState>()(
  devtools(set => ({
    user: null,
    isAuthenticated: null,
    signIn: async ({ username, password }) => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/signIn`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const { accessToken, statusCode } = await response.json();
        set(() => {
          if (statusCode === 401) return { isAuthenticated: false };
          setCookie('ut', accessToken);
          location.href = '/';
          return { isAuthenticated: true, token: accessToken };
        });
      } catch(error) {
        console.error(error);
      }
    },
  }))
);

export default useUserStore;