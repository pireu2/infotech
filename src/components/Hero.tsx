import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

export default function Hero() {
  const { translations: t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-10 ml-3 mr-3 pt-20 md:pt-24"
    >
      <div className="max-w-4xl relative">
        <div className="absolute inset-0 -m-10 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl shadow-purple-500/10 z-0"></div>

        <div className="absolute inset-0 -m-10 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-400/5 z-0"></div>

        <div className="relative z-10 py-16 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.img
              src="src/assets/images/infotech.png"
              className="relative z-10 animate-float mx-auto"
              alt="InfoTech Logo"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <Badge
              variant="outline"
              className="mb-8 py-2 px-4 bg-purple-500/10 border-purple-500/50 text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-500/20"
            >
              {t.hero.badge}
            </Badge>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.hero.tagline}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
