import "./Console.css";
import useConsole from "./useConsole";

interface Props {
  overview: any;
}

const Console = ({ overview }: Props) => {
  const data = useConsole(overview);
  console.log(data, 'weekly')
  // if (!overview) return <p>Loading...</p>;

  return (
        <div className="card">
        <div className="">
            <h6 className="title">Console</h6>

            <div className="summary">
                <div>
                    <p className="label">Total Ranking Keywords</p>
                    <h3>6059</h3>
                </div>

                <div>
                    <p className="label">Total Ranking Pages</p>
                    <h3>1051</h3>
                </div>
            </div>

            <div className="table-card">
                <div className="table-header">
                    { data?.overview?.console?.header?.map?.((item: any) => (
                    <span>{item}</span>
                    ))}
                </div>

                {/* Row 1 */}
                {/* <div className="table-body"> */}
                <div>
                {data?.overview?.console?.tableData?.map?.((elem: any) => (
                <div className="table-row">
                     <span className="page">
                        {elem.rank_page}
                    </span>
                    <span className="page">
                        {elem.rank_key}
                    </span>
                    <span>{elem.bos}</span>
                    <span>{elem.traffic}</span>
                </div>
                ))}
                </div>
            </div>
        </div>
        </div>

  );
};

export default Console;