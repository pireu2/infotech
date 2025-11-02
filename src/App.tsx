import type React from "react";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import LoadingPage from "./components/LoadingPage";
import { LanguageProvider } from "./contexts/LanguageContext";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls: string[] = [];

    const imageSources = [
      "/images/logo/infotech.png",
      "/images/logo/utalb.png",
      "/images/logo/osutalb.png",
      "/images/echipa/lexa.jpg",
      "/images/echipa/georgiana.jpg",
      "/images/echipa/luca.jpg",
      "/images/echipa/sebi.jpg",
      "/images/echipa/galis.jpg",
      "/images/echipa/giulia.jpg",
      "/images/echipa/diana.jpg",
      "/images/sponsors/bsides.svg",
      "/images/sponsors/msg.svg",
      "/images/sponsors/yardi.svg",
      "/images/sponsors/finshape.png",
      "/images/sponsors/irsap.png",
      "/images/sponsors/kesz.png",
      "/images/sponsors/mindit.png",
      "/images/sponsors/synopsys.png",
      "/images/sponsors/ulma.png",
      "/images/tranings/cv.png",
      "/images/tranings/finance.png",
      "/images/tranings/interview.png",
      "/images/tranings/startup.png",
      "/images/tranings/worklife.png",
      "/images/background.jpg",
    ];

    imageUrls.push(...imageSources);

    const loadImage = (url: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve(url);
        };
        img.onerror = () => {
          resolve(url);
        };
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage)).then(() => {
      setIsLoading(false);
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
