import { useMemo } from "react";

const useNormalizedData = (dateLabels, priceData) => {
  const normalizedData = useMemo(() => {
    if (!dateLabels || !priceData || dateLabels.length === 0 || priceData.length === 0) {
      return { normalizedDates: [], normalizedPrices: [] };
    }

    const monthlyData = {};

    // Group data points by month and calculate the sum and count for each month
    dateLabels.forEach((date, index) => {
      const monthKey = new Date(date).toISOString().slice(0, 7); // Format: YYYY-MM
      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = { sum: 0, count: 0 };
      }
      monthlyData[monthKey].sum += priceData[index];
      monthlyData[monthKey].count += 1;
    });

    // Calculate average price for each month
    const normalizedDates = [];
    const normalizedPrices = [];
    Object.keys(monthlyData).forEach((monthKey) => {
      normalizedDates.push(monthKey);
      const averagePrice = monthlyData[monthKey].sum / monthlyData[monthKey].count;
      normalizedPrices.push(averagePrice);
    });

    return { normalizedDates, normalizedPrices };
  }, [dateLabels, priceData]);

  return normalizedData;
};

export default useNormalizedData;