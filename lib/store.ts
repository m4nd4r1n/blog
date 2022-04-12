import create from "zustand";

const useStore = create((set: any) => ({
  theme: "dark",
  setLight: () => set({ theme: "light" }),
  setDark: () => set({ theme: "dark" }),
}));

export default useStore;
