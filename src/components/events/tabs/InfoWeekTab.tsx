import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "../../../hooks/useTranslation";

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

const InfoWeekTab: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { translations: t } = useTranslation();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
      <h2 className="text-3xl font-bold text-center text-green-400">
        {t.infoweek.title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: t.infoweek.summary }}
        className="text-justify"
      />

      <ExpandableContent
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
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
            {t.infoweek.expandableContent.benefits.items.map((item, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                className="text-justify"
              />
            ))}
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
  );
};

export default InfoWeekTab;
