import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#hero", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#projects", label: "مشاريعنا" },
    { href: "#gallery", label: "معرض الصور" },
    { href: "#contact", label: "تواصل معنا", isButton: true },
  ];

  return (
    <nav
      className={`bg-white bg-opacity-95 shadow-md fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
      id="mainNav"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-primary font-cairo flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-12 w-12 rounded-full mr-2 border-2 border-secondary bg-primary text-white flex items-center justify-center overflow-hidden"
                >
                  <i className="fas fa-building"></i>
                </motion.div>
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  العائلة للتجارة
                </motion.span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 space-x-reverse">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`
                  ${link.isButton 
                    ? "px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90" 
                    : "px-3 py-2 rounded hover:bg-muted transition-colors text-primary hover:text-accent font-medium"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white pb-4 px-4 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`block py-2 px-4 my-1 ${
                  link.isButton
                    ? "bg-primary text-white rounded"
                    : "hover:bg-muted rounded text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
