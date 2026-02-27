import "./KeywordRankDistribution.css";
import useKeywordRankDistribution from "./useKeywordRankDistribution";

interface Props {
  overview: any;
}

const KeywordRankDistribution = ({ overview }: Props) => {
  const data = useKeywordRankDistribution(overview);
  // if (!overview) return <p>Loading...</p>;
  console.log(data, 'data')
  return (
    <div className="card h-100">
      <h6 className="title">Keyword Rank Distribution</h6>

      <div className="rank-grid">
        {data?.overview?.rankDist?.map?.((item: any) => (
          <div className="rank-item">
            <div className="sub-title">{item.title}</div>
            <div className="sub-value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="border-top rank-grid mt-2">
        {data?.overview?.keywordRankDetail?.map?.((elem: any) => (
          <div className="rank-item mt-3">
            <div className="sub-title">{elem.title}</div>
            <div className="sub-value">{elem.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeywordRankDistribution;