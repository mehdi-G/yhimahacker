import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال بريد إلكتروني صحيح",
        variant: "destructive",
      });
      return;
    }
    
    // Would typically make an API call here
    toast({
      title: "تم الاشتراك بنجاح",
      description: "شكراً لاشتراكك في نشرتنا البريدية",
    });
    
    setEmail("");
  };

  const footerLinks = {
    quickLinks: [
      { href: "#hero", label: "الرئيسية" },
      { href: "#about", label: "من نحن" },
      { href: "#services", label: "الدورات" },
      { href: "#projects", label: "البرامج" },
      { href: "#gallery", label: "معرض الصور" },
      { href: "#contact", label: "تواصل معنا" },
    ],
    courses: [
      { href: "#services", label: "فهم الطلاق وٓاثاره" },
      { href: "#services", label: "التحرر العاطفي العميق" },
      { href: "#projects", label: "الجوانب القانونية والنفسية" },
      { href: "#projects", label: "شفاء الطفل الداخلي" },
    ],
    socialLinks: [
      { icon: "fab fa-facebook-f", href: "#", label: "فيسبوك" },
      { icon: "fab fa-twitter", href: "#", label: "تويتر" },
      { icon: "fab fa-instagram", href: "#", label: "انستغرام" },
      { icon: "fab fa-linkedin-in", href: "#", label: "لينكدإن" },
    ],
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="mb-6">
              <div className="h-16 w-16 rounded-full border-2 border-secondary bg-white text-primary flex items-center justify-center mb-4">
                <i className="fas fa-heart text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold font-cairo mb-2">C.F.T.T</h4>
              <p className="text-white text-opacity-80">مركز لدعم الأسرة وتنميتها</p>
              <p className="mt-2 text-white text-opacity-80">
                <span className="block">شعارنا: أسرتي أولويتي</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-cairo mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold font-cairo mb-4">برامجنا</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-white text-opacity-80 hover:text-secondary transition-colors"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold font-cairo mb-4">النشرة البريدية</h4>
            <p className="text-white text-opacity-80 mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر الدورات والعروض
            </p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-2 rounded-r-lg w-full focus:outline-none focus:ring-2 focus:ring-secondary text-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded-l-lg hover:bg-opacity-90 transition-colors"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-lg font-bold mb-3">تابعنا على</h5>
              <div className="flex space-x-4 space-x-reverse">
                {footerLinks.socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-white bg-opacity-20 hover:bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-white text-opacity-80">
            © {new Date().getFullYear()} مركز C.F.T.T لدعم الأسرة وتنميتها - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
