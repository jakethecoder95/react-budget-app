import React from "react";
import { connect } from "react-redux";
import { Chart, Doughnut } from "react-chartjs-2";

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";
Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      const ctx = chart.chart.ctx;

      //Get options from the center object in options
      const centerConfig = chart.config.options.elements.center;
      const fontStyle = centerConfig.fontStyle || "Arial";
      const txt = centerConfig.text;
      const color = centerConfig.color || "#000";
      const sidePadding = centerConfig.sidePadding || 20;
      const sidePaddingCalculated =
        (sidePadding / 100) * (chart.innerRadius * 2);
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = Math.min(newFontSize, elementHeight);

      // Set font settings to draw it correctly.
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

const DoughnutChart = props => {
  const catagories = [
    "No Expences",
    "Misc & Checks",
    "Home & Utilities",
    "Transportation",
    "Groceries",
    "Insurance",
    "Restaurants & Dining",
    "Entertainment"
  ];
  const data = {
    width: 95,
    height: 100,
    data: {
      labels: catagories,
      datasets: [
        {
          data: props.percentages,
          backgroundColor: [
            "rgba(235, 235, 235, 1)",
            "rgba(200, 200, 200, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)"
          ],
          borderColor: [
            "rgba(200, 200, 200, 1)",
            "rgba(200, 200, 200, 1)",
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: [2, 0, 0, 0, 0, 0, 0, 0],
          hoverBorderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      },
      cutoutPercentage: 75,
      elements: {
        center: {
          text: "$" + props.totalExpenses.toFixed(2),
          color: "#444", // Default is #000000
          fontStyle: "Arial", // Default is Arial
          sidePadding: 20, // Defualt is 20 (as a percentage)
          backgroundColor: "red",
          display: "block",
          height: "40px"
        }
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, chartData) {
            return (
              chartData.labels[tooltipItem.index] +
              ": " +
              chartData.datasets[0].data[tooltipItem.index] +
              "%"
            );
          }
        }
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuart"
      }
    }
  };
  return <Doughnut {...data} />;
};

export default DoughnutChart;
