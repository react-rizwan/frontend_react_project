import "./KeywordRankDistribution.css";
import useKeywordRankDistribution from "./useKeywordRankDistribution";

interface Props {
  overview: any;
}

const KeywordRankDistribution = ({ overview }: Props) => {
  const data = useKeywordRankDistribution(overview);
  // if (!overview) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <h2 className="title">Keyword Rank Distribution</h2>

          <div className="rank-grid">
            {data?.overview?.map?.((item: any) => (
              <div className="rank-item">
                <p>{item.tilte}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="col-md-6">
        <div className="card">
          <h2 className="title">On Page Opportunities</h2>

          <div className="rank-grid">
            {data?.overview?.map?.((item: any) => (
              <div className="rank-item">
                <p>{item.tilte}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default KeywordRankDistribution;