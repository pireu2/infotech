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

export type ActiveTab = "trainings" | "contest" | "infonight" | "infoweek";

export type Language = "en" | "ro";

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


const translations = {
  en: {
    trainings: {
      trainer: "Trainer:",
    },
    contest: {
      title: "What to expect at ContestNight?",
      paragraphs: [
        "<b>ContestNight</b> is not just an event; it's an experience crafted to empower students to unlock new opportunities and take charge of their future. Taking place on October 22 at HUB UTCN (street George Barițiu nr. 4-8), from 6 PM to 10 PM, this first edition of ContestNight brings together students, professionals, and organizations in one dynamic space.",
        "Curious about how to boost your resume with real-world experience? Interested in testing your skills in national or international challenges? ContestNight has it all, with each stand showcasing different ways to develop yourself both personally and professionally. From cutting-edge engineering contests to chess games, you'll have the chance to talk directly to the people who can help you get involved, so you can find exactly what sparks your interest.",
        "But it's not all business—there's something for everyone! Enjoy live artistic performances, soak in the energetic atmosphere, and take a break in our cozy chill zone, perfect for mingling or simply relaxing between explorations. Whether you're into tech, the arts, sports, or something in between, you'll find something to ignite your interest.",
      ],
      whyAttend: {
        title: "Why Should You Attend?",
        items: [
          "<b>Networking:</b> Meet like-minded peers and connect with representatives from leading student organizations and competitions.",
          "<b>Inspiration:</b> Get hands-on information about a wide range of student activities that can shape your future career.",
          "<b>Entertainment:</b> From artistic performances to a welcoming chill zone, ContestNight blends opportunity with fun in a way that'll make you want to stay until the last minute.",
        ],
      },
      conclusion:
        "Mark your calendars, tell your friends, and get ready to seize the endless opportunities that await at ContestNight. Join us, discover your next big adventure, and make your mark on campus and beyond!",
    },
    infonight: {
      title: "What to expect at InfoNight?",
      summary:
        "Looking to kick-start your career? <strong>InfoNight</strong> is your chance to connect with top companies, meet industry professionals, and build valuable relationships that can shape your future. Whether you're searching for internships, full-time roles, or expert career advice, this event puts you face-to-face with recruiters eager to meet talented students like you. Plus, you'll get the opportunity to have your CV reviewed by specialists and gain insights that give you a competitive edge. Don't miss out—stay tuned for more details!",
      expandableContent: {
        paragraphs: [
          "<strong>InfoNight</strong> is back for its third edition, offering you the opportunity to take the next step in your career journey! This event will take place on March 18th, from 16:00 to 22:00 at HUB UTCN (George Barițiu Street, nr. 4-8).",
          "Whether you're just starting your university journey or preparing to enter the professional world, this is the perfect place to expand your network, gain valuable insights, and explore exciting career opportunities.",
          "At InfoNight, you'll have the chance to meet recruiters and experts from some of the most prestigious companies in various industries. It's more than just a chance to hand over your CV—it's an opportunity to learn firsthand from those who are actively shaping the job market.",
          "This is your chance to build connections with key industry leaders who can guide you toward the career path you've always dreamed of.",
        ],
        benefits: {
          title: "What's in it for you?",
          items: [
            "<strong>Meet industry experts</strong> - Connect with representatives from top companies, explore job opportunities, and gain insights into your future career.",
            "<strong>Get expert CV feedback</strong> - Receive personalized advice from recruiting specialists to make your CV stand out.",
            "<strong>Expand your network</strong> - Build valuable connections with career mentors who can help you achieve your goals.",
            "<strong>Unwind & win</strong> - Relax in our chill zone, and you might be one of the lucky winners of exciting prizes!",
          ],
        },
        conclusion: [
          "This is more than just an event; it's a platform for growth and exploration. Join us and discover the countless opportunities that await you. Whether you're eager to land your first internship, seeking full-time positions, or just looking to gain career advice, InfoNight has something for everyone.",
          "Don't miss the third edition of InfoNight on March 18th! Save the date, invite your friends, and get ready for an evening of inspiration, networking, and career development.",
        ],
      },
      buttons: {
        readMore: "Read More",
        showLess: "Show Less",
      },
    },
    infoweek: {
      title: "What to expect at InfoWeek?",
      summary:
        "Ever wondered what it's like inside top companies? <strong>InfoWeek</strong> (March 24-28) gives you a sneak-peek at some of the most exciting workplaces in and around Cluj-Napoca! Step behind the scenes, meet industry pros, and explore career paths in real-world settings. Whether you're looking for inspiration, internships, or future job opportunities, this is your chance to see where your skills and ambitions could take you. Don't just imagine your dream job—experience it!",
      expandableContent: {
        paragraphs: [
          "Curious about what it's like to work in your field of interest? <strong>InfoWeek</strong>, powered by InfoTech, offers you the chance to step inside multiple top companies in and around Cluj-Napoca between March 24-28. This is your opportunity to explore different workplaces, meet industry experts, and see firsthand what a future career could look like.",
          "Throughout the week, participating companies will open their doors to students, offering guided tours, insights into their work environment, and direct interactions with professionals eager to share their experiences.",
          "Whether you're looking for internships, job opportunities, or simply want to understand different career paths, InfoWeek is the perfect chance to expand your perspective.",
        ],
        benefits: {
          title: "Why join <strong>InfoWeek</strong>?",
          items: [
            "<strong>Company insights</strong> - Experience different work environments and learn about various industries.",
            "<strong>Career connections</strong> - Meet professionals and discover what skills and experiences employers value most.",
            "<strong>A full week of opportunities</strong> - With seven companies hosting open days, there's plenty to explore!",
          ],
        },
        conclusion:
          "Take advantage of this chance to bridge the gap between university and the professional world. Stay tuned for more details and get ready to discover where your future could take you!",
      },
      buttons: {
        readMore: "Read More",
        showLess: "Show Less",
      },
    },
  },
  ro: {
    trainings: {
      trainer: "Trainer:",
    },
    contest: {
      title: "La ce să te aștepți la ContestNight?",
      paragraphs: [
        "<b>ContestNight</b> nu este doar un eveniment; este o experiență creată pentru a ajuta studenții să descopere noi oportunități și să-și ia viitorul în mâini. Având loc pe 22 octombrie la HUB UTCN (strada George Barițiu nr. 4-8), de la ora 18:00 până la 22:00, această primă ediție a ContestNight reunește studenți, profesioniști și organizații într-un spațiu dinamic.",
        "Curios cum să-ți îmbunătățești CV-ul cu experiență practică? Interesat să-ți testezi abilitățile în competiții naționale sau internaționale? ContestNight le are pe toate, fiecare stand prezentând diferite modalități de a te dezvolta atât personal, cât și profesional. De la concursuri de inginerie de ultimă generație până la partide de șah, vei avea șansa să discuți direct cu persoanele care te pot ajuta să te implici, astfel încât să poți găsi exact ceea ce te interesează.",
        "Dar nu e doar despre carieră - este ceva pentru toată lumea! Bucură-te de spectacole artistice live, absorbe atmosfera energică și fă o pauză în zona noastră confortabilă de relaxare, perfectă pentru socializare sau pur și simplu pentru a te relaxa între explorări. Fie că ești pasionat de tehnologie, arte, sport sau altceva, vei găsi ceva care să-ți aprindă interesul.",
      ],
      whyAttend: {
        title: "De ce să participi?",
        items: [
          "<b>Networking:</b> Întâlnește colegi cu interese similare și conectează-te cu reprezentanți ai organizațiilor studențești și competițiilor de top.",
          "<b>Inspirație:</b> Obține informații practice despre o gamă largă de activități studențești care îți pot modela viitoarea carieră.",
          "<b>Divertisment:</b> De la spectacole artistice până la o zonă primitoare de relaxare, ContestNight îmbină oportunitatea cu distracția într-un mod care te va face să vrei să rămâi până în ultimul minut.",
        ],
      },
      conclusion:
        "Marchează-ți calendarul, spune-le prietenilor tăi și pregătește-te să profiți de nenumăratele oportunități care te așteaptă la ContestNight. Alătură-te nouă, descoperă-ți următoarea mare aventură și lasă-ți amprenta atât în campus, cât și dincolo de el!",
    },
    infonight: {
      title: "La ce să te aștepți la InfoNight?",
      summary:
        "Cauți să-ți începi cariera? <strong>InfoNight</strong> este șansa ta de a te conecta cu companii de top, de a întâlni profesioniști din industrie și de a construi relații valoroase care îți pot modela viitorul. Fie că ești în căutarea unui stagiu, a unui post permanent sau ai nevoie de sfaturi de carieră de la experți, acest eveniment te pune față în față cu recrutorii dornici să întâlnească studenți talentați ca tine. În plus, vei avea oportunitatea să-ți revizuiești CV-ul de către specialiști și să obții informații care îți oferă un avantaj competitiv. Nu rata—rămâi conectat pentru mai multe detalii!",
      expandableContent: {
        paragraphs: [
          "<strong>InfoNight</strong> revine cu cea de-a treia ediție, oferindu-ți oportunitatea de a face următorul pas în călătoria ta profesională! Acest eveniment va avea loc pe 18 martie, între orele 16:00 și 22:00 la HUB UTCN (Strada George Barițiu, nr. 4-8).",
          "Fie că ești la începutul călătoriei tale universitare sau te pregătești să intri în lumea profesională, acesta este locul perfect pentru a-ți extinde rețeaua de contacte, a obține informații valoroase și a explora oportunități interesante de carieră.",
          "La InfoNight, vei avea șansa să întâlnești recrutori și experți de la unele dintre cele mai prestigioase companii din diverse industrii. Nu este doar o șansă de a-ți preda CV-ul—este o oportunitate de a învăța direct de la cei care modelează activ piața muncii.",
          "Aceasta este șansa ta de a construi conexiuni cu lideri cheie din industrie care te pot ghida spre cariera la care ai visat întotdeauna.",
        ],
        benefits: {
          title: "Ce beneficii ai?",
          items: [
            "<strong>Întâlnește experți din industrie</strong> - Conectează-te cu reprezentanți ai companiilor de top, explorează oportunități de angajare și obține informații despre viitoarea ta carieră.",
            "<strong>Primește feedback expert pentru CV</strong> - Primește sfaturi personalizate de la specialiști în recrutare pentru a face CV-ul tău să iasă în evidență.",
            "<strong>Extinde-ți rețeaua</strong> - Construiește conexiuni valoroase cu mentori de carieră care te pot ajuta să-ți atingi obiectivele.",
            "<strong>Relaxare și câștiguri</strong> - Relaxează-te în zona noastră chill și ai putea fi unul dintre norocoșii câștigători ai unor premii interesante!",
          ],
        },
        conclusion: [
          "Acesta nu este doar un eveniment; este o platformă pentru creștere și explorare. Alătură-te nouă și descoperă nenumăratele oportunități care te așteaptă. Fie că ești dornic să obții primul tău stagiu, cauți poziții permanente sau doar dorești să primești sfaturi de carieră, InfoNight are ceva pentru toată lumea.",
          "Nu rata a treia ediție InfoNight pe 18 martie! Salvează data, invită-ți prietenii și pregătește-te pentru o seară de inspirație, networking și dezvoltare profesională.",
        ],
      },
      buttons: {
        readMore: "Citește mai mult",
        showLess: "Arată mai puțin",
      },
    },
    infoweek: {
      title: "La ce să te aștepți la InfoWeek?",
      summary:
        "Te-ai întrebat vreodată cum este în interiorul companiilor de top? <strong>InfoWeek</strong> (24-28 martie) îți oferă o privire în unele dintre cele mai interesante locuri de muncă din Cluj-Napoca și împrejurimi! Pășește în culise, întâlnește profesioniști din industrie și explorează căi de carieră în medii reale. Fie că ești în căutare de inspirație, stagii sau oportunități viitoare de angajare, aceasta este șansa ta de a vedea unde te-ar putea duce abilitățile și ambițiile tale. Nu-ți imagina doar jobul de vis—experimentează-l!",
      expandableContent: {
        paragraphs: [
          "Curios cum este să lucrezi în domeniul tău de interes? <strong>InfoWeek</strong>, organizat de InfoTech, îți oferă șansa să pășești în interiorul mai multor companii de top din Cluj-Napoca și împrejurimi între 24-28 martie. Aceasta este oportunitatea ta de a explora diferite locuri de muncă, de a întâlni experți din industrie și de a vedea la prima mână cum ar putea arăta o viitoare carieră.",
          "Pe parcursul săptămânii, companiile participante își vor deschide ușile pentru studenți, oferind tururi ghidate, informații despre mediul lor de lucru și interacțiuni directe cu profesioniști dornici să-și împărtășească experiențele.",
          "Fie că ești în căutarea unui stagiu, a unei oportunități de angajare sau pur și simplu dorești să înțelegi diferite căi de carieră, InfoWeek este șansa perfectă de a-ți extinde perspectiva.",
        ],
        benefits: {
          title: "De ce să participi la <strong>InfoWeek</strong>?",
          items: [
            "<strong>Cunoașterea companiilor</strong> - Experimentează diferite medii de lucru și află despre diverse industrii.",
            "<strong>Conexiuni profesionale</strong> - Întâlnește profesioniști și descoperă ce abilități și experiențe sunt cele mai valoroase pentru angajatori.",
            "<strong>O săptămână întreagă de oportunități</strong> - Cu șapte companii care organizează zile deschise, ai o mulțime de lucruri de explorat!",
          ],
        },
        conclusion:
          "Profită de această șansă de a reduce distanța dintre universitate și lumea profesională. Rămâi conectat pentru mai multe detalii și pregătește-te să descoperi unde te-ar putea duce viitorul tău!",
      },
      buttons: {
        readMore: "Citește mai mult",
        showLess: "Arată mai puțin",
      },
    },
  },
};

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
  language: Language;
}

