import React from "react";

const PercentChangeModule = ({ priceData }) => {
  if (priceData.length < 2) {
    return <div className="percent-change-module">No data</div>;
  }

  const filteredPriceData = priceData.filter((value, index) => value !== null || index > 0);

  const firstPrice = parseFloat(filteredPriceData[1]);
  const lastPrice = filteredPriceData[priceData.length - 1];
  const percentChange = ((lastPrice - firstPrice) / firstPrice) * 100;

  return (
    <div className="percent-change-module">
      <p>
        <strong style={{ color: percentChange >= 0 ? "green" : "red" }}>
          {percentChange.toFixed(2)}%
        </strong>
      </p>
    </div>
  );
};

export default PercentChangeModule;