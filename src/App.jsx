import React from "react";
import SoftBackdrop from "./components/SoftBackdrop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Fqa from "./components/Fqa";
import CTA from "./components/CTA.Jsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <SoftBackdrop />
      <Navbar />
      <Home />
      <Services />
      <Pricing />
      <Fqa />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
