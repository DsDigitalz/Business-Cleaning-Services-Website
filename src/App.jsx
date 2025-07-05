import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import BestServiceInfo from "./Components/BestServiceInfo";
import BestServiceCard from "./Components/BestServiceCard";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestServiceInfo />
      <BestServiceCard />
    </div>
  );
}
