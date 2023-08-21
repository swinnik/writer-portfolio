import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div>©2022 by Daniel Pope. Created by Sean Winnik</div>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",

    padding: "60px",
    backgroundColor: "black",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },
};
