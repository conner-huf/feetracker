import { useMemo } from "react";

const useDateRangeFilter = (observations, startDate, endDate) => {
  const { filteredDates, filteredPrices } = useMemo(() => {
    if (!observations || observations.length === 0) {
      return { filteredDates: [], filteredPrices: [] };
    }

    const filteredData = observations.filter((obs) => {
      const date = new Date(obs.date);
      return date >= new Date(startDate) && date < new Date(endDate);
    });

    const filteredDates = filteredData.map((obs) => obs.date);
    const filteredPrices = filteredData.map((obs) => parseFloat(obs.value));

    return { filteredDates, filteredPrices };
  }, [observations, startDate, endDate]);

  return { filteredDates, filteredPrices };
};

export default useDateRangeFilter;