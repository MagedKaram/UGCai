import React from "react";
import SoftBackdrop from "./components/SoftBackdrop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <SoftBackdrop />
      <Navbar />
      <Home />
      <Services />
      <Pricing />
    </>
  );
};

export default App;
