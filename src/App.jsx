import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import BestServiceInfo from "./Components/BestServiceInfo";
import BestServiceCard from "./Components/BestServiceCard";
import QuoteSection from "./Components/QuoteSection";
import TeamInfo from "./Components/TeamInfo";
import TeamCard from "./Components/TeamCard";
import About from "./Components/About";
import Pricing from "./Components/Pricing.Jsx";
import Testimonials from "./Components/Testimonials";
import BlogInfo from "./Components/BlogInfo";
import BlogCards from "./Components/BlogCards";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestServiceInfo />
      <BestServiceCard />
      <QuoteSection />
      <TeamInfo />
      <TeamCard />
      <About />
      <Pricing />
      <Testimonials/>
      <BlogInfo/>
      <BlogCards/>
      <Contact/>
      <Footer/>
    </div>
  );
}
