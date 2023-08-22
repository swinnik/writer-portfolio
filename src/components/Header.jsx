import React from "react";

const Header = () => {
  const handleNameClick = () => {
    const newLink = "https://www.linkedin.com/in/daniel-pope-88207b197/";
    window.open(newLink, "_blank");
  };
  const handleContactClick = () => {
    const gmailComposeLink =
      "https://mail.google.com/mail/?view=cm&to=Dapope.townsend@gmail.com&subject=Your%20Subject&body=Hi%20Daniel,";
    window.open(gmailComposeLink, "_blank");
  };

  const handleInstaClick = () => {
    const newLink = "https://www.instagram.com/panieldope/";
    window.open(newLink, "_blank");
  };

  return (
    <div style={styles.header}>
      <div style={styles.leftHeader}>
        <div onClick={handleNameClick} style={{ cursor: "pointer" }}>
          Daniel Pope | Writing
        </div>
      </div>
      <div style={styles.rightheader}>
        <div onClick={handleInstaClick} style={{ cursor: "pointer" }}>
          {" "}
          Insta{" "}
        </div>{" "}
        |{" "}
        <div onClick={handleContactClick} style={{ cursor: "pointer" }}>
          {" "}
          Contact{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;

const styles = {
  header: {
    position: "fixed",
    zIndex: 99,
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    backgroundColor: "black",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },
  leftHeader: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "3%",
  },
  rightheader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
    paddingRight: "3%",
  },
};
