import type React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "./navigation/Navbar";
import TeamMemberCards from "../components/TeamMemberCards";
import Sponsors from "./Sponsors";
import Events from "../components/events/Events";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0c091e] overscroll-none">
      <Navbar />

      <Hero />

      <About />

      <Events />

      <TeamMemberCards />

      <Sponsors />

      <Footer />
    </div>
  );
};

export default HomePage;
