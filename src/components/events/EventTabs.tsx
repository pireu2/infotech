import React from "react";
import { ActiveTab } from "../../types/ActiveTab";
import TrainingsTab from "./tabs/TrainingsTab";
import ContestTab from "./tabs/ContestTab";
import InfoNightTab from "./tabs/InfoNightTab";
import InfoWeekTab from "./tabs/InfoWeekTab";

interface EventTabsProps {
  activeTab: ActiveTab;
}

const EventTabs: React.FC<EventTabsProps> = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "trainings":
        return <TrainingsTab />;
      case "contest":
        return <ContestTab />;
      case "infonight":
        return <InfoNightTab />;
      case "infoweek":
        return <InfoWeekTab />;
      default:
        return null;
    }
  };

  return <>{renderTabContent()}</>;
};

export default EventTabs;
