import { motion } from "framer-motion";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const quickLinks = [
  { href: "#about", key: "nav.about" },
  { href: "#specialties", key: "nav.specialties" },
  { href: "#activity", key: "nav.activity" },
  { href: "#contacts", key: "nav.contacts" },
];

const studentResources = [
  { href: "#", key: "students.portal" },
  { href: "#", key: "students.library" },
  { href: "#", key: "footer.career" },
  { href: "#", key: "footer.calendar" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export function Footer() {
  const { t } = useLanguage();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-college-red rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bolashak College</h3>
                <p className="text-gray-400 text-sm">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-gray-400">
              {t("footer.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white smooth-transition text-left"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2">
              {studentResources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(resource.href)}
                    className="text-gray-400 hover:text-white smooth-transition text-left"
                  >
                    {t(resource.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t("footer.follow")}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-gray-800 hover:bg-college-red smooth-transition"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <Icon size={20} />
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">{t("footer.copyright")}</p>
        </motion.div>
      </div>
    </footer>
  );
}
