import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const CourseDetails = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  const courseModules = [
    { title: "الحصة الأولى", content: "مقدمة عن الطلاق" },
    { title: "الحصة الثانية", content: "الجانب القانوني للطلاق" },
    { title: "الحصة الثالثة", content: "الجانب النفسي للطلاق" },
    { title: "الحصة الرابعة", content: "تأثير الطلاق على الأطفال" },
    { title: "الحصة الخامسة", content: "التواصل بين الشريكين بعد الطلاق" },
    { title: "الحصة السادسة", content: "إدارة المشاعر والأفكار السلبية" },
    { title: "الحصة السابعة", content: "التخطيط للحياة بعد الطلاق" },
    { title: "الحصة الثامنة", content: "دعم الذات والعلاقات الاجتماعية" },
    { title: "الحصة التاسعة", content: "الطلاق كفرصة للنمو والتطور" },
    { title: "الحصة العاشرة", content: "التطبيق العملي وختام الدورة" },
  ];

  const courseGoals = [
    "فهم شامل للطلاق وآثاره النفسية والاجتماعية",
    "اكتساب مهارات عملية لإدارة الحياة بعد الطلاق والتأقلم مع التغير الحاصل",
    "تحسين مهارات التواصل وحل المشكالت مع الشريك السابق مع بناء حدود صحية",
    "تعزيز الثقة بالنفس والانطلاق نحو حياة جديدة",
    "فهم ودعم الأطفال نفسيا خلال وبعد الطلاق",
  ];

  const coursePackage = [
    "حقيبة تدريبية للدورة",
    "تسجيلات الدورة كاملة",
    "جلسة فردية لوضع خطة عمل شخصية لكل مشترك",
    "تمارين تفاعلية",
  ];

  return (
    <section
      id="course-details"
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
            فهم الطلاق وآثاره وإدارة الحياة بعده
            <span className="block h-1 w-24 bg-secondary mt-2 mx-auto"></span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="mt-6 text-lg text-center max-w-3xl mx-auto"
          >
            في الأسنوات الأخيرة أصبحنا نسمع عن حالات الطلاق أكثر من الزواج، لكن هل يعرف الجميع ماهو
            الطلاق؟ ومدى تأثيره على الصحة النفسية والجسدية على الفرد؟ هل هناك فرق في ذلك بين
            النساء والرجال؟
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="mt-4 text-lg text-center max-w-3xl mx-auto"
          >
            تعددت أسباب الطلاق بين ماهو لأتفه الأسباب وماهو أعمق وأخطر من أن يصدقه المجتمع، لذا
            قررنا تقديم دورة تدريبية وتوعوية للوقوف عند مختلف الجوانب اللازم معرفتها عن الطلاق.
          </motion.p>
        </motion.div>

        {/* Course Information */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="bg-primary bg-opacity-5 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary font-cairo mb-4">معلومات الدورة</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-users mt-1 text-primary ml-2"></i>
                <span>الفئة المستهدفة: النساء والرجال وخصوصا الأزواج ذوي أطفال</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 text-primary ml-2"></i>
                <span>مدة الدورة: 3 شهور بمعدل 30 ساعة تدريبية</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-money-bill-wave mt-1 text-primary ml-2"></i>
                <span>ثمن الدورة: 3000 درهم</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-calendar-alt mt-1 text-primary ml-2"></i>
                <span>تاريخ بدء الدورة: 05/04/2025 - 00h20</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="bg-primary bg-opacity-5 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary font-cairo mb-4">المهمة والأهداف</h3>
            <p className="mb-4">
              <span className="font-bold block mb-2">المهمة:</span>
              إيصال مفهوم الطلاق سواء للأشخاص الذين بدأوا رحلة الطلاق أو الذين ينوون خوض التجربة (فربما
              يغيرون رأيهم)
            </p>
            <span className="font-bold block mb-2">الأهداف:</span>
            <ul className="space-y-2 list-disc pr-6">
              {courseGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            className="bg-primary bg-opacity-5 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary font-cairo mb-4">ما ستحصل عليه</h3>
            <ul className="space-y-3">
              {coursePackage.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle mt-1 text-secondary ml-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Course Modules */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md"
        >
          <motion.h3
            variants={fadeIn("up", 0.3)}
            className="text-2xl font-bold text-primary font-cairo mb-8 text-center"
          >
            محاور الدورة
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.05)}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 ml-4">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{module.title}</h4>
                  <p>{module.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;