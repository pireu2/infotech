"use client";

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

export default function Sidebar({ sections }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Sidebar toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-purple-900/50 backdrop-blur-md text-white hover:bg-purple-800/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-[#0c0d1d]/90 backdrop-blur-lg border-r border-purple-800/30 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
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
                Gallery
              </Button>
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-sm text-gray-500">
              <p>© 2024 InfoTech</p>
              <p>Powered by OSUT Cluj</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
