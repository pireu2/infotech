import type React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { motion } from "framer-motion";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import TeamMemberCards from "./components/team-member-card";

interface EventType {
  id: number;
  title: string;
  date: string;
  location: string;
  trainer: string;
  image: string;
  description: string;
}

type ActiveTab =
  | "trainings"
  | "contest"
  | "infonight"
  | "opendays"
  | "infoweek";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("infonight");
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expandedContent, setExpandedContent] = useState<{
    infonight: boolean;
    infoweek: boolean;
  }>({ infonight: false, infoweek: false });
  const [isRomanian, setIsRomanian] = useState<boolean>(false);

  const TabNames: Record<ActiveTab, string> = {
    infonight: "InfoNight",
    infoweek: "InfoWeek",
    trainings: "Trainings",
    contest: "Contest Night",
    opendays: "OpenDays",
  };

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



  const sponsors: string[] = ["/assets/images/sponsori2024/arobs.png"];

  const content = {
    about: {
      en: {
        title: "About Us",
        paragraphs: [
          "Welcome to InfoTech, your gateway to career growth and practical learning in the engineering world! Powered by OSUT Cluj (Organizația Studenților din Universitatea Tehnică), InfoTech is dedicated to empowering students at UTCN with the knowledge, skills, and connections needed to thrive in the IT industry.",
          "At InfoTech, we create a supportive and engaging environment for students, with hands-on activities, career-oriented training sessions, and events like ContestNight, InfoNight, and Open Days at top companies. We host workshops led by industry professionals, offering guidance on essential skills like building resumes, acing interviews, and navigating career opportunities.",
          " Whether you're here to build technical skills, grow your network, or just explore what's possible, InfoTech is here to support you every step of the way. Join us and take the next step toward achieving your career aspirations!",
        ],
      },
      ro: {
        title: "Despre Noi",
        paragraphs: [
          "Bine ai venit la InfoTech, poarta ta către dezvoltare profesională și învățare practică în lumea ingineriei! Susținut de OSUT Cluj (Organizația Studenților din Universitatea Tehnică), InfoTech este dedicat sprijinirii studenților de la UTCN prin oferirea cunoștințelor, abilităților și conexiunilor necesare pentru a reuși în industria IT.",
          "La InfoTech, creăm un mediu de susținere și implicare pentru studenți, prin activități practice, sesiuni de formare orientate spre carieră și evenimente precum ContestNight, InfoNight și Open Days la companii de top. Organizăm workshopuri susținute de profesioniști din industrie, oferind îndrumare asupra unor abilități esențiale precum redactarea CV-ului, pregătirea pentru interviuri și explorarea oportunităților de carieră.",
          "Fie că ești aici pentru a-ți dezvolta abilitățile tehnice, pentru a-ți extinde rețeaua de contacte sau doar pentru a explora noi posibilități, InfoTech este alături de tine la fiecare pas. Alătură-te nouă și fă următorul pas spre atingerea aspirațiilor tale profesionale!",
        ],
      },
    },
  };

  const tabContent: Record<ActiveTab, React.JSX.Element> = {
    trainings: (
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <Card
            key={event.id}
            className="bg-gray-800/30 backdrop-blur-lg border border-gray-700 hover:border-purple-400 transition-all cursor-pointer"
            onClick={() => {
              setSelectedEvent(event);
              setIsModalOpen(true);
            }}
          >
            <CardHeader>
              <CardTitle className="text-purple-400">{event.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {event.date} | {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            />
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

        {!expandedContent.infonight ? (
          <Button
            variant="outline"
            className="mb-8 py-2 px-4 bg-purple-500/10 border-yellow-500/50 text-yellow-300 backdrop-blur-sm shadow-lg shadow-yellow-500/20"
            onClick={() =>
              setExpandedContent((prev) => ({ ...prev, infonight: true }))
            }
          >
            Read More
          </Button>
        ) : (
          <>
            <div className="space-y-4">
              <p>
                <strong>InfoNight</strong> is back for its third edition,
                offering you the opportunity to take the next step in your
                career journey! This event will take place on March 18th, from
                16:00 to 22:00 at HUB UTCN (George Barițiu Street, nr. 4-8).
              </p>

              <p>
                Whether you're just starting your university journey or
                preparing to enter the professional world, this is the perfect
                place to expand your network, gain valuable insights, and
                explore exciting career opportunities.
              </p>

              <p>
                At InfoNight, you'll have the chance to meet recruiters and
                experts from some of the most prestigious companies in various
                industries. It's more than just a chance to hand over your
                CV—it's an opportunity to learn firsthand from those who are
                actively shaping the job market.
              </p>

              <p>
                This is your chance to build connections with key industry
                leaders who can guide you toward the career path you've always
                dreamed of.
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
                  <strong>Unwind & win</strong> - Relax in our chill zone, and
                  you might be one of the lucky winners of exciting prizes!
                </li>
              </ul>

              <p>
                This is more than just an event; it's a platform for growth and
                exploration. Join us and discover the countless opportunities
                that await you. Whether you're eager to land your first
                internship, seeking full-time positions, or just looking to gain
                career advice, InfoNight has something for everyone.
              </p>

              <p className="font-bold">
                Don't miss the third edition of InfoNight on March 18th! Save
                the date, invite your friends, and get ready for an evening of
                inspiration, networking, and career development.
              </p>
            </div>

            <Button
              variant="outline"
              className="mb-8 py-2 px-4 bg-purple-500/10 border-yellow-500/50 text-yellow-300 backdrop-blur-sm shadow-lg shadow-yellow-500/20"
              onClick={() =>
                setExpandedContent((prev) => ({ ...prev, infonight: false }))
              }
            >
              Show Less
            </Button>
          </>
        )}
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

        {!expandedContent.infoweek ? (
          <Button
            variant="outline"
            className="mb-8 py-2 px-4 bg-purple-500/10 border-green-500/50 text-green-300 backdrop-blur-sm shadow-lg shadow-green-500/20"
            onClick={() =>
              setExpandedContent((prev) => ({ ...prev, infoweek: true }))
            }
          >
            Read More
          </Button>
        ) : (
          <>
            <div className="space-y-4">
              <p>
                Curious about what it's like to work in your field of interest?{" "}
                <strong>InfoWeek</strong>, powered by InfoTech, offers you the
                chance to step inside multiple top companies in and around eager
                to share their experiences.Cluj-Napoca between March 24-28. This
                is your opportunity to explore different workplaces, meet
                industry experts, and see firsthand what a future career could
                look like.
              </p>
              <p>
                Throughout the week, participating companies will open
                theirdoors to students, offering guided tours, insights into
                their work environment, and direct interactions with
                professionals eager to share their experiences.
              </p>
              <p>
                Whether you're looking for internships, job opportunities, or
                simply want to understand different career paths, InfoWeek is
                the perfect chance to expand your perspective.
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
                Take advantage of this chance to bridge the gap between
                university and the professional world. Stay tuned for more
                details and get ready to discover where your future could take
                you!
              </p>
            </div>

            <Button
              variant="outline"
              className="mb-8 py-2 px-4 bg-purple-500/10 border-green-500/50 text-green-300 backdrop-blur-sm shadow-lg shadow-green-500/20"
              onClick={() =>
                setExpandedContent((prev) => ({ ...prev, infoweek: false }))
              }
            >
              Show Less
            </Button>
          </>
        )}
      </div>
    ),
  };

  // Define sections for the sidebar
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "events", label: "Events" },
    { id: "team", label: "Our Team" },
    { id: "sponsors", label: "Sponsors" },
  ];

  return (
    <div className="min-h-screen bg-[#0c0d1d] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute bg-purple-600/30 blur-[100px]" />
      </div>

      {/* Sidebar */}
      <Sidebar sections={sections} />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="mb-8 py-2 px-4 bg-purple-500/10 border-purple-500/50 text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-500/20"
          >
            A new phase, a new opportunity
          </Badge>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.img
              src="src/assets/images/infotech.png"
              className="relative z-10 animate-float"
              alt="InfoTech Logo"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's build your future together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
          {isRomanian ? content.about.ro.title : content.about.en.title}
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg">
          {(isRomanian
            ? content.about.ro.paragraphs
            : content.about.en.paragraphs
          ).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="text-center pt-5">
          <Button
            onClick={() => setIsRomanian(!isRomanian)}
            variant="outline"
            className="mb-8 py-2 px-4 bg-purple-500/10 border-purple-500/50 text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-500/20"
          >
            {isRomanian ? "English" : "Română"}
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 md:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
          Events
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

        {tabContent[activeTab]}
      </section>

      {/* Team Section */}
      <TeamMemberCards />

      {/* Sponsors Section */}
      <section
        id="sponsors"
        className="py-20 px-4 md:px-8 overflow-hidden relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
          Sponsors
        </h2>
        <div className="flex animate-marquee whitespace-nowrap">
          {sponsors.map((src, i) => (
            <img
              key={i}
              src={src || "/placeholder.svg"}
              className="h-24 mx-8 opacity-80 hover:opacity-100 transition-opacity"
              alt="Sponsor"
            />
          ))}
        </div>
      </section>

      {/* Event Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900/90 backdrop-blur-xl border border-gray-700 max-w-2xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-purple-400">
                  {selectedEvent.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-gray-300">
                <p className="font-semibold">
                  {selectedEvent.date} | {selectedEvent.location}
                </p>
                <p>Trainer: {selectedEvent.trainer}</p>
                <p>{selectedEvent.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default HomePage;
