import { motion } from "framer-motion";
import { Code, TrendingUp, Microscope, Palette } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const specialties = [
  {
    icon: Code,
    key: "engineering",
    gradient: "from-college-red to-red-600",
  },
  {
    icon: TrendingUp,
    key: "business",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Microscope,
    key: "science",
    gradient: "from-green-600 to-green-700",
  },
  {
    icon: Palette,
    key: "arts",
    gradient: "from-purple-600 to-purple-700",
  },
];

export function SpecialtiesSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="specialties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold college-red mb-6"
          >
            {t("specialties.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("specialties.description")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={specialty.key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group bg-gradient-to-br ${specialty.gradient} p-6 rounded-xl text-white hover-lift smooth-transition cursor-pointer`}
              >
                <Icon className="text-3xl mb-4" size={48} />
                <h3 className="text-lg font-bold mb-2">
                  {t(`spec.${specialty.key}`)}
                </h3>
                <p className="text-sm opacity-90">
                  {t(`spec.${specialty.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
