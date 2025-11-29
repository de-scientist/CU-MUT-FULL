import { create } from "zustand";

interface AuthState {
  token: string | null;
  email: string | null;
  setAuth: (token: string, email: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token:
    typeof window !== "undefined" ? localStorage.getItem("mutcu_token") : null,
  email:
    typeof window !== "undefined" ? localStorage.getItem("mutcu_email") : null,
  setAuth: (token, email) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mutcu_token", token);
      localStorage.setItem("mutcu_email", email);
    }
    set({ token, email });
  },
  clearAuth: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("mutcu_token");
      localStorage.removeItem("mutcu_email");
    }
    set({ token: null, email: null });
  },
}));