const EventTabs: React.FC<EventTabsProps> = ({
  activeTab,
  onEventSelect,
  language = "en",
}) => {
  const [expandedContent, setExpandedContent] = useState<{
    infonight: boolean;
    infoweek: boolean;
  }>({ infonight: false, infoweek: false });

  const t = translations[language];

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
                  <span className="text-purple-300">{t.trainings.trainer}</span>
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
          {t.contest.title}
        </h2>

        {t.contest.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className="text-justify"
          />
        ))}

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-400">
            {t.contest.whyAttend.title}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {t.contest.whyAttend.items.map((item, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                className="text-justify"
              />
            ))}
          </ul>
        </div>

        <h3 className="text-xl font-bold text-center text-purple-400">
          {t.contest.conclusion}
        </h3>
      </div>
    ),

    infonight: (
      <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400">
          {t.infonight.title}
        </h2>

        <p
          dangerouslySetInnerHTML={{ __html: t.infonight.summary }}
          className="text-justify"
        />

        <ExpandableContent
          isExpanded={expandedContent.infonight}
          toggleExpand={() => toggleExpand("infonight")}
          accentColor="yellow"
          buttonText={{
            expand: t.infonight.buttons.readMore,
            collapse: t.infonight.buttons.showLess,
          }}
        >
          <div className="space-y-4">
            {t.infonight.expandableContent.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  className="text-justify"
                />
              )
            )}

            <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">
              {t.infonight.expandableContent.benefits.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {t.infonight.expandableContent.benefits.items.map(
                (item, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                    className="text-justify"
                  />
                )
              )}
            </ul>

            {t.infonight.expandableContent.conclusion.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className={
                    index ===
                    t.infonight.expandableContent.conclusion.length - 1
                      ? "font-bold text-justify"
                      : "text-justify"
                  }
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              )
            )}
          </div>
        </ExpandableContent>
      </div>
    ),
    infoweek: (
      <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-green-400">
          {t.infoweek.title}
        </h2>

        <p
          dangerouslySetInnerHTML={{ __html: t.infoweek.summary }}
          className="text-justify"
        />

        <ExpandableContent
          isExpanded={expandedContent.infoweek}
          toggleExpand={() => toggleExpand("infoweek")}
          accentColor="green"
          buttonText={{
            expand: t.infoweek.buttons.readMore,
            collapse: t.infoweek.buttons.showLess,
          }}
        >
          <div className="space-y-4">
            {t.infoweek.expandableContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="text-justify"
              />
            ))}

            <h3
              className="text-xl font-semibold text-green-400 mt-6 mb-4"
              dangerouslySetInnerHTML={{
                __html: t.infoweek.expandableContent.benefits.title,
              }}
            />
            <ul className="list-disc pl-6 space-y-2">
              {t.infoweek.expandableContent.benefits.items.map(
                (item, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                    className="text-justify"
                  />
                )
              )}
            </ul>
            <p
              dangerouslySetInnerHTML={{
                __html: t.infoweek.expandableContent.conclusion,
              }}
              className="text-justify"
            />
          </div>
        </ExpandableContent>
      </div>
    ),
  };

  return <>{TabContent[activeTab]}</>;
};

export default EventTabs;