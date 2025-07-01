import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const steps = [
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "4" },
];

export function ApplicantsSection() {
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
    <section id="applicants" className="py-20 bg-college-red text-white">
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
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("applicants.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            {t("applicants.description")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Admissions Consultation"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6">
              {t("applicants.process")}
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-college-red font-bold text-sm flex-shrink-0">
                    {step.key}
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {t(`step.${step.key}`)}
                    </h4>
                    <p className="text-red-100">
                      {t(`step.${step.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-white text-college-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift"
          >
            {t("applicants.start")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
