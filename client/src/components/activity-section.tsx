import { motion } from "framer-motion";
import { Calendar, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

const activities = [
  {
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Science Fair Activities",
    key: "science",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Sports Activities",
    key: "sports",
  },
  {
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Music and Arts Performance",
    key: "arts",
  },
];

const events = [
  {
    icon: Calendar,
    key: "openday",
  },
  {
    icon: Trophy,
    key: "competition",
  },
];

export function ActivitySection() {
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
    <section id="activity" className="py-20 bg-muted/50">
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
            {t("activity.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("activity.description")}
          </motion.p>
        </motion.div>

        {/* Activity Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.key}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative rounded-xl overflow-hidden hover-lift smooth-transition cursor-pointer"
            >
              <img
                src={activity.image}
                alt={activity.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">
                  {t(`activity.${activity.key}`)}
                </h3>
                <p className="text-sm">
                  {t(`activity.${activity.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Card className="hover-lift smooth-transition">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold college-red mb-6">
                {t("events.upcoming")}
              </h3>
              <div className="space-y-4">
                {events.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <motion.div
                      key={event.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-4 p-4 border-l-4 border-college-red bg-muted/50 rounded"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-college-red rounded-lg flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">
                          {t(`event.${event.key}`)}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {t(`event.${event.key}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
