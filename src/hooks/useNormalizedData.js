import { useMemo } from "react";

const useNormalizedData = (dateLabels, priceData, ceiling = 10) => {
  const normalizedData = useMemo(() => {
    if (dateLabels.length <= ceiling) {
      return { normalizedDates: dateLabels, normalizedPrices: priceData };
    }

    const step = Math.floor((dateLabels.length - 1) / (ceiling - 1));
    const normalizedDates = [];
    const normalizedPrices = [];

    for (let i = 0; i < ceiling; i++) {
      const index = i * step;
      normalizedDates.push(dateLabels[index]);
      normalizedPrices.push(priceData[index]);
    }

    // Ensure the last data point is included
    normalizedDates[normalizedDates.length - 1] = dateLabels[dateLabels.length - 1];
    normalizedPrices[normalizedPrices.length - 1] = priceData[priceData.length - 1];

    return { normalizedDates, normalizedPrices };
  }, [dateLabels, priceData, ceiling]);

  return normalizedData;
};

export default useNormalizedData;