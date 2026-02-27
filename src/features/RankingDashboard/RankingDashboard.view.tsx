import type { RankingDashboardViewProps } from "./RankingDashboard.types";
// import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import "./RankingDashboard.css";
import KeywordRankDistribution from "../../components/KeywordRankDistribution/KeywordRankDistribution";
import OnPageOpportunities from "../../components/OnPageOpportunities/OnPageOpportunities";
import WeeklyLinks from "../../components/WeeklyLinks/WeeklyLinks";
import Console from "../../components/Console/Console";

const RankingDashboardView = ({ title }: RankingDashboardViewProps) => {
  const keywordRankDist = {
    rankDist: [{ title: '1-3 Rank', value: 10, },
    { title: '4-10 Rank', value: 20, },
    { title: '11-50 Rank', value: 30, },
    { title: '51-100 Rank', value: 40, },
    { title: '100+ Rank', value: 50, }],

    keywordRankDetail: [{ title: 'Ranking Keywords', value: 60, },
    { title: 'Tracked Keywords', value: 70, },
    { title: 'Estimated Traffic', value: 80, },
    { title: 'Traffic Value', value: 90, }],

    OnPageTable: {
      header: ['Target Keyword', 'Ranking Page', 'Rank', 'SEO IQ', 'Content Recommendations'],
      tableData: [{t_key: 'emirates job1', rank_page: 'https://www.naukrigulf.com/the-emirates-group-jobs', rnk: 38, seo_iq: 50, content_reco: '12'},{t_key: 'emirates job2', rank_page: 'https://www.naukrigulf.com/the-emirates-group-jobs', rnk: 38, seo_iq: 50, content_reco: '12'},{t_key: 'emirates job3', rank_page: 'https://www.naukrigulf.com/the-emirates-group-jobs', rnk: 38, seo_iq: 50, content_reco: '12'},{t_key: 'emirates job4', rank_page: 'https://www.naukrigulf.com/the-emirates-group-jobs', rnk: 38, seo_iq: 50, content_reco: '12'},{t_key: 'emirates job5', rank_page: 'https://www.naukrigulf.com/the-emirates-group-jobs', rnk: 38, seo_iq: 50, content_reco: '12'}]
    },
    console: {
      header: ['Ranking Page', 'Ranking Keywords', 'BOS', 'Traffic'],
      tableData:[{rank_page: 'https://www.rankwatch.com/free-tools/reverse-image-search', rank_key: 1857, bos: '50%', traffic: 6.97},{rank_page: 'https://www.rankwatch.com/free-tools/reverse-image-search-2', rank_key: 1857, bos: '50%', traffic: 6.97},{rank_page: 'https://www.rankwatch.com/free-tools/reverse-image-search-3', rank_key: 1857, bos: '50%', traffic: 6.97},{rank_page: 'https://www.rankwatch.com/free-tools/reverse-image-search-4', rank_key: 1857, bos: '50%', traffic: 6.97},{rank_page: 'https://www.rankwatch.com/free-tools/reverse-image-search-5', rank_key: 1857, bos: '50%', traffic: 6.97}]
    }
  }
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
      <div className="row">
        <div className="col-md-6"><KeywordRankDistribution overview={keywordRankDist} /></div>
        <div className="col-md-6"> <OnPageOpportunities overview={keywordRankDist} /></div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6"> <WeeklyLinks overview={keywordRankDist} /></div>
        <div className="col-md-6"> <Console overview={keywordRankDist} /></div>
      </div> 
    </div>
  );
};

export default RankingDashboardView;