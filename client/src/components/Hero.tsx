import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn, float } from "@/lib/animations";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <div className="decorative-pattern absolute inset-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 mt-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="text-right"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-cairo mb-4">
              <span className="block">مرحباً بكم في</span>
              <span className="text-accent">C.F.T.T</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-cairo mb-4">
              مركز لدعم الأسرة وتنميتها
            </h2>
            <p className="text-lg md:text-xl text-dark opacity-90 mb-8">
              نهدف إلى مساعدة الأسر على تجاوز التحديات وتحسين العلاقات الأسرية من خلال برامج تدريبية متخصصة وجلسات دعم نفسي عالية الجودة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <motion.a
                href="#services"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                الدورات التدريبية
                <i className="fas fa-arrow-left mr-2"></i>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                تواصل معنا
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            variants={float}
            className="relative z-10"
          >
            <motion.img
              variants={slideIn("left", 0.5)}
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="العائلة"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 bg-primary bg-opacity-90 text-white p-3 rounded-lg shadow-lg">
              <p className="font-bold">أسرتي أولويتي</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
