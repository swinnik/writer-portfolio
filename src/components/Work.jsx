import React from "react";
import workCollection from "../data/work.js";

const Work = () => {
  console.log(workCollection);
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>
        <div style={{ height: "100px", backgroundColor: "tran " }}></div>
        Work
      </div>
      <div style={styles.entries}>
        {workCollection &&
          workCollection.map((work) => (
            <div style={styles.entry} key={work.title}>
              <div style={styles.title}>{work.title}</div>
              <div style={styles.publication}>{work.publications}</div>
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
    backgroundColor: "#e03434",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: "84px",
    fontWeight: "lighter",
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: "#e03434",
  },
  entry: {
    padding: "40px 30px",
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
