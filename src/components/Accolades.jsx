import React from "react";
import accolades from "../data/accolades.js";

const Accolades = () => {
  console.log(accolades);
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>
        <div style={{ height: "100px", backgroundColor: "tran " }}></div>
        Accolades
      </div>
      <div style={styles.entries}>
        {accolades &&
          accolades.map((accolade) => (
            <div style={styles.entry} key={accolade.title}>
              <div
                style={{
                  width: "40%",
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

export default Accolades;

const styles = {
  section: {
    backgroundColor: "#302424",
    // display: "flex",
    // alignItems: "start",
  },
  sectionTitle: {
    // padding: "40px 30px",
    marginLeft: "100px",
    color: "#fff",
    fontSize: "84px",
    fontWeight: "lighter",
    position: "sticky",
    top: 0,
    left: 0,
    width: "20%",
    backgroundColor: "#302424",
  },
  entries: {
    marginLeft: "500px",
  },
  entry: {
    padding: "40px 30px",
    color: "#fff",
    fontSize: "24px",
    width: "70%",
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
