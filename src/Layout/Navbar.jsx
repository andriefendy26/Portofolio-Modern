import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import { HiOutlineDocument } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { Title: "Home", Link: "/" },
    { Title: "Project", Link: "/project" },
    { Title: "Galery", Link: "/galery" },
    { Title: "Contact", Link: "/contact" },
    { Title: "About Me", Link: "/#about" }, // Special case (anchor)
  ];

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu when clicking

    const anchor = href.split("#")[1];

    if (location.pathname === "/") {
      // Already on home page → scroll only
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll after small delay
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // delay to wait for page to load
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu when clicking regular links
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-[9999999] w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">
              Portofolio
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10 relative roboto-mono">
              {items.map((item, i) => {
                const isActive =
                  location.pathname === item.Link ||
                  (item.Link.includes("#") &&
                    location.hash === item.Link.split("/")[1]);

                return (
                  <li key={i} className="relative tracking-widest">
                    {item.Link.includes("#") ? (
                      <a
                        href={item.Link}
                        onClick={(e) => handleAnchorClick(e, item.Link)}
                        className={
                          isActive
                            ? "text-black text-shadow-2xs backdrop-blur-lg bg-gray-300 px-3 py-2 rounded text-lg navlinkActive transition-all duration-300"
                            : "navbarLink hover:text-gray-300 text-gray-800 px-3 py-2 transition-all duration-300"
                        }
                      >
                        {item.Title}
                      </a>
                    ) : (
                      <Link
                        to={item.Link}
                        className={
                          isActive
                            ? "text-black text-shadow-2xs backdrop-blur-lg bg-gray-300 px-3 py-2 rounded text-lg navlinkActive transition-all duration-300"
                            : "navbarLink hover:text-gray-300 text-gray-800 px-3 py-2 transition-all duration-300"
                        }
                      >
                        {item.Title}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li>
                <a
                  href="https://drive.google.com/file/d/1xt7KpFvbcSt0HunmmJArpbJXBDA_0-Px/view"
                  className="flex hover:border-gray-600 hover:border-2 hover:text-gray-700 hover:bg-transparent hover:scale-105 duration-300 items-center justify-center gap-2 bg-gray-700 text-center rounded-lg text-white p-2"
                  target="_blank"
                >
                  <HiOutlineDocument />
                  Donwload CV
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="space-y-2 roboto-mono">
            {items.map((item, i) => {
              const isActive =
                location.pathname === item.Link ||
                (item.Link.includes("#") &&
                  location.hash === item.Link.split("/")[1]);

              return (
                <li key={i} className="tracking-widest">
                  {item.Link.includes("#") ? (
                    <a
                      href={item.Link}
                      onClick={(e) => handleAnchorClick(e, item.Link)}
                      className={
                        isActive
                          ? "block text-black bg-gray-300 px-4 py-3 rounded-md text-lg font-medium transition-all duration-300"
                          : "block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-300"
                      }
                    >
                      {item.Title}
                    </a>
                  ) : (
                    <Link
                      to={item.Link}
                      onClick={handleLinkClick}
                      className={
                        isActive
                          ? "block text-black bg-gray-300 px-4 py-3 rounded-md text-lg font-medium transition-all duration-300"
                          : "block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-300"
                      }
                    >
                      {item.Title}
                    </Link>
                  )}
                </li>
              );
            })}
            <li>
              <a
                href="https://drive.google.com/file/d/1xt7KpFvbcSt0HunmmJArpbJXBDA_0-Px/view"
                className="flex hover:border-gray-600 hover:border-2 hover:text-gray-700 hover:bg-transparent hover:scale-105 transition-all duration-300 items-center justify-center gap-2 bg-gray-700 text-center rounded-lg text-white p-2"
                target="_blank"
              >
                <HiOutlineDocument />
                Donwload CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
