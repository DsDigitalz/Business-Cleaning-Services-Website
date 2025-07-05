import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import BestServiceInfo from "./Components/BestServiceInfo";
import BestServiceCard from "./Components/BestServiceCard";
import QuoteSection from "./Components/QuoteSection";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestServiceInfo />
      <BestServiceCard />
      <QuoteSection/>
    </div>
  );
}
