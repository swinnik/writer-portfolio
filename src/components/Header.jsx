import React from "react";

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.leftHeader}>
        <div>Daniel Pope | Writing</div>
      </div>
      <div> Insta </div>
    </div>
  );
};

export default Header;

const styles = {
  header: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 30px",
    backgroundColor: "black",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },
  leftHeader: {
    display: "flex",
    alignItems: "center",
  },
};
