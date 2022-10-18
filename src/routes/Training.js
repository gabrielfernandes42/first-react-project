import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import TrainingSection from "../components/TrainingSection";


const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage title="TRAINING" text="Pre-Flight & In-Flight Training"/>
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
