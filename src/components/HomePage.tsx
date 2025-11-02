import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamMemberCards from "../components/TeamMemberCards";
import SponsorsDisplay from "../components/SponsorsDisplay";
import EventTabs from "../components/events/EventTabs";
import { ActiveTab } from "../types/ActiveTab";
import { useTranslation } from "../hooks/useTranslation";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("infonight");

  const { translations } = useTranslation();

  const TabNames: Record<ActiveTab, string> = {
    infonight: translations.events.tabs.infonight,
    infoweek: translations.events.tabs.infoweek,
    trainings: translations.events.tabs.trainings,
    contest: translations.events.tabs.contest,
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050314] overscroll-none">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-50 backdrop-blur-xl">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/60 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-purple-700/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-indigo-600/50 rounded-full blur-[130px]" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-yellow-600/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/2 right-1/2 w-[300px] h-[300px] bg-green-600/50 rounded-full blur-[90px]" />

        <div className="absolute top-3/4 right-1/2 w-[350px] h-[350px] bg-fuchsia-600/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-violet-600/45 rounded-full blur-[90px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-pink-600/30 rounded-full blur-[110px]" />
        <div className="absolute bottom-1/2 left-1/2 w-[200px] h-[200px] bg-rose-600/35 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-magenta-600/40 rounded-full blur-[90px]" />

        <div className="absolute top-1/6 right-1/6 w-[200px] h-[200px] bg-cyan-600/25 rounded-full blur-[80px]" />
        <div className="absolute top-1/6 left-1/6 w-[220px] h-[220px] bg-teal-600/20 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/6 left-1/6 w-[220px] h-[220px] bg-teal-600/20 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/6 left-1/6 w-[220px] h-[220px] bg-teal-600/20 rounded-full blur-[90px]" />
        <div className="absolute top-2/3 right-1/3 w-[180px] h-[180px] bg-blue-500/20 rounded-full blur-[70px]" />
        <div className="absolute bottom-1/3 right-2/3 w-[240px] h-[240px] bg-purple-800/25 rounded-full blur-[95px]" />
      </div>

      <Navbar />

      <Hero />

      <About />

      <section id="events" className="py-10 px-4 md:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
          {translations.events.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(TabNames).map(([key, label]) => {
            const tab = key as ActiveTab;
            return (
              <Button
                key={tab}
                variant={activeTab === tab ? "outline" : "outline"}
                className={`mb-8 py-2 px-4  border-purple-500/50  backdrop-blur-sm shadow-lg shadow-purple-500/20 ${
                  activeTab === tab
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {label}
              </Button>
            );
          })}
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
              className="w-full"
              style={{ width: "100%" }}
            >
              <EventTabs activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <TeamMemberCards />

      <SponsorsDisplay />

      <Footer />
    </div>
  );
};

export default HomePage;
