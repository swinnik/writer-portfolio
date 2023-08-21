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

  const section = {
    backgroundColor: "#1f411e",
    padding: "200px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    textDecoration: "underline",
    color: isHovered ? "black" : "#fff",
  };

  const sectionTitleStyle = {
    // padding: "40px 30px",
    color: isHovered ? "black" : "#fff",
    fontSize: "84px",
    fontWeight: "lighter",
    cursor: "pointer",
  };

  return (
    <div style={section}>
      <div
        style={sectionTitleStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleContactClick}
      >
        Contact
      </div>
    </div>
  );
};

export default Contact;
