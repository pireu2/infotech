import type React from "react";
import HomePage from "./components/HomePage";
import { LanguageProvider } from "./contexts/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
};

export default App;
