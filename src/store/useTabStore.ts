import { create } from "zustand";

interface Tab {
  id: string;
  title: string;
  type: "home" | "terminal";
}

interface TabState {
  tabs: Tab[];
  activeTabId: string;
  addTab: (id: string, title: string) => void;
  setActiveTab: (id: string) => void;
  closeTab: (id: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  tabs: [{ id: "home", title: "Home", type: "home" }],
  activeTabId: "home",

  addTab: (id, title) =>
    set((state) => {
      if (state.tabs.find((t) => t.id === id)) return { activeTabId: id };
      return {
        tabs: [...state.tabs, { id, title, type: "terminal" }],
        activeTabId: id,
      };
    }),

  setActiveTab: (id) => set({ activeTabId: id }),

  closeTab: (id) =>
    set((state) => {
      const newTabs = state.tabs.filter((t) => t.id !== id);
      let newActiveId = state.activeTabId;
      if (state.activeTabId === id) {
        newActiveId = newTabs[newTabs.length - 1].id;
      }
      return { tabs: newTabs, activeTabId: newActiveId };
    }),
}));
