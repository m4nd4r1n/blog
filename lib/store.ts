import create from "zustand";

interface ThemeState {
  theme: string;
  setLight: () => void;
  setDark: () => void;
}

const useStore = create<ThemeState>((set) => ({
  theme: "dark",
  setLight: () => set({ theme: "light" }),
  setDark: () => set({ theme: "dark" }),
}));

export default useStore;
