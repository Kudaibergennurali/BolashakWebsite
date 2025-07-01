import { motion } from "framer-motion";
import { Book, BookOpen, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const resources = [
  {
    icon: Book,
    key: "portal",
    gradient: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
    iconBg: "bg-blue-600",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: BookOpen,
    key: "library",
    gradient: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
    iconBg: "bg-green-600",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: UsersRound,
    key: "support",
    gradient: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
    iconBg: "bg-purple-600",
    textColor: "text-purple-600 dark:text-purple-400",
  },
];

export function StudentsSection() {
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
    <section id="students" className="py-20 bg-background">
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
            {t("students.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("students.description")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div key={resource.key} variants={itemVariants}>
                <Card className={`h-full hover-lift smooth-transition bg-gradient-to-br ${resource.gradient}`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${resource.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="text-white text-2xl" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {t(`students.${resource.key}`)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(`students.${resource.key}.desc`)}
                    </p>
                    <Button
                      variant="ghost"
                      className={`${resource.textColor} font-semibold hover:bg-transparent`}
                    >
                      {t(`students.${resource.key === "portal" ? "access" : resource.key === "library" ? "visit" : "get"}`)}
                    </Button>
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
