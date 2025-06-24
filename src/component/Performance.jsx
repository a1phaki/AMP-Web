export default function Performance() {
  return (
    <div className="border border-3 border-secondary rounded-4 shadow-sm">
      <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
        <h2 className="ps-4 h4 fw-medium">Performance</h2>
      </div>
      <div className="px-5 py-4 bg-white custom-border-bottom">
        <h4 className="text-primary my-3">Results - Comparison of Traditional ML and ANIA</h4>
        <div className="bg-white py-3">
          <div className="table-container">
            <table className="custom-table-secondary table-hover table table-striped">
              <thead className="text-center">
                <tr>
                  <th scope="col" width="15%" className="pe-0 fw-bold fs-5">
                    Bacteria
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="20%" className="pe-0 fw-bold fs-5">
                    Model
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    MAE
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    MSE
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    R²
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    PCC
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    bacteria: 'S. aureus',
                    rows: [
                      ['Linear', 0.5523, 0.457, 0.2112, 0.4622],
                      ['Lasso', 0.5533, 0.4557, 0.2135, 0.4628],
                      ['Ridge', 0.5519, 0.4542, 0.216, 0.4657],
                      ['Elastic Net', 0.5587, 0.4609, 0.2045, 0.4523],
                      ['RF', 0.4595, 0.3359, 0.4203, 0.6553],
                      ['Gradient Boosting', 0.4532, 0.3301, 0.4303, 0.6565],
                      ['XGBoost', 0.4521, 0.3321, 0.4267, 0.6538],
                      ['SVM', 0.4691, 0.3622, 0.3748, 0.6538],
                      ['ANIA', 0.3899, 0.2595, 0.552, 0.7518],
                    ],
                  },
                  {
                    bacteria: 'E. coli',
                    rows: [
                      ['Linear', 0.534, 0.4651, 0.2899, 0.542],
                      ['Lasso', 0.534, 0.4588, 0.2995, 0.5481],
                      ['Ridge', 0.5324, 0.4573, 0.3017, 0.55],
                      ['Elastic Net', 0.5337, 0.4572, 0.3019, 0.5498],
                      ['RF', 0.4493, 0.3451, 0.4732, 0.6935],
                      ['Gradient Boosting', 0.448, 0.3399, 0.4809, 0.6943],
                      ['XGBoost', 0.4533, 0.3454, 0.4727, 0.6895],
                      ['SVM', 0.4533, 0.3581, 0.4533, 0.6735],
                      ['ANIA', 0.3839, 0.2528, 0.614, 0.7923],
                    ],
                  },
                  {
                    bacteria: 'P. aeruginosa',
                    rows: [
                      ['Linear', 0.5312, 0.4497, 0.1852, 0.4441],
                      ['Lasso', 0.5253, 0.4396, 0.2036, 0.456],
                      ['Ridge', 0.5242, 0.439, 0.2047, 0.4566],
                      ['Elastic Net', 0.5237, 0.437, 0.2083, 0.4594],
                      ['RF', 0.4328, 0.3143, 0.4307, 0.6609],
                      ['Gradient Boosting', 0.4232, 0.3074, 0.4431, 0.6672],
                      ['XGBoost', 0.4262, 0.3073, 0.4432, 0.6688],
                      ['SVM', 0.4312, 0.3193, 0.4216, 0.6494],
                      ['ANIA', 0.3643, 0.2262, 0.5903, 0.7822],
                    ],
                  },
                ].map((section, idx) =>
                  section.rows.map((row, rowIdx) => {
                    const isANIA = row[0] === 'ANIA';
                    const cellClass = `fs-5 ${isANIA ? 'fw-semibold text-primary' : ''}`;
                    const bgColor = { backgroundColor: idx % 2 === 0 ? '#f8f9fa' : '#ffffff' };

                    return (
                      <tr
                        key={`${idx}-${rowIdx}`}
                        className="text-center align-middle"
                        style={{
                          borderBottom:
                            rowIdx === section.rows.length - 1 ? '2px solid #dee2e6' : undefined,
                        }}
                      >
                        {rowIdx === 0 && (
                          <td
                            rowSpan={section.rows.length}
                            className="fst-italic fs-5 fw-bold"
                            style={bgColor}
                          >
                            {section.bacteria}
                          </td>
                        )}
                        <td className={cellClass}>{row[0]}</td>
                        <td className={cellClass}>{row[1]}</td>
                        <td className={cellClass}>{row[2]}</td>
                        <td className={cellClass}>{row[3]}</td>
                        <td className={cellClass}>{row[4]}</td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </div>
        </div>
        <h3 className="text-primary my-3">Results - Comparison with Existing Tools</h3>
        <div className="bg-white py-3">
          <div className="table-container">
            <table className="custom-table-secondary table-hover table table-striped ">
              <thead className="text-center">
                <tr>
                  <th scope="col" width="20%" className="pe-0 fw-bold fs-5">
                    Bacteria
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="20%" className="pe-0 fw-bold fs-5">
                    Model
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    MAE
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    MSE
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    R²
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    PCC
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    bacteria: 'S. aureus',
                    rows: [
                      ['ESKAPEE-MICpred', 0.5183, 0.4016, -0.3147, 0.2304],
                      ['esAMPMIC', 0.3531, 0.2637, 0.1368, 0.5486],
                      ['AMPActiPred', 0.3708, 0.2428, -0.1491, 0.34],
                      ['ANIA', 0.3786, 0.2348, 0.2313, 0.6227],
                    ],
                  },
                  {
                    bacteria: 'E. coli',
                    rows: [
                      ['ESKAPEE-MICpred', 0.4481, 0.3397, -0.2673, 0.4652],
                      ['esAMPMIC', 0.3186, 0.1734, 0.353, 0.6045],
                      ['AMPActiPred', 0.3433, 0.272, 0.0218, 0.4651],
                      ['ANIA', 0.3347, 0.1754, 0.3457, 0.7046],
                    ],
                  },
                  {
                    bacteria: 'P. aeruginosa',
                    rows: [
                      ['ESKAPEE-MICpred', 0.5061, 0.3481, -0.1469, 0.3668],
                      ['esAMPMIC', 0.409, 0.3462, -0.1408, 0.4712],
                      ['AMPActiPred', 0.3859, 0.2112, 0.1958, 0.4791],
                      ['ANIA', 0.3687, 0.2335, 0.2307, 0.5902],
                    ],
                  },
                ].map((section, idx) =>
                  section.rows.map((row, rowIdx) => {
                    const isANIA = row[0] === 'ANIA';
                    const cellClass = `fs-5 ${isANIA ? 'fw-semibold text-primary' : ''}`;

                    return (
                      <tr
                        key={`${idx}-${rowIdx}`}
                        className="text-center align-middle"
                        style={{
                          borderBottom:
                            rowIdx === section.rows.length - 1 ? '2px solid #dee2e6' : undefined,
                        }}
                      >
                        {rowIdx === 0 && (
                          <td
                            rowSpan={section.rows.length}
                            className="align-middle fst-italic fs-5 fw-bold"
                            style={{
                              backgroundColor: idx % 2 === 0 ? '#f8f9fa' : '#ffffff',
                            }}
                          >
                            {section.bacteria}
                          </td>
                        )}
                        <td className={cellClass}>{row[0]}</td>
                        <td className={cellClass}>{row[1]}</td>
                        <td className={cellClass}>{row[2]}</td>
                        <td className={cellClass}>{row[3]}</td>
                        <td className={cellClass}>{row[4]}</td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
