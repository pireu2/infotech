import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

interface SidebarProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export default function Sidebar({ sections, language }: SidebarProps & { language: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const galleryText = language === "ro" ? "Galerie" : "Gallery";

  return (
    <>
      <div className="fixed top-4 left-4 z-[500]">
        <Button
          variant="ghost"
          size="icon"
          className="bg-purple-900/50 backdrop-blur-md text-white hover:bg-purple-800/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed top-0 left-0 z-[400] h-full w-64 bg-[#0c0d1d]/90 backdrop-blur-lg border-r border-purple-800/30 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px]" />
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-indigo-600/15 rounded-full blur-[50px]" />
        </div>

        <div className="flex flex-col p-6 pt-20">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Infotech</h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-purple-900/30"
                onClick={() =>
                  (window.location.href =
                    "https://osutcluj.pixieset.com/?t=infotech")
                }
              >
                {galleryText}
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
