import { useState } from "react";
import { Button } from "./ui/button";


export default function About() {
      const [isRomanian, setIsRomanian] = useState<boolean>(false);
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
      return (
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
    </section>);
}