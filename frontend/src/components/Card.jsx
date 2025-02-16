import React from "react";

const Card = ({ item }) => {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    width: "200px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};

export default Card;
