import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      <DesktopNav
        sections={sections}
        scrollToSection={scrollToSection}
        toggleLanguage={toggleLanguage}
        translations={t}
      />
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sections={sections}
        scrollToSection={scrollToSection}
        toggleLanguage={toggleLanguage}
        translations={t}
      />
    </>
  );
}
