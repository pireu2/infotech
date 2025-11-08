import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TrainingsTab from "./tabs/TrainingsTab";
import ContestTab from "./tabs/ContestTab";
import InfoNightTab from "./tabs/InfoNightTab";
import InfoWeekTab from "./tabs/InfoWeekTab";
import { ActiveTab } from "../../types/ActiveTab";
import { useTranslation } from "../../hooks/useTranslation";

const Events: React.FC = () => {
  const { translations } = useTranslation();

  const TabNames: Record<ActiveTab, string> = {
    contest: translations.events.tabs.contest,
    infonight: translations.events.tabs.infonight,
    infoweek: translations.events.tabs.infoweek,
    trainings: translations.events.tabs.trainings,
  };

  return (
    <section id="events" className="py-10 px-4 md:px-8 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {translations.events.title}
      </h2>

      <Tabs defaultValue="contest" className="w-full">
        <TabsList className="grid mx-auto h-12 md:h-14 grid-cols-4 mb-8 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30">
          {Object.entries(TabNames).map(([key, label]) => {
            const tab = key as ActiveTab;
            return (
              <TabsTrigger
                key={tab}
                value={tab}
                className=" font-semibold py-2 md:text-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
              >
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="infonight" className="mt-0">
          <InfoNightTab />
        </TabsContent>

        <TabsContent value="infoweek" className="mt-0">
          <InfoWeekTab />
        </TabsContent>

        <TabsContent value="trainings" className="mt-0">
          <TrainingsTab />
        </TabsContent>

        <TabsContent value="contest" className="mt-0">
          <ContestTab />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Events;
