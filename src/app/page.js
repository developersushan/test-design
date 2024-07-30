"use client"

import Banner from "./components/Banner";
import CheckWork from "./components/CheckWork";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Review from "./components/Review";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Services/>
      <CheckWork/>
      <Review/>
      <Pricing/>
      <Questions/>
      <Contact/>
    </div>
  );
}
