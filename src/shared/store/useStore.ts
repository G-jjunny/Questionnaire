import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  accountId: string;
  role: string;
  institution: string;
};

interface authStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<authStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // localStorage에 저장될 key
      partialize: (state) => ({ user: state.user }), // 저장할 부분만 선택
    }
  )
);
