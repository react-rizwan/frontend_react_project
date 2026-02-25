import type { RankingDashboardViewProps } from "./RankingDashboard.types";
// import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import "./RankingDashboard.css";
import KeywordRankDistribution from "../../components/KeywordRankDistribution/KeywordRankDistribution";

const RankingDashboardView = ({ title }: RankingDashboardViewProps) => {
  const overview = [{ tilte: '1-3Rank', value: 10, },
  { tilte: '4-10 Rank', value: 20, },
  { tilte: '11-50 Rank', value: 30, },
  { tilte: '51-100 Rank', value: 40, },
  { tilte: '100+ Rank', value: 50, },
  { tilte: 'Ranking Keywords', value: 60, },
  { tilte: 'Tracked Keywords', value: 70, },
  { tilte: 'Estimated Traffic', value: 80, },
  { tilte: 'Traffic Value', value: 90, }
  ];
  console.log(API_BASE_URL)
  // const [overview, setOverview] = useState<any>(null);

  // const payload = {
  //   rl: "user",
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   fetch(`${API_BASE_URL}fup/usage`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setOverview(res.apiData))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="dashboard">
      <h1>{title}</h1>

      {/* 👇 Data child ko bhej rahe hain */}
      <KeywordRankDistribution overview={overview} />
    </div>
  );
};

export default RankingDashboardView;