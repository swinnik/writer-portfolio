import React, { Component } from "react";
import Header from "./Header.jsx";
import Bio from "./Bio.jsx";
import Work from "./Work.jsx";
import Accolades from "./Accolades.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <Bio />
      <Work />
      <Accolades />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;

const styles = {
  app: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: 0,
    margin: 0,
  },
};
