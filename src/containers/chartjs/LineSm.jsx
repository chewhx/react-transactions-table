import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { format$ } from "../../assets/scripts/util";

export default function LineOneChartJS(props) {
  const chartDatasets = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: props.label,
        data: Object.values(props.data),
        backgroundColor: props.chartDark
          ? "rgba(0, 0, 0, 0.2)"
          : props.chartLight
          ? "rgba(255, 255, 255, 1)"
          : "rgba(0, 0, 0, 0.2)",
        borderColor: props.chartDark
          ? "rgba(0, 0, 0, 1)"
          : props.chartLight
          ? "rgba(255, 255, 255, 1)"
          : "rgba(0, 0, 0, 1)",
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
