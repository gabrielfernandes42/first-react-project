import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingCard from "../components/PricingCard";
import "../components/PricingCard.css";


const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage title="PRICING" text="Choose your trip." />
      <div className="card-container">
        <PricingCard plan="Basic" bitcoin={1} days={1} />
        <PricingCard plan="Suite" bitcoin={2} days={2} />
        <PricingCard plan="Executive" bitcoin={5} days={10} />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
