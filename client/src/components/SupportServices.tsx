import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const SupportServices = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  const individualServices = [
    "في الاستشارات الفردية، نقدم لك مساحة آمنة للتعبير عن مشاعرك. سنستمع إليك وندعمك في فهم ما تشعر به. هدفنا هو مساعدتك على تجاوز هذه المرحلة الصعبة بكل ثقة وهدوء",
    "نحن هنا لنساعدك في وضع خطة واضحة لمستقبلك. سنتحدث عن الخيارات المتاحة لك ونساعدك على اتخاذ القرارات الصائبة. معاً، سنعمل على بناء رؤية جديدة لحياتك بعد الطلاق، مملوءة بالأمل والتفاؤل",
    "نحن نؤمن بقوة التغيير. ستتعلم تقنيات للتعامل مع الضغوط والتحديات اليومية. من خلال دعمنا، ستكتسب الثقة لتجاوز العقبات وبناء علاقة جديدة مع نفسك ومع الآخرين، خاصةً مع أطفالك",
    "ستتاح لك الفرصة لمشاركة تجاربك مع أشخاص آخرين يمرون بنفس الظروف. من خلال هذه التفاعلات، ستشعر أنك لست وحدك، وستكتسب دعمًا إضافيًا من مجتمع يشجعك على النمو والتقدم",
    "في نهاية كل جلسة، ستخرج بشعور من الوضوح والإيجابية. نحن هنا لنساعدك على استعادة قوتك وعيش حياة مليئة بالفرح. دعنا نكون شريكك في هذه الرحلة نحو إعادة بناء نفسك ومستقبلك."
  ];

  const groupServices = [
    "في جلسات الدعم الجماعي، ستلتقي بأشخاص يشاركونك نفس التجارب. ستجد بيئة دافئة ومشجعة حيث يمكنك تبادل الأفكار والمشاعر بحرية وأمان. نحن هنا لنساعدك على الشعور بالانتماء",
    "سنجتمع في جلسات منتظمة لنناقش التحديات التي تواجهها. ستتعلم كيف تتغلب على الصعوبات مع دعم الآخرين. هذه اللحظات ستفتح لك أبواباً جديدة لفهم مشاعرك والتواصل بشكل أفضل مع من حولك",
    "ستساعدك هذه التجارب المشتركة على بناء صداقات جديدة ودعم مستمر. ستجد أن الحوار مع الآخرين يمنحك القوة والشجاعة لمواجهة المستقبل. معًا، سنحقق خطوات إيجابية نحو التعافي والنمو الشخصي",
    "كما سنقدم لك أدوات وتقنيات لمساعدتك في التعامل مع مشاعر الحزن والغضب. ستتعلم كيفية تحويل هذه المشاعر إلى دافع لتحقيق أهدافك وبناء حياة جديدة مليئة بالأمل والسعادة",
    "في نهاية كل جلسة، ستشعر بالتحسن والتفاؤل. نحن هنا لنساعدك في إعادة بناء حياتك مع الدعم الجماعي. دعنا نكون جزءًا من رحلتك نحو الشفاء واكتشاف القوة الداخلية التي لديك"
  ];

  const workshopServices = [
    "ورش العمل لدينا مصممة لتزويدك بالأدوات والمعرفة اللازمة للتعامل مع التحديات التي تأتي مع الطلاق. ستتعلم مهارات جديدة تساعدك على تعزيز ثقتك بنفسك وبناء حياة أفضل",
    "ستتناول ورش العمل مواضيع متنوعة، مثل إدارة المشاعر، وتطوير مهارات التواصل، وكيفية التعامل مع الأطفال خلال هذه الفترة. هذه المهارات ستجعلك أكثر قدرة على مواجهة التحديات اليومية بثقة",
    "ستستفيد من تمارين عملية وتجارب تفاعلية تعزز فهمك. ستحصل على فرصة لممارسة ما تعلمته مع دعم من المدربين والمشاركين، مما يساعدك على تطبيق المهارات الجديدة في حياتك اليومية بشكل فعّال",
    "ستحصل أيضًا على مواد تعليمية مفيدة يمكنك الرجوع إليها لاحقًا. هدفنا هو ضمان أن تشعر بالثقة والتمكين عند مواجهة تحدياتك، وأن تكون مستعدًا لبناء مستقبل مشرق لنفسك ولعائلتك",
    "في نهاية كل ورشة عمل، ستخرج بفهم أعمق لنفسك وللآخرين. نحن هنا لنساعدك في تحقيق التغيير الإيجابي. انضم إلينا واكتشف كيف يمكن أن تكون هذه التجربة نقطة تحول في حياتك"
  ];

  const trainingServices = [
    "اكتشف قوتك الداخلية من خلال دوراتنا التدريبية المتخصصة في تقنيات التحرر العاطفي (peat). نحن نقدم لك الأدوات اللازمة لمعالجة الصدمات ومساعدتك على شفاء نفسك أولاً",
    "ستتعلم كيفية إدارة مشاعرك والتغلب على التحديات العاطفية. دوراتنا تتيح لك فهم أعمق للتقنيات المعترف بها دولياً. نحن نركز على توفير بيئة دعم تضمن لك التعلم الفعّال والتطبيق العملي",
    "بعد إكمال الدورة، ستكون مجهزاً بالمعرفة والخبرة التي تحتاجها لمساعدة الآخرين. نحن نؤمن بأن كل شخص يمكنه أن يكون مرشداً. انضم إلينا وابدأ رحلتك نحو التأثير الإيجابي في حياة الآخرين",
    "نحن نقدم لك فرصة مهنية جاهزة بعد التكوين. احصل على الدعم الذي تحتاجه لتطبيق ما تعلمته في العالم الحقيقي. كن جزءًا من مجتمعنا الذي يشاركك نفس الأهداف والطموحات. انطلق معنا",
    "انضم الآن إلى دوراتنا واستفد من التكنولوجيا الحديثة، كالدورات الأونلاين والمحتوى الدائم. ابدأ رحلتك في التحرر العاطفي اليوم، وكن جزءًا من تغيير حقيقي في حياة الآخرين"
  ];

  return (
    <section
      id="support-services"
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
            خدمات الدعم والاستشارة
            <span className="block h-1 w-24 bg-secondary mt-2 mx-auto"></span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="mt-6 text-lg text-center max-w-3xl mx-auto"
          >
            نحن ملتزمون بتقديم الدعم الفعّال لكل من يمر بتجربة الطلاق، لنساعدهم على التعافي
          </motion.p>
        </motion.div>

        {/* Individual Support */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">دعم نفسي فردي</h3>
            <div className="space-y-4">
              {individualServices.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="text-dark leading-relaxed"
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

          <motion.div
            variants={fadeIn("left", 0.3)}
            className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">بيئة داعمة جماعية</h3>
            <div className="space-y-4">
              {groupServices.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="text-dark leading-relaxed"
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

        {/* Workshops and Training */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">أنشطة تفاعلية</h3>
            <div className="space-y-4">
              {workshopServices.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="text-dark leading-relaxed"
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

          <motion.div
            variants={fadeIn("left", 0.3)}
            className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6 text-center">دورات تدريبية</h3>
            <div className="space-y-4">
              {trainingServices.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.3 + index * 0.05)}
                  className="text-dark leading-relaxed"
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
                انضم الآن!
                <i className="fas fa-arrow-left mr-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportServices;