import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

export interface EventType {
  id: number;
  title: string;
  date: string;
  location: string;
  trainer: string;
  image: string;
  description: string;
}

export type ActiveTab =
  | "trainings"
  | "contest"
  | "infonight"
  | "opendays"
  | "infoweek";

interface ExpandableContentProps {
  isExpanded: boolean;
  toggleExpand: () => void;
  children: React.ReactNode;
  accentColor: string;
  buttonText: {
    expand: string;
    collapse: string;
  };
}

const events: EventType[] = [
  {
    id: 1,
    title: "Financial Education",
    date: "4th of December",
    location: "OA5 - CFDP",
    trainer: "Olimpia Pop",
    image: "src/assets/images/trainings/finance.png",
    description:
      "Managing your finances effectively is a critical step toward achieving stability and reaching your long-term goals. In this training, Olimpia Pop will guide you through the essentials of personal finance, equipping you with practical tools to take control of your money. You'll learn how to create a realistic budget, manage your expenses wisely, and establish smart saving habits. Olimpia will also discuss strategies for setting financial goals, avoiding common financial pitfalls, and building a secure foundation for the future. This interactive session is designed to give you the knowledge and confidence to make informed financial decisions, whether you're managing your first paycheck or planning for bigger milestones. Take part and start your journey toward financial independence!",
  },
  {
    id: 2,
    title: "Work-Life Balance",
    date: "25 & 28 November",
    location:
      "The ground floor of the BT building (street George Barițiu nr. 4-8)",
    trainer: "Denisa Nita",
    image: "src/assets/images/trainings/worklife.png",
    description:
      "Balancing personal well-being with professional aspirations is essential for success and fulfillment. In this training, Denisa Nita, an experienced psychologist, will guide you through strategies to create a healthier work-life balance and navigate common challenges. You'll learn practical tools to manage your priorities, reduce stress, and improve productivity. Denisa will also explore the impostor syndrome—an experience many students face when transitioning into the workforce—and share effective ways to overcome self-doubt and build confidence. This interactive session is designed to equip you with the skills and mindset needed to balance your career and personal life, ensuring long-term well-being and success. Join us and take the first step toward a more balanced and fulfilling life!",
  },
  {
    id: 3,
    title: "How to Interview",
    date: "November 21st, 20:00",
    location: "OA5 - CFDP",
    trainer: "Cristina Gogozan",
    image: "src/assets/images/trainings/interview.png",
    description:
      "A successful job interview can make all the difference when it comes to securing your ideal position. In this workshop, Cristina Gogozan will help you master the art of the job interview. You'll learn how to effectively prepare for interviews, including researching the company, anticipating common questions, and developing thoughtful responses. Cristina will also share strategies for building rapport with interviewers, communicating your strengths confidently, and handling tricky or unexpected questions. This interactive session will give you the practical skills and confidence needed to make a positive impression and stand out in any interview setting.",
  },
  {
    id: 4,
    title: "How to Start a Startup",
    date: "November 7th, 18:00",
    location: "OA5 - CFDP",
    trainer: "Georgina Lupu (Gina)",
    image: "src/assets/images/trainings/startup.png",
    description:
      "Starting your own business can be both exciting and daunting. This workshop, led by Georgina Lupu, will take you through the fundamentals of launching a startup. You'll learn about identifying viable business ideas, developing a business plan, securing funding, and the key challenges faced by new entrepreneurs. Whether you're already working on a startup or just exploring the idea of entrepreneurship, this session will provide you with the tools and mindset needed to succeed.",
  },
  {
    id: 5,
    title: "How to CV",
    date: "October 30th, 18:00",
    location: "A3 - CFDP",
    trainer: "Mariana Irimia",
    image: "src/assets/images/trainings/cv.png",
    description:
      "A well-crafted CV is often your first point of contact with potential employers, making it a crucial part of your job application process. In this workshop, led by Mariana Irimia, you'll learn how to structure and present your CV to highlight your most important skills and experiences. The session will cover common mistakes to avoid, tips for tailoring your CV to different industries, and how to stand out in a competitive job market. Mariana's expertise will help ensure that your CV leaves a strong impression and effectively communicates your qualifications to employers.",
  },
];

const ExpandableContent: React.FC<ExpandableContentProps> = ({
  isExpanded,
  toggleExpand,
  children,
  accentColor,
  buttonText,
}) => {
  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="space-y-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        className={`group mb-8 py-2 px-4 bg-purple-500/10 border-${accentColor}-500/50 text-${accentColor}-300 backdrop-blur-sm shadow-lg shadow-${accentColor}-500/20 transition-all`}
        onClick={toggleExpand}
      >
        <span>{isExpanded ? buttonText.collapse : buttonText.expand}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block ml-2"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </motion.div>
      </Button>
    </>
  );
};

