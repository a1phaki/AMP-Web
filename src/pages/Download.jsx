export default function Download() {
  const data = [
    {
      name: 'E. coli',
      info: 'The Dataset of E. coli of the second stage in CSV format.',
      folder: 'EC',
    },
    {
      name: 'S. aureus',
      info: 'The Dataset of S. aureus of the second stage in CSV format.',
      folder: 'SA',
    },
    {
      name: 'P. aeruginosa',
      info: 'The Dataset of P. aeruginosa of the second stage in CSV format.',
      folder: 'PA',
    },
  ];

  const handleDownload = (folder, type, file) => {
    const filePath = `/downloads/${folder}/${type}.${file}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${folder}_${type}.${file}`;
    link.click();
  };

  return (
    <div className="container py-5 bg-success">
      <div className="pt-3 pb-2 custom-border-top bg-secondary">
        <h2 className="ps-5 h5 fw-medium">Performance</h2>
      </div>
      <div className="px-5 py-4 bg-white custom-border-bottom flex-grow-1">
        <p>
          Datasets of the <span className="text-primary">second</span> stage
        </p>
        <div className="bg-white py-3 row">
          <div className="table-container">
            <table className="custom-table-secondary table ">
              <thead className="bg-info text-center">
                <tr>
                  <th scope="col" width="20%" className="pe-0 fw-normal">
                    Name
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="20%" className="pe-0 fw-normal">
                    Type
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="30%" className="pe-0 fw-normal">
                    Info
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="20%" className="pe-0 fw-normal">
                    File Format
                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <>
                    <tr>
                      <th rowSpan={4} className="bg-white">
                        <a href={`/downloads/${item.name}.zip`} download>
                          {item.name}
                        </a>
                      </th>
                      <td className="bg-white">Train</td>
                      <td rowSpan={2} className="bg-white">
                        {item.info}
                      </td>
                      <td className="bg-white">CSV</td>
                      <td>
                        <button
                          className="btn border-0"
                          onClick={() => handleDownload(item.folder, 'train', 'csv')}
                        >
                          <img
                            src="img/downloads.png"
                            alt="train-download-csv"
                            className="object-fit-cover"
                            width={15}
                          />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white"></td>
                      <td>FASTA</td>
                      <td>
                        <button
                          className="btn border-0"
                          onClick={() => handleDownload(item.folder, 'train', 'fasta')}
                        >
                          <img
                            src="img/downloads.png"
                            alt="train-download-fasta"
                            className="object-fit-cover"
                            width={15}
                          />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Test</td>
                      <td rowSpan={2}>{item.info}</td>
                      <td className="bg-white">CSV</td>
                      <td>
                        <button
                          className="btn border-0"
                          onClick={() => handleDownload(item.folder, 'test', 'csv')}
                        >
                          <img
                            src="img/downloads.png"
                            alt="test-download-csv"
                            className="object-fit-cover"
                            width={15}
                          />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>FASTA</td>
                      <td>
                        <button
                          className="btn border-0"
                          onClick={() => handleDownload(item.folder, 'test', 'fasta')}
                        >
                          <img
                            src="img/downloads.png"
                            alt="test-download-fasta"
                            className="object-fit-cover"
                            width={15}
                          />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
