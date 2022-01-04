import Counter from "../../Counter";

const Demo6statistic1 = () => {
  return (
    <div
      id="statistic-1"
      className="bg-01 pt-70 pb-70 statistic-section division"
    >
      <div className="container white-color">
        {/* STATISTIC-1 WRAPPER */}
        <div className="statistic-1-wrapper">
          <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
            {/* STATISTIC BLOCK #1 */}
            <div id="sb-1-1" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Text */}
                <h5 className="h5-lg">Prospects with accurate data</h5>
                {/* Text */}
                <p className="p-lg">
                Discover the contact information for your ideal customers and everyone else that stands in the way of a signed transaction.
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div id="sb-1-2" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Text */}
                <h5 className="h5-lg">Approach any CEO</h5>
                {/* Text */}
                <p className="p-lg">
                Visit any company's website to instantly access enriched personnel data and communicate with decision makers.
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div id="sb-1-3" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Text */}
                <h5 className="h5-lg">Discover new avenues for growth</h5>
                {/* Text */}
                <p className="p-lg">
                Look for new clients and businesses that have similar target demographics. Qualify your pipeline and meet your goals faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END STATISTIC-1 WRAPPER */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Demo6statistic1;
