import { create } from "zustand";

interface ConfirmationState {
  open: boolean;
  message: string;
}

interface UIState {
  isScrolled: boolean;
  setScrolled: (val: boolean) => void;
  confirmation: ConfirmationState;
  showConfirmation: (message: string) => void;
  closeConfirmation: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isScrolled: false,
  setScrolled: (val) => set({ isScrolled: val }),
  confirmation: { open: false, message: "" },
  showConfirmation: (message) =>
    set({ confirmation: { open: true, message } }),
  closeConfirmation: () =>
    set((state) => ({
      confirmation: { ...state.confirmation, open: false },
    })),
}));
