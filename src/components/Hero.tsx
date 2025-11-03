import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

export default function Hero() {
  const { translations: t } = useTranslation();

  const nextEventDate = new Date("2025-11-27T16:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = nextEventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextEventDate]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 md:pt-24"
    >
      <div className="relative max-w-6xl w-full px-2">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 font-display">
          {t.hero.title}
        </h1>
        <p className=" md:text-xl  text-gray-200 max-w-4xl mx-auto">
          {t.hero.tagline}
        </p>
        <Badge
          variant="outline"
          className="mt-2 py-2 mb-4 px-3 bg-purple-500/20 border-purple-500/50 text-purple-200  shadow-lg shadow-purple-500/20"
        >
          {t.hero.badge}
        </Badge>
        <div className="relative w-full h-[550px] md:h-[700px] rounded-3xl overflow-hidden border-1 border-white/20 ">
          <img
            src="/images/background.jpg"
            alt={t.hero.imageAlt}
            className="w-full h-full object-cover "
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.6)_0%,transparent_50%),radial-gradient(circle_at_100%_0%,rgba(0,0,0,0.6)_0%,transparent_50%),radial-gradient(circle_at_0%_100%,rgba(0,0,0,0.6)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.6)_0%,transparent_50%)]"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            ></motion.div>
          </div>

          <div className="absolute md:top-6 md:left-6 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-white text-left text-sm">
                {t.hero.cards.careerReady.line1}
              </div>
              <div className="text-white text-left text-sm">
                {t.hero.cards.careerReady.line2}
              </div>
              <div className="text-white text-left text-sm">
                {t.hero.cards.careerReady.line3}
              </div>
            </div>
          </div>

          <div className="absolute md:top-6 md:right-6 top-2 right-2 ">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[200px]">
              <div className="text-white text-sm font-semibold mb-2">
                {t.hero.cards.nextEvent.title}
              </div>
              <div className="text-lg font-semibold text-purple-200 mb-1 font-display">
                {t.hero.cards.nextEvent.eventName}
              </div>
              <div className="text-white text-xs mb-3">
                {t.hero.cards.nextEvent.date}
              </div>

              <div className="grid grid-cols-4 gap-1 text-center">
                <div className="bg-white/20 rounded p-1">
                  <div className="text-xs font-bold text-white">
                    {timeLeft.days}
                  </div>
                  <div className="text-[8px] text-gray-300">
                    {t.hero.cards.nextEvent.countdown.days}
                  </div>
                </div>
                <div className="bg-white/20 rounded p-1">
                  <div className="text-xs font-bold text-white">
                    {timeLeft.hours}
                  </div>
                  <div className="text-[8px] text-gray-300">
                    {t.hero.cards.nextEvent.countdown.hours}
                  </div>
                </div>
                <div className="bg-white/20 rounded p-1">
                  <div className="text-xs font-bold text-white">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-[8px] text-gray-300">
                    {t.hero.cards.nextEvent.countdown.minutes}
                  </div>
                </div>
                <div className="bg-white/20 rounded p-1">
                  <div className="text-xs font-bold text-white">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-[8px] text-gray-300">
                    {t.hero.cards.nextEvent.countdown.seconds}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute md:bottom-6 md:left-6 bottom-2 left-2">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-white text-xs mb-2">
                {t.hero.cards.activeMembers.title}
              </div>
              <div className="text-lg font-bold text-white">
                {t.hero.cards.activeMembers.count}
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-40 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white">
                {t.hero.cards.projectsCompleted.count}
              </div>
              <div className="text-white text-xs">
                {t.hero.cards.projectsCompleted.title}
              </div>
              <div className="text-white text-xs">
                {t.hero.cards.projectsCompleted.subtitle}
              </div>
            </div>
          </div>

          <div className="absolute md:bottom-6 md:right-6 bottom-2 right-2">
            <Button
              variant="outline"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-5 px-4 md:text-lg bg-transparent font-display  border-purple-500/30 text-purple-300 backdrop-blur-md shadow-lg shadow-purple-500/20 hover:bg-purple-500/10 transition-all duration-300"
            >
              {t.hero.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
