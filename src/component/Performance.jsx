export default function Performance() {
  const ABPData = [
    {
      method: 'AI4AMP',
      accuracy: 0.732,
      specificity: 0.645,
      sensitivity: 0.861,
      gmean1: 0.745,
      gmean2: 0.5,
    },
    {
      method: 'AntiBP3',
      accuracy: 0.769,
      specificity: 0.763,
      sensitivity: 0.778,
      gmean1: 0.77,
      gmean2: 0.533,
    },
    {
      method: 'iAMPpred',
      accuracy: 0.732,
      specificity: 0.645,
      sensitivity: 0.861,
      gmean1: 0.745,
      gmean2: 0.5,
    },
    {
      method: 'AMPfun',
      accuracy: 0.769,
      specificity: 0.763,
      sensitivity: 0.778,
      gmean1: 0.77,
      gmean2: 0.533,
    },
    {
      method: 'AMPScanner vr.2',
      accuracy: 0.732,
      specificity: 0.645,
      sensitivity: 0.861,
      gmean1: 0.745,
      gmean2: 0.5,
    },
    {
      method: 'AMPActiPred',
      accuracy: 0.876,
      specificity: 0.91,
      sensitivity: 0.826,
      gmean1: 0.867,
      gmean2: 0.742,
    },
  ];

  const data = [
    {
      bacteria: 'E. coli',
      accuracy: 0.732,
      sensitivity: 0.645,
      specificity: 0.861,
      gmean: 0.745,
      mcc: 0.5,
    },
    {
      bacteria: 'S. aureus',
      accuracy: 0.769,
      sensitivity: 0.763,
      specificity: 0.778,
      gmean: 0.77,
      mcc: 0.533,
    },
    {
      bacteria: 'P. aeruginosa',
      accuracy: 0.732,
      sensitivity: 0.645,
      specificity: 0.861,
      gmean: 0.745,
      mcc: 0.5,
    },
    {
      bacteria: 'B. subtilis',
      accuracy: 0.769,
      sensitivity: 0.763,
      specificity: 0.778,
      gmean: 0.77,
      mcc: 0.533,
    },
    {
      bacteria: 'S. epidermidis',
      accuracy: 0.732,
      sensitivity: 0.645,
      specificity: 0.861,
      gmean: 0.745,
      mcc: 0.5,
    },
    {
      bacteria: 'S. typhimurium',
      accuracy: 0.876,
      sensitivity: 0.91,
      specificity: 0.826,
      gmean: 0.867,
      mcc: 0.742,
    },
    {
      bacteria: 'K. pneumoniae',
      accuracy: 0.732,
      sensitivity: 0.645,
      specificity: 0.861,
      gmean: 0.745,
      mcc: 0.5,
    },
    {
      bacteria: 'M. luteus',
      accuracy: 0.876,
      sensitivity: 0.91,
      specificity: 0.826,
      gmean: 0.867,
      mcc: 0.742,
    },
    {
      bacteria: 'E. faecalis',
      accuracy: 0.732,
      sensitivity: 0.645,
      specificity: 0.861,
      gmean: 0.745,
      mcc: 0.5,
    },
    {
      bacteria: 'A. baumannii',
      accuracy: 0.876,
      sensitivity: 0.91,
      specificity: 0.826,
      gmean: 0.867,
      mcc: 0.742,
    },
  ];

  return (
    <>
      <div className="pt-3  pb-2 custom-border-top bg-secondary">
        <h2 className="ps-5 h5 fw-medium">Performance</h2>
      </div>
      <div className="px-5 py-4 bg-white custom-border-bottom">
        <h4 className="text-primary mb-1">
          Stage 1
          <span className="ps-4 text-dark fw-light">Distinguish between ABP and non-ABP</span>
        </h4>
        <div className="bg-white py-4">
          <div className="table-container">
            <table className="custom-table-secondary table-hover table table-striped">
              <thead className="bg-info">
                <tr>
                  <th scope="col" width="20%" className="pe-0 fw-normal">
                    Method
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    Accuracy
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    Specificity
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    Sensitivity
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    GMean
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="fw-normal">
                    GMean
                  </th>
                </tr>
              </thead>
              <tbody>
                {ABPData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.method}</td>
                    <td>{row.accuracy}</td>
                    <td>{row.specificity}</td>
                    <td>{row.sensitivity}</td>
                    <td>{row.gmean1}</td>
                    <td>{row.gmean2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <h4 className="text-primary my-3">
          Stage 2
          <span className="ps-4 text-dark fw-light">
            Characterize ABP’s activity against 10 diverse bacterial indicator.
          </span>
        </h4>
        <div className="bg-white py-4">
          <div className="table-container">
            <table className="custom-table-secondary table-hover table table-striped">
              <thead>
                <tr>
                  <th scope="col" width="20%" className="pe-0 fw-normal">
                    Bacteria
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    Accuracy
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    Sensitivity
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    Specificity
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="pe-0 fw-normal">
                    GMean
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="16%" className="fw-normal">
                    Mcc
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.bacteria}</td>
                    <td>{row.accuracy}</td>
                    <td>{row.sensitivity}</td>
                    <td>{row.specificity}</td>
                    <td>{row.gmean}</td>
                    <td>{row.mcc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
