import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import COLORS from "../../assets/COLORS.json"
import { format$ } from "../../assets/scripts/util";

export default function LineOneChartJS(props) {
  
  const colors = COLORS[0]

  const chartDatasets = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: props.label,
        data: Object.values(props.data),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: props.fillLine,
      },
    ],
  };

  const chartAxesOptions = {
    scales: {
      yAxes: [{ display: false }],
      xAxes: [{ display: false }],
    },
  };

  const chartOptions = {
    title: { display: !props.chartHideTitle, text: props.title },
    ...chartAxesOptions,
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

  return <Line data={chartDatasets} options={chartOptions} />;
}

LineOneChartJS.propTypes = {
  title: PropTypes.string,
  chartHideTitle: PropTypes.bool,
  labels: PropTypes.array,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  fillLine: PropTypes.bool,
  variant: PropTypes.string,
  hideAxes: PropTypes.bool,
};

LineOneChartJS.defaultProps = {
  title: "Year 9999 - Bar Chart By Months",
  chartHideTitle: true,
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
  fillLine: false,
  variant: "primary",
};
