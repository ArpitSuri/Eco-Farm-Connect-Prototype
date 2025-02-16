import React, { useState, useEffect } from "react";
import axios from "axios";
import WasteCard from "../../components/WasteCrd";

const WasteSearch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only once on component mount

  useEffect(() => {
    if (query !== "") {
      fetchData();
    }
  }, [query]);

  const fetchData = async () => {
    try {
      const url = query 
        ? `http://localhost:8080/api/waste/all?search=${query}` 
        : `http://localhost:8080/api/waste/all`;
      const response = await axios.get(url);
      console.log("API Response:", response.data); // Debugging log
      setData(response.data.data || response.data); // Ensure correct data extraction
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
      <div className="ml-10 flex align-center justify-around  w-[90%] gap-10">
        {data.length > 0 ? (
          data.map((item) => <WasteCard key={item._id} item={item} />)
        ) : (
          <p>No waste data found.</p>
        )}
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
};

export default WasteSearch;
