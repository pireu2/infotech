import { Button } from "../ui/button";

interface DesktopNavProps {
  sections: { id: string; label: string }[];
  scrollToSection: (id: string) => void;
  toggleLanguage: () => void;
  translations: any;
}

export default function DesktopNav({
  sections,
  scrollToSection,
  toggleLanguage,
  translations: t,
}: DesktopNavProps) {
  return (
    <div className="hidden md:flex fixed top-0 left-0 right-0 z-[500] bg-[#0c0d1d]/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between w-full px-6 py-1">
        <div className="flex items-center space-x-8">
          <img
            src="/images/logo/infotech.png"
            alt="InfoTech Logo"
            className="h-16 w-auto drop-shadow-lg"
          />
        </div>
        <div className="flex space-x-6">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-transparent px-3 py-2 text-lg  hover:border-purple-500/20 transition-all duration-300"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-transparent px-3 py-2 text-lg   hover:border-purple-500/20 transition-all duration-300"
            onClick={() =>
              (window.location.href =
                "https://osutcluj.pixieset.com/?t=infotech")
            }
          >
            {t.navigation.gallery}
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className="py-3 px-6 bg-transparent border-purple-500/30 text-purple-300 backdrop-blur-md shadow-lg shadow-purple-500/20 text-lg hover:bg-purple-500/10 transition-all duration-300"
          >
            {t.buttons.language}
          </Button>
        </div>
      </div>
    </div>
  );
}
