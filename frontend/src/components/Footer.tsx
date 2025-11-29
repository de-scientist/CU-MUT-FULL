import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className="bg-mutcu-navy py-10 text-sm text-white">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h5 className="mb-3 text-lg font-heading uppercase text-mutcu-orange">
            About MUTCU
          </h5>
          <p className="text-white/80">
            Murang’a University of Technology Christian Union is a
            non-denominational community dedicated to inspiring love, hope, and
            godliness through faith, unity, and service.
          </p>
        </div>
        <div>
          <h5 className="mb-3 text-lg font-heading uppercase text-mutcu-orange">
            Quick Links
          </h5>
          <div className="flex flex-col gap-1 text-white/80">
            <Link to="/" className="w-fit hover:text-mutcu-orange">
              Home
            </Link>
            <Link to="/about" className="w-fit hover:text-mutcu-orange">
              About
            </Link>
            <Link to="/ministries" className="w-fit hover:text-mutcu-orange">
              Ministries
            </Link>
            <Link to="/events" className="w-fit hover:text-mutcu-orange">
              Events
            </Link>
            <Link to="/resources" className="w-fit hover:text-mutcu-orange">
              Resources
            </Link>
            <Link to="/gallery" className="w-fit hover:text-mutcu-orange">
              Gallery
            </Link>
            <Link to="/contact" className="w-fit hover:text-mutcu-orange">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h5 className="mb-3 text-lg font-heading uppercase text-mutcu-orange">
            Connect With Us
          </h5>
          <p className="mb-1 text-white/80">
            <i className="fas fa-map-marker-alt mr-2 text-mutcu-orange" />
            Murang’a University of Technology, Murang’a, Kenya
          </p>
          <p className="mb-1 text-white/80">
            <i className="fas fa-phone mr-2 text-mutcu-orange" />+254 712 345
            678
          </p>
          <p className="mb-1 text-white/80">
            <i className="fas fa-envelope mr-2 text-mutcu-orange" />
            info@mutcu.ac.ke
          </p>
          <p className="mb-3 text-white/80">
            <i className="fas fa-clock mr-2 text-mutcu-orange" />
            Office Hours: Mon–Fri, 8:00 AM – 5:00 PM
          </p>
          <div className="flex items-center gap-3 text-xl">
            <a href="#" className="hover:text-mutcu-orange">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-mutcu-orange">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-mutcu-orange">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/70">
        <p>
          &copy; 2025 Murang’a University of Technology Christian Union. All
          rights reserved.
        </p>
        <p>Designed by MUTCU Tech Team</p>
      </div>
    </div>
  </footer>
);
