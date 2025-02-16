import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import IndustryCard from "../../components/IndustryCard";

const AllIndustry = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    try {
      const url = query ? `http://localhost:8080/api/industry/all?search=${query}` : `http://localhost:8080/api/industry/all`;
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
      <div className="flex align-center justify-center w-full gap-10">
        {data.map((item) => (
          <IndustryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
};

export default AllIndustry;
