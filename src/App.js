import React, { Fragment } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landing-page/LandingPage";
import Cards from "./components/cards/Cards";
import InfoBox from "./components/info-box/InfoBox";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <LandingPage />
      <Cards />
      <InfoBox />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
