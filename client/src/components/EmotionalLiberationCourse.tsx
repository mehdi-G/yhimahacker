import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const EmotionalLiberationCourse = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  const courseModules = [
    { 
      title: "كيفية إدارة الجلسات باحترافية", 
      description: [
        "التعامل الصحيح مع مشاعر العميل",
        "إدارة الجلسة بشكل محترف",
        "اهم ثلاث مبادئ تعتمد عليهم في إدارة الجلسة لتكون ناجحة %١٠٠",
        "مراحل إنهاء الجلسة"
      ] 
    },
    { 
      title: "المحور النظري للعلاج الشعوري", 
      description: [
        "تعريف تقنيات الpeat",
        "تاريخ مدرسة ال peat ومؤسسها ورحلته في اختراع التقنيات",
        "ما هي العناصر التي تشتغل عليها تقنيات الpeat",
        "التحرر من الأنماط السلبية المتكررة في العلاقات",
        "كيفية التعافي من العالقات السامة"
      ] 
    },
    { 
      title: "الأمراض السيكوسوماتية", 
      description: [
        "مراحل تطور الامراض السيكوسوماتية من تراكم الضغوط",
        "تحليل حالة الأمراض السيكوسوماتية من منظور علم الميتاهيلث",
        "الخطة العلاجية التكاملية للتعامل مع الامراض السايكوسوماتيك"
      ] 
    },
    { 
      title: "الصدمات النفسية + المستوى الأول", 
      description: [
        "شرح الصدمات النفسية وصدمات الطفولة",
        "أسباب الصدمات النفسية واعراضها",
        "شرح مراحل الصدمة ومساراتها",
        "التعامل مع الصدمات النفسية بتقنيات الpeat"
      ] 
    },
    { 
      title: "المستوى الثاني + الطفل الداخلي", 
      description: [
        "مدخل إلى مفهوم الطفل الداخلي",
        "الجروح العاطفية للطفل الداخلي",
        "العلاقة بين الطفل الداخلي والدفاعات النفسية",
        "العلاج الشعوري: أدوات للوصول إلى الطفل الداخلي"
      ] 
    },
    { 
      title: "إكمال المحور العملي المستوى الثالث", 
      description: [
        "التطبيق العملي للمفاهيم والتقنيات السابقة",
        "حالات عملية وتمارين تطبيقية",
        "الإشراف والمتابعة"
      ] 
    },
  ];

  const courseIncludes = [
    "شهادة معتمدة دوليا كممارس للتقنيات",
    "حقيبة لشرح الأدوات والتقنيات العلاجية نظري وامثلة عملية",
    "تطبيق عملي ومنتورينج أثناء التدريب",
    "الانضمام الى مجموعة مجانية للأشراف والمتابعة والرد على الاستفسارات",
    "تسجيلات التدريب ستظل معكم مدى الحياة",
    "فرصة لإعادة التدريب مرة اخرى مجانا لإتقان العمل بالتقنيات",
    "ستتعالَج شخصيا قبل أن تعالِج"
  ];

  const courseRequirements = [
    "قدرة عالية على الاستماع الفعّال والتواصل العاطفي",
    "تحلّي بالصبر والتفهم دون إصدار أحكام",
    "مهارة في طرح الأسئلة العميقة للوصول إلى جذور المشكلات",
    "مرونة في التعامل مع الحالات المختلفة",
    "الوعي الذاتي وإدارة المشاعر الشخصية بذكاء"
  ];

  const joinReasons = [
    "ستدرب تدريبا غير تقليدي ومميز جدا يجمع بين الخبرات العملية والنظرية",
    "ستفهم شخصيتك بشكل أفضل وبالتالي ستدير مشاعرك بشكل أفضل",
    "ستتمكن من التخلص من آلامك أولا قبل البدء بمعالجة الآخرين",
    "ستأخذ شهادة معتمدة كممارس معتمد للعلاج الشعوري",
    "ستكون في بيئة تدريب ممتعة ومحفزة"
  ];

  return (
    <section
      id="emotional-liberation"
      ref={ref}
      className={`py-20 bg-primary bg-opacity-5 relative section-reveal ${inView ? "active" : ""}`}
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
            التحرر العاطفي العميق: شفاء الطفل الداخلي
            <span className="block h-1 w-24 bg-secondary mt-2 mx-auto"></span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="mt-6 text-lg text-center max-w-3xl mx-auto"
          >
            تعالَج قبل أن تعالِج - دورة متخصصة في العلاج الشعوري وتقنيات PEAT
          </motion.p>
        </motion.div>

        {/* Trainers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col md:flex-row gap-8 justify-center mb-16"
        >
          <motion.div
            variants={fadeIn("right", 0.4)}
            className="flex-1 bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="mx-auto w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl mb-4">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">لفتاحي رجاء</h3>
            <p className="text-gray-600 mb-3">مدربة معتمدة في تقنيات PEAT</p>
            <p>خبرة لأكثر من أربع سنوات كممارسة لتقنيات PEAT</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            className="flex-1 bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="mx-auto w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl mb-4">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">الناصري منى</h3>
            <p className="text-gray-600 mb-3">مدربة معتمدة في تقنيات PEAT</p>
            <p>خبرة في مساعدة العديد من الناس من المغرب ومختلف الدول العربية</p>
          </motion.div>
        </motion.div>

        {/* Course Mission */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-primary text-white p-8 rounded-lg shadow-md mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">مهمتنا ورؤيتنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3">مهمتنا</h4>
              <p className="leading-relaxed">
                تكوين أكبر عدد من المعالجين الشعوريين حتى يقدموا دعما ومواكبة للأسر
                التي تعاني في صمت أو وصلت شكواها للمحكمة الأسرية.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">رؤيتنا</h4>
              <p className="leading-relaxed">
                مجتمعنا لن يتقدم وقد باث معدل الأمراض النفسية في تزايد مستمر، مما
                أثر سلبا على إستقرار الأسر الشيء الذي يفسر بوضوح نسبة الطلاق
                المرتفعة والعزوف عن الزواج.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-bold mb-3">شعارنا</h4>
            <p className="text-xl font-cairo text-center">أسرتي أولويتي</p>
          </div>
        </motion.div>

        {/* Course Modules */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={fadeIn("up", 0.3)}
            className="text-2xl font-bold text-primary font-cairo mb-8 text-center"
          >
            برنامج الدورة
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.05)}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-bold text-primary border-r-4 border-secondary pr-3 mb-4">
                  المحور {(index + 1).toString().padStart(2, '0')}
                </h4>
                <h5 className="font-bold mb-3">{module.title}</h5>
                <ul className="space-y-2">
                  {module.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 ml-2"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What You Get + Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary font-cairo mb-4">كل متدرب سوف يحصل على</h3>
            <ul className="space-y-3">
              {courseIncludes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-gift text-accent mt-1 ml-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary font-cairo mb-4">متطلبات الاشتراك في التدريب</h3>
            <ul className="space-y-3">
              {courseRequirements.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 ml-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Reasons to Join */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-primary bg-opacity-10 p-8 rounded-lg shadow-md"
        >
          <motion.h3
            variants={fadeIn("up", 0.3)}
            className="text-2xl font-bold text-primary font-cairo mb-6 text-center"
          >
            10 أسباب مقنعة للتسجيل في هذه الدورة
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {joinReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.05)}
                className="flex items-start"
              >
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 ml-3">
                  {index + 1}
                </div>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-primary font-cairo mb-4">للإستفسار والحجز</h3>
          <p className="mb-2">يبدأ التدريب يوم 21 ماي 2025</p>
          <p className="mb-4">محاضرتين بالأسبوع: الأربعاء والسبت من كل أسبوع</p>
          <p className="text-lg">لحجز التدريب التواصل على الرقم: <span className="font-bold">00212668045327</span></p>
          
          <motion.a
            href="#contact"
            className="mt-6 inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            سجل الآن
            <i className="fas fa-arrow-left mr-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalLiberationCourse;