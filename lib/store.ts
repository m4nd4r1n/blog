import create from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStorage {
  theme: string;
  setLight: () => void;
  setDark: () => void;
}

const useStore = create<ThemeStorage>(
  persist(
    (set, get) => ({
      theme: "",
      setLight: () => set({ theme: "light" }),
      setDark: () => set({ theme: "dark" }),
    }),
    {
      name: "theme",
      merge: (persistedState, currentState) => ({
        ...currentState,
        theme: persistedState.theme,
      }),
    }
  )
);

export default useStore;
