import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />

            {/* Back to Top Button */}
            <BackToTopButton />
            
            {/* WhatsApp Chat Button */}
            <a 
              href="https://wa.me/966123456789" 
              className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 z-20"
              aria-label="تواصل معنا عبر واتساب"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 z-20"
      aria-label="العودة إلى الأعلى"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <i className="fas fa-arrow-up"></i>
    </motion.button>
  );
};

export default Layout;
