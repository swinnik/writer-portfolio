import React, { useEffect, useState } from "react";
import workCollection from "../data/work.js";

const Work = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1740);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(workCollection);
  return (
    <div style={styles.section}>
      <div
        style={{
          ...styles.sectionTitle,
          backgroundColor: isMobile ? "#93827F" : "transparent",
        }}
      >
        <div style={{ height: "100px", backgroundColor: "tran " }}></div>
        Work
      </div>
      <div style={styles.entries}>
        {workCollection &&
          workCollection.map((work) => (
            <div style={styles.entry} key={work.title}>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <div style={styles.title}>{work.title}</div>
              </a>
              <div style={styles.publication}>{work.publication}</div>
              <div style={styles.date}>{work.date}</div>
              <div style={styles.content}>{work.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Work;

const styles = {
  section: {
    backgroundColor: "#93827F",
    // width: "100%",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: "5em",
    fontWeight: "lighter",
    position: "sticky",
    top: 0,
    left: 0,
    paddingLeft: "1%",
  },
  entries: {
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
