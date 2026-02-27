import "./WeeklyLinks.css";
import useWeeklyLinks from "./useWeeklyLinks";
import Graph from "../Graph/Graph"

interface Props {
  overview: any;
}

const WeeklyLinks = ({ overview }: Props) => {
  const data = useWeeklyLinks(overview);
  console.log(data, 'weekly')
  // if (!overview) return <p>Loading...</p>;
  const graphSetting = [
    {
      name: 'New Non-Toxic Links',
      data: [759, 2321, 2563, 4599, 5606, 2215, 2126, 2412, 1699, 2122, 2273, 2221, 1885],
      color: '#19b933',
      className: 'green',
      type: 'column' as const,
      showInLegend: true
    },
    {
      name: 'New Toxic Links',
      data: [1000, 0, 6000, 0, 0, 8000, 0, 0, 0, 9000, 0, 0, 20],
      color: '#F1B03E',
      className: 'yellow',
      type: 'column' as const,
      showInLegend: true
    },
    {
      name: 'Lost',
      data: [-613, -1160, -924, -1038, -1445, -1515, -1484, -1509, -682, -1022, -1006, -758, -365],
      color: '#f72239',
      className: 'red',
      type: 'column' as const,
      showInLegend: true
    },
    {
      name: 'Change',
      type: 'line' as const,
      data: [146, 1161, 1639, 3561, 4161, 700, 642, 903, 1017, 1100, 1267, 1463, 1520],
      color: '#333c48',
      marker: {
        symbol: 'square'
      },
      className: 'black',
      showInLegend: true
    }
  ];
  const weeklyData = ["Feb 2025", "Mar 2025", "Apr 2025", "May 2025", "Jun 2025", "Jul 2025", "Aug 2025", "Sep 2025", "Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026"];
  const categories = weeklyData.map(item => item);

  return (
    <div className="card h-100">
      <div>
        <h6 className="title">Automated Weekly Link Audits</h6>
        <Graph categories={categories} series={graphSetting} />
      </div>
    </div>

  );
};

export default WeeklyLinks;