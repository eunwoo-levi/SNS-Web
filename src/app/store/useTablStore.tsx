import { create } from "zustand";

interface TabProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const useTabStore = create<TabProps>((set) => ({
  tab: "rec",
  setTab: (tab) => set({ tab }),
}));
