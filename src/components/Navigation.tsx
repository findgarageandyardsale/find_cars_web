import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Video", href: "#video" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Download", href: "#scan" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20"
      : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">🚗</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">Find Car Sales</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("#scan")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span className="mr-2">📱</span>
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                <div className={`w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
                <div className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-2">
                <Button
                  onClick={() => scrollToSection("#scan")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <span className="mr-2">📱</span>
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}