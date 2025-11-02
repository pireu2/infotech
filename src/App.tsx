import type React from "react";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import LoadingPage from "./components/LoadingPage";
import { LanguageProvider } from "./contexts/LanguageContext";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const criticalImages = [
      "/images/background.jpg",
      "/images/logo/infotech.png",
    ];

    const loadImage = (url: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => resolve(url);
        img.src = url;
      });
    };

    Promise.all(criticalImages.map(loadImage)).then(() => {
      setTimeout(() => setIsLoading(false), 300);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
};

export default App;
