// src/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart"; // Import your chart component
import "./Dashboard.css"; // Import CSS for styling

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredData = data.filter((item) => {
    return (
      (!filters.endYear || item.end_year === filters.endYear) &&
      (!filters.topic || item.topic === filters.topic) &&
      (!filters.sector || item.sector === filters.sector) &&
      (!filters.region || item.region === filters.region) &&
      (!filters.pest || item.pestle === filters.pest) &&
      (!filters.source || item.source === filters.source) &&
      (!filters.swot || item.swot === filters.swot) &&
      (!filters.country || item.country === filters.country) &&
      (!filters.city || item.city === filters.city)
    );
  });

  return (
    <div className="dashboard">
      <h1>Data Visualization Dashboard</h1>
      <div className="filters">
        <input
          type="text"
          name="endYear"
          placeholder="End Year"
          value={filters.endYear}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="topic"
          placeholder="Topic"
          value={filters.topic}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="sector"
          placeholder="Sector"
          value={filters.sector}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={filters.region}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="pest"
          placeholder="PEST"
          value={filters.pest}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="source"
          placeholder="Source"
          value={filters.source}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="swot"
          placeholder="SWOT"
          value={filters.swot}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={filters.country}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          onChange={handleFilterChange}
        />
      </div>
      <Chart data={filteredData} />{" "}
      {/* Pass the filtered data to your chart component */}
    </div>
  );
};

export default Dashboard;
