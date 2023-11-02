import React from "react";

const Bio = () => {
  return (
    <div style={styles.bio}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={styles.h1}> Daniel Pope</div>
          <img
            src="https://media.licdn.com/dms/image/D4E03AQFM-oPf4jIItw/profile-displayphoto-shrink_800_800/0/1676838037708?e=1704326400&v=beta&t=7Yq4UI6GLeGAi4DOnZntGMaahkVmMW-jqdYfJW1t_5w"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.p}>
          {" "}
          Daniel Pope is a writer and musician from Seattle. He has an M.F.A.
          from Rutgers-Newark. <br />
          He is currently pursuing a Ph.D. in English in England.
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
    fontSize: "1.3em",
    fontFamily: "sans-serif",
  },

  bio: {
    marginTop: "100px",
    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D5E47",
    padding: "5% 5%",
  },
  profileImage: {
    height: "15rem",
    borderRadius: "50%",
    marginLeft: "10%",
    margin: "5% 0",
    boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.75)",
  },
};
