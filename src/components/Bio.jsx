import React from "react";

const Bio = () => {
  return (
    <div style={styles.bio}>
      <div>
        <div style={styles.h1}> Daniel Pope</div>
        <div style={styles.p}>
          {" "}
          Daniel Pope is a writer and musician from Seattle. He has an M.F.A.
          from Rutgers-Newark. <br />
          He is currently pursuing a Ph.D. in English.
        </div>
      </div>
    </div>
  );
};

export default Bio;

const styles = {
  h1: {
    fontSize: "6em",
  },
  p: {
    fontSize: "1.5em",
    fontFamily: "sans-serif",
  },

  bio: {
    marginTop: "100px",
    color: "#fff",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
    backgroundColor: "#1D5E47",
    padding: "0px 10%",
  },
};
