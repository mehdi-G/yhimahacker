import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { projects } from "@/lib/data";

const Projects = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-white section-reveal ${inView ? "active" : ""}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn("up", 0.3)}
            className="text-3xl md:text-4xl font-bold text-primary font-cairo relative inline-block"
          >
            مشاريعنا
            <span className="block h-1 w-24 bg-secondary mt-2 mx-auto"></span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-dark text-opacity-90 mt-4 max-w-2xl mx-auto"
          >
            بعض المشاريع التي قمنا بتنفيذها بنجاح لعملائنا
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              className="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center transition-opacity duration-300"
                >
                  <motion.a
                    href="#"
                    className="bg-white text-primary px-4 py-2 rounded-lg shadow hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    تفاصيل المشروع
                  </motion.a>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary font-cairo mb-2">{project.title}</h3>
                <p className="text-dark mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark opacity-75">{project.year}</span>
                  <span className={`
                    ${project.status === 'مكتمل' ? 'bg-secondary' : 'bg-accent'} 
                    text-white text-sm px-3 py-1 rounded-full
                  `}>
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors shadow hover:shadow-lg"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            هل لديك مشروع؟ تواصل معنا
            <i className="fas fa-arrow-left mr-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
