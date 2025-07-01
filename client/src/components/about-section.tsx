import { motion } from "framer-motion";
import { Award, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

const features = [
  {
    icon: Award,
    key: "excellence",
    gradient: "from-college-red to-red-600",
  },
  {
    icon: Users,
    key: "community",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Lightbulb,
    key: "innovation",
    gradient: "from-purple-600 to-purple-700",
  },
];

export function AboutSection() {
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
    <section id="about" className="py-20 bg-muted/50">
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
            {t("about.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("about.description")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.key} variants={itemVariants}>
                <Card className="h-full hover-lift smooth-transition">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className="text-white text-2xl" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {t(`about.${feature.key}`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`about.${feature.key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
