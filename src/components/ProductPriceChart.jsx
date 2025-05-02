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

const ProductPriceChart = ({ productName }) => {
  const [priceData, setPriceData] = useState([]);
  const [dateLabels, setDateLabels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/economic/product/${productName}`);
        const observations = response.data?.price_observations?.observations || [];

        // Filter observations between 1/1/2024 and 1/1/2025
        const filteredData = observations.filter((obs) => {
          const date = new Date(obs.date);
          return date >= new Date("2020-01-01") && date < new Date("2025-01-01");
        });

        const dates = filteredData.map((obs) => obs.date);
        const prices = filteredData.map((obs) => parseFloat(obs.value));

        setDateLabels(dates);
        setPriceData(prices);
      } catch (err) {
        setError("Failed to fetch product data. Please try again later.");
        console.error(err);
      }
    };

    fetchData();
  }, [productName]);

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
    labels: dateLabels,
    datasets: [
      {
        label: "Price",
        data: priceData,
        borderColor: "rgb(21, 168, 168)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      }
    ]
  }

  return (
    <div className="chart-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default ProductPriceChart;