import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "خطأ في إرسال الرسالة",
        description: error.message || "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Submit form
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "العنوان",
      content: "شارع الملك فهد، الرياض، المملكة العربية السعودية",
    },
    {
      icon: "fas fa-phone-alt",
      title: "الهاتف",
      content: "+966 12 345 6789",
    },
    {
      icon: "fas fa-envelope",
      title: "البريد الإلكتروني",
      content: "info@family-cftt.com",
    },
    {
      icon: "fas fa-clock",
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", label: "فيسبوك" },
    { icon: "fab fa-twitter", href: "#", label: "تويتر" },
    { icon: "fab fa-instagram", href: "#", label: "انستغرام" },
    { icon: "fab fa-linkedin-in", href: "#", label: "لينكدإن" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 bg-white relative section-reveal ${inView ? "active" : ""}`}
    >
      <div className="decorative-pattern absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
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
            تواصل معنا
            <span className="block h-1 w-24 bg-secondary mt-2 mx-auto"></span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-dark text-opacity-90 mt-4 max-w-2xl mx-auto"
          >
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تلبية احتياجاتك التجارية
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            variants={fadeIn("right", 0.5)}
            className="bg-muted p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary font-cairo mb-6">أرسل لنا رسالة</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark mb-2">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-dark mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-dark mb-2">الموضوع</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="" disabled>اختر موضوع الرسالة</option>
                  <option value="استفسار عام">استفسار عام</option>
                  <option value="خدمات الاستيراد والتصدير">خدمات الاستيراد والتصدير</option>
                  <option value="خدمات التسويق">خدمات التسويق</option>
                  <option value="الاستشارات التجارية">الاستشارات التجارية</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-dark mb-2">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors shadow hover:shadow-lg"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جار الإرسال...
                    </span>
                  ) : (
                    <>
                      إرسال الرسالة
                      <i className="fas fa-paper-plane mr-2"></i>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
          >
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="bg-muted p-8 rounded-lg shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold text-primary font-cairo mb-6">معلومات التواصل</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", 0.3 + index * 0.1)}
                    className="flex items-start"
                  >
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white ml-4 mt-1 flex-shrink-0">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-dark">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              className="bg-muted p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary font-cairo mb-6">تابعنا على</h3>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-primary hover:bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
