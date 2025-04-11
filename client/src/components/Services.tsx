import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { services } from "@/lib/data";

const Services = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className={`py-20 bg-muted relative slant-bg section-reveal ${inView ? "active" : ""}`}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn("up", 0.3)}
            className="text-3xl md:text-4xl font-bold text-white font-cairo relative inline-block"
          >
            خدماتنا
            <span className="block h-1 w-24 bg-white mt-2 mx-auto"></span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-white text-opacity-90 mt-4 max-w-2xl mx-auto"
          >
            نقدم مجموعة متنوعة من الخدمات التجارية المتكاملة لتلبية احتياجات عملائنا
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              whileHover={{ y: -10 }}
              className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500"
            >
              <motion.div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 -mt-10 mr-4 border-4 border-white shadow-lg">
                  <i className={`${service.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary font-cairo mb-3">{service.title}</h3>
                <p className="text-dark mb-4">{service.description}</p>
                <motion.a
                  href="#contact"
                  className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center"
                  whileHover={{ x: -5 }}
                >
                  المزيد
                  <i className="fas fa-arrow-left mr-2"></i>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
