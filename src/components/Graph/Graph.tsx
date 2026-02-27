import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  categories: string[];
  series: Highcharts.SeriesOptionsType[];
}

const BarChart = ({ categories, series }: ChartProps) => {

  const options: Highcharts.Options = {
    chart: {
      type: 'column',
      height: 400,
      marginTop: 50 // adjust as needed
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: categories,
    },
    yAxis: [{
      title: {
        text: ''
      },
      lineWidth: 0.5,
      gridLineWidth: 0.5,
      //min: -25,
      labels: {
        enabled: true // Disable labels on the y-axis
      }
    }],
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        let s = ``;

        this.points?.forEach(point => {
          const color = point.color;
          const name = point.series.name;
          const value = Highcharts.numberFormat(Math.abs(point.y || 0), 0);

          s += `
        <span style="color:${color}">●</span>
        ${name}: <b>${value}</b><br/>
      `;
        });

        return s;
      }
    },
    series: series,   // 👈 directly pass here
    plotOptions: {
      column: {
        pointPadding: 0, // Set to 0 to remove padding between columns
        groupPadding: 0, // Set to 0 to remove padding between groups
        borderWidth: 0,
        pointWidth: 20, // Set a fixed width for the columns
        dataLabels: {
          enabled: false
        }
      },
      series: {
        stacking: 'normal',
        cursor: 'pointer',
      }
    },
    legend: {
      enabled: true,
      floating: true,
      align: 'center',
      verticalAlign: 'top',
      y: 0, // Moves it above the chart area
      symbolRadius: 0,
      symbolHeight: 12,
      symbolWidth: 12
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;