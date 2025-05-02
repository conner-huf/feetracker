import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import useNormalizedData from "../hooks/useNormalizedData";
import useDateFilter from "../hooks/useDateFilter";
import PercentChangeModule from "./PercentChangeModule";

const ProductPriceChart = ({ productName, dateRange }) => {
  const [observations, setObservations] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = "https://unifiedbackendwebapp-hqerfscxedd0asfj.eastus-01.azurewebsites.net/economic/product/"
  // const BASE_URL = "http://localhost:8000/economic/product/" ;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${productName}`);
        setObservations(response.data?.price_observations?.observations || []);
      } catch (err) {
        setError("Failed to fetch product data. Please try again later.");
        console.error(err);
      }
    };

    fetchData();
  }, [productName]);
  
  const { filteredDates, filteredPrices } = useDateFilter(
    observations,
    dateRange.start,
    dateRange.end
  );
  const { normalizedDates, normalizedPrices } = useNormalizedData(filteredDates, filteredPrices, 10);

  if (error) {
    return <div className="error">{error}</div>;
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${productName}`,
      },
    },
  }

  const data = {
    labels: normalizedDates,
    datasets: [
      {
        label: "Price",
        data: normalizedPrices,
        borderColor: "rgb(21, 168, 168)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      }
    ]
  }

  return (
    <div className="chart-container">
      <Line options={options} data={data} />
      <PercentChangeModule priceData={filteredPrices} />
    </div>
  );
};

export default ProductPriceChart;