import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-white relative section-reveal ${inView ? "active" : ""}`}
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
            من نحن
            <span className="block h-1 w-24 bg-secondary mt-2 mx-auto"></span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={fadeIn("right", 0.4)}
            className="bg-primary bg-opacity-5 p-6 rounded-lg relative"
          >
            <div className="absolute -top-4 -right-4 bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center">
              <i className="fas fa-building text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary font-cairo mb-4 pr-12">رؤيتنا</h3>
            <p className="text-dark leading-relaxed">
              نسعى لنكون شركة رائدة في مجال التجارة، تقدم خدمات تلبي احتياجات عملائنا بكفاءة وجودة عالية، والمساهمة في تنمية الاقتصاد الوطني.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            className="bg-primary bg-opacity-5 p-6 rounded-lg relative"
          >
            <div className="absolute -top-4 -right-4 bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center">
              <i className="fas fa-star text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary font-cairo mb-4 pr-12">رسالتنا</h3>
            <p className="text-dark leading-relaxed">
              توفير خدمات تجارية متكاملة ذات جودة عالية، والعمل على تحقيق رضا العملاء من خلال فريق عمل محترف وتقنيات متطورة.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-16 bg-muted rounded-lg p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={zoomIn(0.3 + index * 0.1)}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-primary text-3xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-primary font-cairo mb-2">{feature.title}</h4>
                <p className="text-dark">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const aboutFeatures = [
  {
    icon: "fas fa-user-tie",
    title: "فريق محترف",
    description: "نمتلك فريق عمل ذو خبرة وكفاءة عالية في مختلف المجالات",
  },
  {
    icon: "fas fa-medal",
    title: "جودة عالية",
    description: "نلتزم بتقديم خدمات ذات جودة عالية تلبي احتياجات عملائنا",
  },
  {
    icon: "fas fa-handshake",
    title: "مصداقية وثقة",
    description: "نعمل بشفافية ومصداقية لبناء علاقات طويلة الأمد مع عملائنا",
  },
];

export default About;
