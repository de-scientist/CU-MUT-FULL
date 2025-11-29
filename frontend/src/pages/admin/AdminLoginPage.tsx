import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { apiFetch } from "../../lib/api";
import { useAuthStore } from "../../store/authStore";

type LoginResponse = {
  token: string;
  email: string;
};

export const AdminLoginPage: React.FC = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      apiFetch<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    onSuccess: (data) => {
      setAuth(data.token, data.email);
      navigate("/admin");
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    mutation.mutate({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-heading text-mutcu-navy">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-mutcu-navy"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-semibold text-mutcu-navy"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/30"
            />
          </div>
          {mutation.isError && (
            <p className="text-sm text-mutcu-red">
              Invalid credentials or server error.
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-mutcu-orange hover:bg-[#e68a00]"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};