import React, { useEffect, useState } from "react";
import accolades from "../data/accolades.js";

const Accolades = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.section}>
      <div
        style={{
          ...styles.sectionTitle,
          backgroundColor: isMobile ? "#302424" : "transparent",
        }}
      >
        <div style={{ height: "100px", backgroundColor: "tran " }}></div>
        Accolades
      </div>
      <div style={styles.entries}>
        {accolades &&
          accolades.map((accolade) => (
            <div style={styles.entry} key={accolade.title}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={styles.title}>{accolade.title}</div>
                <div style={styles.date}>{accolade.year}</div>
              </div>
              <div style={styles.publication}>{accolade.recognition}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#302424",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: "4em",
    fontWeight: "lighter",
    position: "sticky",
    top: 0,
    left: 0,
    paddingLeft: "1%",
  },
  entries: {
    fontSize: "3em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  entry: {
    // border: "1px solid #fff",
    padding: "2% 0px",
    width: "60%",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  publication: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  date: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  content: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Accolades;
