import React from "react";
import RankingDashboardView from "./RankingDashboard.view";
import { useRankingDashboard } from "./useRankingDashboard";

const RankingDashboardContainer: React.FC = () => {
  const { title } = useRankingDashboard();

  return <RankingDashboardView title={title} />;
};

export default RankingDashboardContainer;
