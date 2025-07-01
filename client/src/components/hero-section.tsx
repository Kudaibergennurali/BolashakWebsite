import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
  const { t } = useLanguage();

  const handleApplyClick = () => {
    const element = document.querySelector("#applicants");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreClick = () => {
    const element = document.querySelector("#specialties");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/410650726.sd.mp4?s=c8b2c66f2bd5d97b29b2eb1a6e7d3b8a&profile_id=165"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {t("hero.title").split("Bolashak College").map((part, index) => (
            <span key={index}>
              {part}
              {index === 0 && (
                <span className="text-college-red-accent">Bolashak College</span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={handleApplyClick}
            className="bg-college-red hover:bg-college-red-light text-white px-8 py-4 text-lg font-semibold hover-lift"
          >
            {t("hero.apply")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleExploreClick}
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold hover-lift"
          >
            {t("hero.explore")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
