import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { format$, _sum } from "../../assets/scripts/util";

import CATEGORIES from "../../assets/CATEGORIES.json";

export default function PieChartJS({ title, byCategory }) {
  const categories = CATEGORIES["categories"];

  // 1. convert object into array, changing the key to word categories
  const arr_1 = Object.entries(byCategory).map(([key, val]) => [
    categories[key],
    val,
  ]);

  // 2. sort the arr from highest amount to lowest
  const arr_2 = arr_1.sort((a, b) => b[1] - a[1]);

  // 3. destructure the top five from the rest
  const [a, b, c, d, e, ...rest] = arr_2;

  // 4. sum the (...rest)
  const restOfExpenses = _sum(Object.values(Object.fromEntries(rest)));

  // 5. set top 5 expenses to object
  const topFiveExpenses = Object.fromEntries([a, b, c, d, e]);

  const labels = [...Object.keys(topFiveExpenses), "other expenses"];

  const data = [...Object.values(topFiveExpenses), restOfExpenses];

  const chartDatasets = {
    labels: labels,
    datasets: [
      {
        label: "Expense",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    title: { display: true, text: title /* props */ },
    // tooltips: {
    //   callbacks: {
    //     label: function (tooltipItem, data) {
    //       var label = data.datasets[tooltipItem.datasetIndex].label || "";

    //       if (label) {
    //         label += ": ";
    //       }
    //       label += format$(tooltipItem.xLabel);
    //       return label;
    //     },
    //   },
    // },
  };

  return <Pie data={chartDatasets} options={chartOptions} />;
}

PieChartJS.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array,
};

PieChartJS.defaultProps = {
  title: "Year 9999 - Pie Chart By Category",
  labels: CATEGORIES["categories"],
  byCategory: {
    0: 0,
    1: 3928.76,
    2: 3816.98,
    3: 2428.11,
    4: 3933.12,
    5: 3837.23,
    6: 3805.54,
    7: 393.04,
    8: 2388.32,
    9: 0,
    10: 3124.42,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 4596.8,
    16: 2720.41,
    17: 1266.62,
    18: 0,
    19: 1183.88,
    20: 0,
    21: 1901.76,
    22: 0,
    23: 1354.67,
    24: 3773.16,
    25: 1668.22,
    26: 0,
    27: 1206.53,
  },
};
