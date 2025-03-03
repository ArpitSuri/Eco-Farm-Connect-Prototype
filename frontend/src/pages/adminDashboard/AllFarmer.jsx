import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import FarmerCard from "../../components/FarmerCard";


const AllFarmer = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    try {
      const url = query ? `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/farmer/all?search=${query}` : `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/farmer/all`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <div className="flex align-center justify-center w-full gap-10" >
        {data.map((item) => (
          <FarmerCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "20px",
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
};

export default AllFarmer;