interface EventTabsProps {
  activeTab: ActiveTab;
  onEventSelect: (event: EventType) => void;
}

const EventTabs: React.FC<EventTabsProps> = ({
  activeTab,
  onEventSelect,
}) => {
  const [expandedContent, setExpandedContent] = useState<{
    infonight: boolean;
    infoweek: boolean;
  }>({ infonight: false, infoweek: false });

  const toggleExpand = (section: "infonight" | "infoweek") => {
    setExpandedContent((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const TabContent = {
    trainings: (
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <Card
            key={event.id}
            className="relative overflow-hidden bg-gray-900/40 backdrop-blur-xl border-0 rounded-xl transition-all duration-300 group cursor-pointer h-[420px]"
            onClick={() => onEventSelect(event)}
          >
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-purple-500/20 pointer-events-none z-20" />

            <div className="absolute inset-0 w-full h-full">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/50 to-gray-900/00" />
            </div>

            <div className="absolute top-4 right-4 z-30 bg-purple-900/80 backdrop-blur-md text-purple-100 text-xs font-medium px-3 py-1 rounded-full border border-purple-700/50 shadow-lg shadow-purple-900/20">
              {event.date}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 z-30">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-sm">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-200 font-medium text-sm mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>

                <div className="pt-2 border-t border-purple-500/20 flex items-center text-sm">
                  <span className="text-purple-300">Trainer:</span>
                  <span className="ml-2 text-gray-200 font-medium">
                    {event.trainer}
                  </span>
                </div>
              </div>
            </div>

          </Card>
        ))}
      </div>
    ),
    contest: (
      <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-purple-400">
          What to expect at ContestNight?
        </h2>

        <p>
          <b>ContestNight</b> is not just an event; it's an experience crafted
          to empower students to unlock new opportunities and take charge of
          their future. Taking place on October 22 at HUB UTCN (street George
          Barițiu nr. 4-8), from 6 PM to 10 PM, this first edition of
          ContestNight brings together students, professionals, and
          organizations in one dynamic space.
        </p>

        <p>
          Curious about how to boost your resume with real-world experience?
          Interested in testing your skills in national or international
          challenges? ContestNight has it all, with each stand showcasing
          different ways to develop yourself both personally and professionally.
          From cutting-edge engineering contests to chess games, you'll have the
          chance to talk directly to the people who can help you get involved,
          so you can find exactly what sparks your interest.
        </p>

        <p>
          But it's not all business—there's something for everyone! Enjoy live
          artistic performances, soak in the energetic atmosphere, and take a
          break in our cozy chill zone, perfect for mingling or simply relaxing
          between explorations. Whether you're into tech, the arts, sports, or
          something in between, you'll find something to ignite your interest.
        </p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-400">
            Why Should You Attend?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <b>Networking:</b> Meet like-minded peers and connect with
              representatives from leading student organizations and
              competitions.
            </li>
            <li>
              <b>Inspiration:</b> Get hands-on information about a wide range of
              student activities that can shape your future career.
            </li>
            <li>
              <b>Entertainment:</b> From artistic performances to a welcoming
              chill zone, ContestNight blends opportunity with fun in a way
              that'll make you want to stay until the last minute.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-center text-purple-400">
          Mark your calendars, tell your friends, and get ready to seize the
          endless opportunities that await at ContestNight. Join us, discover
          your next big adventure, and make your mark on campus and beyond!
        </h3>
      </div>
    ),
    opendays: (
      <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-400">
          What to expect at InfoTech OpenDays?
        </h2>

        <p>
          InfoTech OpenDays is an exciting event designed to connect students
          with industry leaders across IT, construction, and mechanical
          engineering. This event brings together students, professionals, and
          top companies for a day of discovery and growth.
        </p>

        <p>
          Are you interested in pursuing a career in construction, mechanical
          engineering, or IT? InfoTech OpenDays has something for everyone. Each
          stand offers detailed insights into specialized fields such as smart
          construction, sustainable building technologies, robotics, automation
          and more. You can engage in hands-on workshops, attend expert talks,
          and network with industry professionals who can help guide your career
          development.
        </p>

        <h3 className="text-xl font-bold text-center text-blue-400">
          Mark your calendars, invite your classmates, and join us at InfoTech
          OpenDays to explore a world of opportunities in IT, construction, and
          mechanical engineering!
        </h3>
      </div>
    ),
    infonight: (
      <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400">
          What to expect at InfoNight?
        </h2>

        <p>
          Looking to kick-start your career? <strong>InfoNight</strong> is your
          chance to connect with top companies, meet industry professionals, and
          build valuable relationships that can shape your future. Whether
          you're searching for internships, full-time roles, or expert career
          advice, this event puts you face-to-face with recruiters eager to meet
          talented students like you. Plus, you'll get the opportunity to have
          your CV reviewed by specialists and gain insights that give you a
          competitive edge. Don't miss out—stay tuned for more details!
        </p>

        <ExpandableContent
          isExpanded={expandedContent.infonight}
          toggleExpand={() => toggleExpand("infonight")}
          accentColor="yellow"
          buttonText={{
            expand: "Read More",
            collapse: "Show Less",
          }}
        >
          <div className="space-y-4">
            <p>
              <strong>InfoNight</strong> is back for its third edition, offering
              you the opportunity to take the next step in your career journey!
              This event will take place on March 18th, from 16:00 to 22:00 at
              HUB UTCN (George Barițiu Street, nr. 4-8).
            </p>

            <p>
              Whether you're just starting your university journey or preparing
              to enter the professional world, this is the perfect place to
              expand your network, gain valuable insights, and explore exciting
              career opportunities.
            </p>

            <p>
              At InfoNight, you'll have the chance to meet recruiters and
              experts from some of the most prestigious companies in various
              industries. It's more than just a chance to hand over your CV—it's
              an opportunity to learn firsthand from those who are actively
              shaping the job market.
            </p>

            <p>
              This is your chance to build connections with key industry leaders
              who can guide you toward the career path you've always dreamed of.
            </p>

            <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">
              What's in it for you?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Meet industry experts</strong> - Connect with
                representatives from top companies, explore job opportunities,
                and gain insights into your future career.
              </li>
              <li>
                <strong>Get expert CV feedback</strong> - Receive personalized
                advice from recruiting specialists to make your CV stand out.
              </li>
              <li>
                <strong>Expand your network</strong> - Build valuable
                connections with career mentors who can help you achieve your
                goals.
              </li>
              <li>
                <strong>Unwind & win</strong> - Relax in our chill zone, and you
                might be one of the lucky winners of exciting prizes!
              </li>
            </ul>

            <p>
              This is more than just an event; it's a platform for growth and
              exploration. Join us and discover the countless opportunities that
              await you. Whether you're eager to land your first internship,
              seeking full-time positions, or just looking to gain career
              advice, InfoNight has something for everyone.
            </p>

            <p className="font-bold">
              Don't miss the third edition of InfoNight on March 18th! Save the
              date, invite your friends, and get ready for an evening of
              inspiration, networking, and career development.
            </p>
          </div>
        </ExpandableContent>
      </div>
    ),
    infoweek: (
      <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-green-400">
          What to expect at InfoWeek?
        </h2>

        <p>
          Ever wondered what it's like inside top companies?{" "}
          <strong>InfoWeek</strong> (March 24-28) gives you a sneak-peek at some
          of the most exciting workplaces in and around Cluj-Napoca! Step behind
          the scenes, meet industry pros, and explore career paths in real-world
          settings. Whether you're looking for inspiration, internships, or
          future job opportunities, this is your chance to see where your skills
          and ambitions could take you. Don't just imagine your dream
          job—experience it!
        </p>

        <ExpandableContent
          isExpanded={expandedContent.infoweek}
          toggleExpand={() => toggleExpand("infoweek")}
          accentColor="green"
          buttonText={{
            expand: "Read More",
            collapse: "Show Less",
          }}
        >
          <div className="space-y-4">
            <p>
              Curious about what it's like to work in your field of interest?{" "}
              <strong>InfoWeek</strong>, powered by InfoTech, offers you the
              chance to step inside multiple top companies in and around eager
              to share their experiences.Cluj-Napoca between March 24-28. This
              is your opportunity to explore different workplaces, meet industry
              experts, and see firsthand what a future career could look like.
            </p>
            <p>
              Throughout the week, participating companies will open theirdoors
              to students, offering guided tours, insights into their work
              environment, and direct interactions with professionals eager to
              share their experiences.
            </p>
            <p>
              Whether you're looking for internships, job opportunities, or
              simply want to understand different career paths, InfoWeek is the
              perfect chance to expand your perspective.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mt-6 mb-4">
              Why join <strong>InfoWeek</strong>?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Company insights</strong> - Experience different work
                environments and learn about various industries.
              </li>
              <li>
                <strong>Career connections</strong> - Meet professionals and
                discover what skills and experiences employers value most.
              </li>
              <li>
                <strong>A full week of opportunities</strong> - With seven
                companies hosting open days, there's plenty to explore!
              </li>
            </ul>
            <p>
              Take advantage of this chance to bridge the gap between university
              and the professional world. Stay tuned for more details and get
              ready to discover where your future could take you!
            </p>
          </div>
        </ExpandableContent>
      </div>
    ),
  };

  return <>{TabContent[activeTab]}</>;
};

export default EventTabs;
