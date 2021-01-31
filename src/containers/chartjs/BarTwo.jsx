import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { format$ } from "../../assets/scripts/util";

export default function BarTwoChartJS({
  title,
  labels,
  forExpenses,
  forIncome,
  expensesByMonth,
  incomeByMonth,
}) {
  const dataOnExpenses = forExpenses && {
    label: "Expenses",
    data: Object.values(expensesByMonth),
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1,
  };

  const dataOnIncome = forIncome && {
    label: "Income",
    data: Object.values(incomeByMonth),
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1,
  };

  const chartDatasets = {
    labels: labels,
    datasets: [dataOnExpenses],
  };

  const chartOptions = {
    title: { display: true, text: title /* props */ },
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

BarTwoChartJS.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array,
  expensesByMonth: PropTypes.object.isRequired,
  incomeByMonth: PropTypes.object.isRequired,
};

BarTwoChartJS.defaultProps = {
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
  incomeByMonth: { 0: 0, 1: 0 },
};
