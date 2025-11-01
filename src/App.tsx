import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TeamMemberCards from "./components/Te4amMemberCards";
import SponsorsDisplay from "./components/SponsorsDisplay";
import EventTabs, { EventType, ActiveTab } from "./components/EventTabs";
import EventDialog from "./components/EventDialog";

type Language = "en" | "ro";

const translations = {
  en: {
    about: {
      title: "About Us",
      paragraphs: [
        "Welcome to InfoTech, your gateway to career growth and practical learning in the engineering world! Powered by OSUT Cluj (Organizația Studenților din Universitatea Tehnică), InfoTech is dedicated to empowering students at UTCN with the knowledge, skills, and connections needed to thrive in the IT industry.",
        "At InfoTech, we create a supportive and engaging environment for students, with hands-on activities, career-oriented training sessions, and events like ContestNight, InfoNight, and Open Days at top companies.",
        "Whether you're here to build technical skills, grow your network, or just explore what's possible, InfoTech is here to support you every step of the way. Join us and take the next step toward achieving your career aspirations!",
      ],
    },
    hero: {
      badge: "A new phase, a new opportunity",
      tagline: "Let's build your future together!",
    },
    events: {
      title: "Events",
      tabs: {
        infonight: "InfoNight",
        infoweek: "InfoWeek",
        trainings: "Trainings",
        contest: "ContestNight",
      },
    },
    team: {
      title: "Our Team",
    },
    sponsors: {
      title: "Sponsors",
    },
    navigation: {
      home: "Home",
      about: "About Us",
      events: "Events",
      team: "Our Team",
      sponsors: "Sponsors",
    },
    buttons: {
      language: "Română",
    },
  },
  ro: {
    about: {
      title: "Despre Noi",
      paragraphs: [
        "Bine ai venit la InfoTech, poarta ta către dezvoltare profesională și învățare practică în lumea ingineriei! Susținut de OSUT Cluj (Organizația Studenților din Universitatea Tehnică), InfoTech este dedicat sprijinirii studenților de la UTCN prin oferirea cunoștințelor, abilităților și conexiunilor necesare pentru a reuși în industria IT.",
        "La InfoTech, creăm un mediu de susținere și implicare pentru studenți, prin activități practice, sesiuni de formare orientate spre carieră și evenimente precum ContestNight, InfoNight și Open Days la companii de top.",
        "Fie că ești aici pentru a-ți dezvolta abilitățile tehnice, pentru a-ți extinde rețeaua de contacte sau doar pentru a explora noi posibilități, InfoTech este alături de tine la fiecare pas. Alătură-te nouă și fă următorul pas spre atingerea aspirațiilor tale profesionale!",
      ],
    },
    hero: {
      badge: "O nouă etapă, o nouă oportunitate",
      tagline: "Să construim viitorul împreună!",
    },
    events: {
      title: "Evenimente",
      tabs: {
        infonight: "InfoNight",
        infoweek: "InfoWeek",
        trainings: "Training-uri",
        contest: "ContestNight",
      },
    },
    team: {
      title: "Echipa Noastră",
    },
    sponsors: {
      title: "Sponsori",
    },
    navigation: {
      home: "Acasă",
      about: "Despre Noi",
      events: "Evenimente",
      team: "Echipa Noastră",
      sponsors: "Sponsori",
    },
    buttons: {
      language: "English",
    },
  },
};

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("infonight");
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ro" : "en");
  };

  const t = translations[language];

  const TabNames: Record<ActiveTab, string> = {
    infonight: t.events.tabs.infonight,
    infoweek: t.events.tabs.infoweek,
    trainings: t.events.tabs.trainings,
    contest: t.events.tabs.contest,
  };

  const handleEventSelect = (event: EventType) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const sections = [
    { id: "hero", label: t.navigation.home },
    { id: "about", label: t.navigation.about },
    { id: "events", label: t.navigation.events },
    { id: "team", label: t.navigation.team },
    { id: "sponsors", label: t.navigation.sponsors },
  ];

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

      {/* Sidebar */}
      <Sidebar sections={sections} language={language} />

      {/* Hero Section */}
      <Hero content={t.hero} />

      <div className="fixed top-4 right-4 z-[500] text-center">
        <Button
          onClick={toggleLanguage}
          variant="outline"
          className="mb-8 py-2 px-4 bg-purple-500/10 border-purple-500/50 text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-500/20"
        >
          {t.buttons.language}
        </Button>
      </div>

      <h2>ZAP</h2>
      <p>un paragreaf</p>
      <h2>da</h2>

      {/* About Section */}
      <About content={t.about} />

      {/* Events Section */}
      <section id="events" className="py-20 px-4 md:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
          {t.events.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              <EventTabs
                activeTab={activeTab}
                onEventSelect={handleEventSelect}
                language={language}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Team Section */}
      <TeamMemberCards title={t.team.title} />

      {/* Sponsors Section */}
      <SponsorsDisplay title={t.sponsors.title} />

      {/* Event Modal */}
      <EventDialog
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        event={selectedEvent}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
