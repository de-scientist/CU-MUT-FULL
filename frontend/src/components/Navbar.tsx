import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUIStore } from "../store/uiStore";

export const Navbar: React.FC = () => {
  const isScrolled = useUIStore((s) => s.isScrolled);
  const setScrolled = useUIStore((s) => s.setScrolled);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolled]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Ministries", path: "/ministries" },
    { label: "Events", path: "/events" },
    { label: "Resources", path: "/resources" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "Register", path: "/register" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header
      id="mutcu-navbar"
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        isScrolled
          ? "bg-mutcu-navy/95 shadow-lg"
          : "bg-slate-50/90 backdrop-blur border-b border-slate-200"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
        >
          <img
            src="/assets/images/Full Logo.png"
            alt="MUTCU Logo"
            className="h-12 md:h-14 w-auto transition-transform hover:scale-105"
          />
        </button>
        <div className="hidden gap-6 md:flex text-sm font-heading uppercase font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-mutcu-orange after:transition-all ${
                isActive(item.path)
                  ? "text-mutcu-orange after:w-full"
                  : "text-mutcu-red hover:text-mutcu-orange"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
