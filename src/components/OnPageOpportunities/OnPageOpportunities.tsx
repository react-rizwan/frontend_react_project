import "./OnPageOpportunities.css";
import useOnPageOpportunities from "./useOnPageOpportunities";

interface Props {
    overview: any;
}

const OnPageOpportunities = ({ overview }: Props) => {
    const data = useOnPageOpportunities(overview);
    console.log(data, 'on page')
    // if (!overview) return <p>Loading...</p>;

    return (
        <div className="card">
        <div className="">
            <h6 className="title">On Page Opportunities</h6>

            <div className="summary">
                <div>
                    <p className="label">Total Recommendations</p>
                    <h3>32</h3>
                </div>

                <div>
                    <p className="label">Avg. SEO IQ Score</p>
                    <h3>28.5</h3>
                </div>
            </div>

            <div className="table-card">
                <div className="table-header">
                    { data?.overview?.OnPageTable?.header?.map?.((item: any) => (
                    <span>{item}</span>
                    ))}
                </div>

                {/* Row 1 */}
                {/* <div className="table-body"> */}
                <div>
                {data?.overview?.OnPageTable?.tableData?.map?.((elem: any) => (
                <div className="table-row">
                     <span className="page">
                        {elem.t_key}
                    </span>
                    <span className="page">
                        {elem.rank_page}
                    </span>
                    <span>{elem.rnk}</span>
                    <span className="seo-score">
                        <a href="#">{elem.seo_iq}</a>
                        <div className="progress prog-bar">
                            <div className="progress-green" style={{ width: "40%" }} />
                            <div className="progress-red" style={{ width: "60%" }} />
                        </div>
                    </span>
                    <button className="idea-btn">{elem.content_reco} Ideas →</button>
                </div>
                ))}
                </div>
            </div>
        </div>
        </div>

    );
};

export default OnPageOpportunities;