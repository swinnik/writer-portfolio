import React from "react";
import accolades from "../data/accolades.js";

const Accolades = () => {
  console.log(accolades);
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>Accolades</div>
      <div style={styles.entries}>
        {accolades &&
          accolades.map((accolade) => (
            <div style={styles.entry}>
              <div style={styles.title}>{accolade.title}</div>
              <div style={styles.publication}>{accolade.recognition}</div>
              <div style={styles.date}>{accolade.year}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accolades;

const styles = {
  section: {
    backgroundColor: "#e03434",
    padding: "40px 80px",
    display: "flex",
    alignItems: "start",
  },
  sectionTitle: {
    padding: "40px 30px",
    color: "#fff",
    fontSize: "84px",
    fontWeight: "lighter",
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
