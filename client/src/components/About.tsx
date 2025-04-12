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
              <i className="fas fa-home text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary font-cairo mb-4 pr-12">رؤيتنا</h3>
            <p className="text-dark leading-relaxed">
              مجتمعنا لن يتقدم وقد باث معدل الأمراض النفسية في تزايد مستمر، مما أثر سلبا على إستقرار الأسر الشيء الذي يفسر بوضوح نسبة الطلاق المرتفعة والعزوف عن الزواج.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            className="bg-primary bg-opacity-5 p-6 rounded-lg relative"
          >
            <div className="absolute -top-4 -right-4 bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center">
              <i className="fas fa-heart text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary font-cairo mb-4 pr-12">مهمتنا</h3>
            <p className="text-dark leading-relaxed">
              تكوين أكبر عدد من المعالجين الشعوريين حتى يقدموا دعما ومواكبة للأسر التي تعاني في صمت أو وصلت شكواها للمحكمة الأسرية.
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
    title: "فريق متخصص",
    description: "نمتلك فريق من المتخصصين ذوي خبرة في مجال العلاج النفسي والأسري",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "دورات متميزة",
    description: "نقدم دورات تدريبية عالية الجودة تساعد على فهم وتجاوز الصعوبات الأسرية",
  },
  {
    icon: "fas fa-hands-helping",
    title: "دعم متكامل",
    description: "نعمل على تقديم الدعم المتكامل للأسر من خلال برامج متخصصة وجلسات فردية",
  },
];

export default About;
