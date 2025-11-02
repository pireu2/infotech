import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { translations: t } = useTranslation();
  const { toggleLanguage } = useLanguage();

  const sections = [
    { id: "hero", label: t.navigation.home },
    { id: "about", label: t.navigation.about },
    { id: "events", label: t.navigation.events },
    { id: "team", label: t.navigation.team },
    { id: "sponsors", label: t.navigation.sponsors },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="fixed top-4 left-4 z-[500] text-center md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="mb-8 py-2 px-4 bg-transparent border-purple-500/30 text-purple-300 backdrop-blur-md shadow-lg shadow-purple-500/20 hover:bg-purple-500/10 transition-all duration-300"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Language Toggle Button */}
      <div className="fixed top-4 right-4 z-[500] text-center md:hidden">
        <Button
          onClick={toggleLanguage}
          variant="outline"
          className="py-2 px-4 bg-transparent border-purple-500/30 text-purple-300 backdrop-blur-md shadow-lg shadow-purple-500/20 hover:bg-purple-500/10 transition-all duration-300"
        >
          {t.buttons.language}
        </Button>
      </div>

      {/* Desktop Top Navigation Bar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-[500] bg-[#0c0d1d]/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between w-full px-6 py-1">
          <div className="flex items-center space-x-8">
            <img
              src="src/assets/images/infotech.png"
              alt="InfoTech Logo"
              className="h-16 w-auto drop-shadow-lg"
            />
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

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-[400] h-full w-64 bg-[#0c0d1d]/70 backdrop-blur-xl border-r border-white/5 shadow-2xl shadow-black/60 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col justify-between h-screen p-6 pt-20">
          <div className="mb-8">
            <img
              src="src/assets/images/infotech.png"
              alt="InfoTech Logo"
              className="h-12 w-auto drop-shadow-lg mb-4"
            />
            <div className="space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:border-purple-500/20 transition-all duration-300"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:text-white hover:border-purple-500/20 transition-all duration-300"
                onClick={() =>
                  (window.location.href =
                    "https://osutcluj.pixieset.com/?t=infotech")
                }
              >
                {t.navigation.gallery}
              </Button>
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-sm text-gray-500">
              <p>© 2025 InfoTech</p>
              <p>Powered by OSUT Cluj</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
