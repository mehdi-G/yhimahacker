import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const EmotionalLiberationWorkshop = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  const workshopDescription = [
    "انضم إلى ورشة العمل الفريدة التي تركز على أدوات التحرر العاطفي. ستحصل على فرصة لتطبيق التقنيات بشكل عملي، مما يساعدك على فهم نفسك والآخرين بشكل أعمق. استعد لتجربة ملهمة",
    "خلال هذه الورشة، ستتعلم كيفية مواجهة المشاعر الصعبة والتخلص من الصدمات. سنوفر لك بيئة آمنة لتبادل الخبرات مع الآخرين، مما يعزز روح الدعم والتعاون بين المشاركين. كن جزءًا من هذا التحول",
    "ستكتسب مهارات جديدة في التعامل مع التوتر والقلق، مما يمكنك من دعم الآخرين بطرق فعالة. ستكون هذه الورشة فرصة لتطوير مهاراتك الشخصية والمهنية، مما يساعدك في رحلتك نحو الشفاء الذاتي",
    "ستتعرف على تقنيات مبتكرة تساعدك في إدارة العلاقات المؤذية والتخلص من آثارها. مع كل خطوة، ستشعر بقوة التغيير الإيجابي في حياتك. انضم إلينا واكتشف كيف يمكنك أن تكون مصدر إلهام للآخرين",
    "لا تفوت هذه الفرصة لتطوير ذاتك ومساعدة الآخرين. مع شغفك ورغبتك في التعلم، سنكون معك في كل خطوة على الطريق. ابدأ رحلتك في التعبير عن مشاعرك ودعم الآخرين اليوم"
  ];

  const courseDescription = [
    "انضم إلى دورة التحرر العاطفي العميق، حيث نساعدك على فهم مشاعرك بشكل أعمق. ستتعلم تقنيات فعالة لشفاء الطفل الداخلي وإدارة الصدمات بطريقة مبتكرة. استعد للتغيير الإيجابي",
    "خلال هذه الدورة المكثفة، ستكتسب أدوات قوية تساعدك على الشفاء الذاتي أولاً، ثم تقديم الدعم للآخرين. ندمج بين المعرفة النظرية والتطبيق العملي لتضمن تجربة تعلم شاملة ومثرية. انطلق نحو حياة جديدة",
    "ستتعلم كيفية التخلص من آثار الصدمات والعلاقات المؤذية، مما يمنحك القوة لاستعادة توازنك العاطفي. بدعم من ممارسين محترفين، ستكون جزءًا من مجتمع يدعم بعضه البعض في رحلة الشفاء. ابدأ رحلتك الآن",
    "ستفتح لك الدورة آفاقاً جديدة لمهنة متخصصة في العلاج الشعوري. ستكتسب مهارات التواصل والاستماع، مما يمكنك من تقديم الدعم العاطفي بطريقة فعالة. كن صوت الأمل للآخرين وشارك خبرتك معهم",
    "انضم إلينا في هذه الرحلة التحولية، حيث نؤمن بأن الشفاء يبدأ من الداخل. مع شغفك ورغبتك في التعلم، سنساعدك على تحقيق أهدافك ومساعدة الآخرين في التغلب على تحدياتهم العاطفية. ابدأ اليوم"
  ];

  const supportCommunityDescription = [
    "استفد من الاستشارة الفردية لتلقي دعم مخصص يناسب احتياجاتك. ستحصل على فرصة للحديث عن مشاعرك، ومواجهة التحديات العاطفية بمساعدة خبراء في مجال التحرر العاطفي. ابدأ رحلتك نحو الشفاء",
    "خلال الاستشارة، سنعمل معًا على تحديد مصادر مشاعرك الصعبة وأثرها على حياتك. باستخدام تقنيات فعالة، سنساعدك على تطوير استراتيجيات للتعامل مع التحديات، مما يمنحك شعورًا بالتحكم والثقة",
    "ستحصل على دعم شخصي يعزز من قدرتك على الشفاء الذاتي. سنساعدك في فهم عواطفك بشكل أفضل، مما يمكنّك من اتخاذ خطوات إيجابية نحو تحسين جودة حياتك وعلاقاتك مع الآخرين. ابدأ اليوم"
  ];

  const communitySupportDescription = [
    "انضم إلى مجتمع الدعم الخاص بنا، حيث نخلق بيئة مشجعة ومساندة لكل من يسعى للتحرر العاطفي. هنا، ستجد أشخاصاً يشتركون في تجاربك وأهدافك، مما يعزز من شعورك بالانتماء",
    "في مجتمعنا، يمكنك تبادل الأفكار والدروس مع الآخرين الذين يمرون بنفس الرحلة. سنقدم لك موارد قيمة، وورش عمل، ونقاشات تعزز من تجربتك وتساعدك على النمو الشخصي والمهني",
    "ستكون جزءًا من شبكة من الأفراد المتحمسين الذين يدعمون بعضهم البعض. يمكنك الحصول على نصائح، ومشاركة النجاحات، ومواجهة التحديات معًا. نحن هنا لنساعدك في تحقيق أهدافك العاطفية والمهنية"
  ];

  return (
    <section
      id="emotional-workshop"
      ref={ref}
      className={`py-20 bg-primary text-white relative section-reveal ${inView ? "active" : ""}`}
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
            className="text-3xl md:text-4xl font-bold text-white font-cairo relative inline-block"
          >
            دورة التحرر العاطفي العميق
            <span className="block h-1 w-24 bg-white mt-2 mx-auto"></span>
          </motion.h2>
        </motion.div>

        {/* Course and Workshop Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {/* Left: Course */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="bg-white text-dark p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">دورة التحرر</h3>
            <div className="space-y-4">
              {courseDescription.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-8 text-center"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                سجل الآن
                <i className="fas fa-arrow-left mr-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Workshop */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="bg-white text-dark p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">ورشة عمل</h3>
            <div className="space-y-4">
              {workshopDescription.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-8 text-center"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                انضم الآن
                <i className="fas fa-arrow-left mr-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Support Community Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        >
          {/* Left: Individual */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="bg-white text-dark p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">استشارة فردية</h3>
            <div className="space-y-4">
              {supportCommunityDescription.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-8 text-center"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز الآن
                <i className="fas fa-arrow-left mr-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Community */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="bg-white text-dark p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">مجتمع دعم</h3>
            <div className="space-y-4">
              {communitySupportDescription.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-8 text-center"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                انضم إلينا!
                <i className="fas fa-arrow-left mr-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-20 text-center"
        >
          <p className="text-xl font-cairo">
            خبرتنا وشغفنا يضمنان لك رحلة شفاء فريدة وفعّالة في عالم التحرر العاطفي
          </p>
          <p className="text-lg mt-2 font-cairo">
            نحن ملتزمون بتقديم أفضل الدعم العاطفي لتحقيق شفاء حقيقي وفعّال
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalLiberationWorkshop;