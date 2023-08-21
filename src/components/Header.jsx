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
        <div onClick={handleNameClick}>Daniel Pope | Writing</div>
      </div>
      <div style={styles.rightheader}>
        <div onClick={handleInstaClick}> Insta </div> |{" "}
        <div onClick={handleContactClick}> Contact </div>
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
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "40px 30px",
    height: "100px ",
    backgroundColor: "black",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
    padding: "0 100px",
  },
  leftHeader: {
    display: "flex",
    alignItems: "center",
  },
  rightheader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "200px",
  },
};
