import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { format$ } from "../../assets/scripts/util";

export default function BarOneChartJS({ title, labels, data }) {
  const chartDatasets = {
    labels: labels,
    datasets: [
      {
        label: "Expenses",
        data: Object.values(data),
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
      },
    ],
  };

  const chartOptions = {
    title: { display: true, text: title /* props */ },
    legend: { display: false },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }
          label += format$(tooltipItem.yLabel);
          return label;
        },
      },
    },
  };

  return <Bar data={chartDatasets} options={chartOptions} />;
}

BarOneChartJS.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array,
  data: PropTypes.object.isRequired,
};

BarOneChartJS.defaultProps = {
  title: "Year 9999 - Bar Chart By Months",
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};
