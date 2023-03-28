import groupByContinent from "../groupByContinent";
import { useState, useEffect } from "react";

export default function usePositions() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("starting");

      const response = await fetch("/api/position");

      const data = await response.json();
      const grouped = groupByContinent(data);
      setPositions(grouped);
    }

    fetchData();
  }, []);

  return positions;
}
