import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import BestServiceInfo from "./Components/BestServiceInfo";
import BestServiceCard from "./Components/BestServiceCard";
import QuoteSection from "./Components/QuoteSection";
import TeamInfo from "./Components/TeamInfo";
import TeamCard from "./Components/TeamCard";
import About from "./Components/About";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestServiceInfo />
      <BestServiceCard />
      <QuoteSection/>
      <TeamInfo/>
      <TeamCard/>
      <About/>
    </div>
  );
}
