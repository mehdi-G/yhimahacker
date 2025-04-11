import { motion } from "framer-motion";

export const ArabicPattern = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => {
  return (
    <div 
      className={`decorative-pattern absolute inset-0 ${className}`} 
      style={{ opacity }}
    ></div>
  );
};

export const SlantBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="slant-bg relative">
      {children}
    </div>
  );
};

export const DecorativeIcon = ({ 
  icon, 
  color = "bg-secondary", 
  position = "-top-4 -right-4" 
}: { 
  icon: string, 
  color?: string, 
  position?: string 
}) => {
  return (
    <motion.div 
      className={`absolute ${position} ${color} text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <i className={`${icon} text-2xl`}></i>
    </motion.div>
  );
};
