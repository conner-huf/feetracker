import React from "react";

const CurrentPriceModule = ({ priceData }) => {
  if (priceData.length === 0) {
    return <div className="module">No data available</div>;
  }

  const latestPrice = priceData[priceData.length - 1]; // Get the latest price

  return (
    <div className="module">
      <p>
        <strong style={{ color: "black" }}>${latestPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default CurrentPriceModule;