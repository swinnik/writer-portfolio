import React, { useState } from "react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    const gmailComposeLink =
      "https://mail.google.com/mail/?view=cm&to=Dapope.townsend@gmail.com&subject=Your%20Subject&body=Hi%20Daniel,";

    // Open a new window or tab with the Gmail compose link
    window.open(gmailComposeLink, "_blank");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const sectionTitleStyle = {
    padding: "40px 30px",
    color: isHovered ? "black" : "#fff",
    fontSize: "84px",
    fontWeight: "lighter",
    cursor: "pointer",
  };

  const section = {
    backgroundColor: "#e03434",
    padding: "40px 80px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    textDecoration: "underline",
    color: isHovered ? "black" : "#fff",
  };

  return (
    <div
      style={section}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={sectionTitleStyle} onClick={handleContactClick}>
        Contact
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#e03434",
    padding: "40px 80px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    textDecoration: "underline",
    color: "#fff",
  },
};

export default Contact;
