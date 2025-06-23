import WelcomeBanner from '../component/WelcomeBanner';

export default function Download() {
  const datasetTable = [
    {
      bacteria: 'E. coli',
      folder: 'EC',
      rows: [
        ['Train', 'CSV', <>Training set (CSV) for <em>E. coli</em> MIC prediction.</>, 'EC/EC_train.csv'],
        ['Train', 'FASTA', <>Training sequences (FASTA) for <em>E. coli</em>.</>, 'EC/EC_train.fasta'],
        ['Test', 'CSV', <>Testing set (CSV) for evaluating <em>E. coli</em> model.</>, 'EC/EC_test.csv'],
        ['Test', 'FASTA', <>Testing sequences (FASTA) for <em>E. coli</em>.</>, 'EC/EC_test.fasta'],
      ],
    },
    {
      bacteria: 'S. aureus',
      folder: 'SA',
      rows: [
        ['Train', 'CSV', <>Training set (CSV) for <em>S. aureus</em> MIC prediction.</>, 'SA/SA_train.csv'],
        ['Train', 'FASTA', <>Training sequences (FASTA) for <em>S. aureus</em>.</>, 'SA/SA_train.fasta'],
        ['Test', 'CSV', <>Testing set (CSV) for evaluating <em>S. aureus</em> model.</>, 'SA/SA_test.csv'],
        ['Test', 'FASTA', <>Testing sequences (FASTA) for <em>S. aureus</em>.</>, 'SA/SA_test.fasta'],
      ],
    },
    {
      bacteria: 'P. aeruginosa',
      folder: 'PA',
      rows: [
        ['Train', 'CSV', <>Training set (CSV) for <em>P. aeruginosa</em> MIC prediction.</>, 'PA/PA_train.csv'],
        ['Train', 'FASTA', <>Training sequences (FASTA) for <em>P. aeruginosa</em>.</>, 'PA/PA_train.fasta'],
        ['Test', 'CSV', <>Testing set (CSV) for evaluating <em>P. aeruginosa</em> model.</>, 'PA/PA_test.csv'],
        ['Test', 'FASTA', <>Testing sequences (FASTA) for <em>P. aeruginosa</em>.</>, 'PA/PA_test.fasta'],
      ],
    },
  ];

  const handleDownload = (filePath) => {
    const baseUrl = import.meta.env.BASE_URL || './';
    const fullPath = `${baseUrl}downloads/${filePath}`;

    const link = document.createElement('a');
    link.href = fullPath;
    link.download = filePath.split('/').pop(); // 自動取最後檔名
    link.click();
  };

  return (
     <>
      <WelcomeBanner />
      <div className="container py-5">
        <div className="border border-3 border-secondary rounded-4 shadow-sm">
          <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
            <h2 className="ps-4 h4 fw-medium">Downloadable Datasets</h2>
          </div>
          <div className="px-5 py-4 bg-white rounded-bottom-3">
            <p className="mb-2 lh-lg" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              The dataset contains antimicrobial peptides tested against three clinically important bacterial species:
            </p>
            <p className="mb-5 lh-lg" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              <em>Staphylococcus aureus</em>, <em>Escherichia coli</em>, and <em>Pseudomonas aeruginosa</em>.
            </p>

            <table className="custom-table-secondary table-hover table table-striped">
              <thead className="text-center">
                <tr>
                  <th scope="col" width="15%" className="pe-0 fw-bold fs-5">
                    Bacteria
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    Set
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="10%" className="pe-0 fw-bold fs-5">
                    Format
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="40%" className="pe-0 fw-bold fs-5">
                    Description
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th scope="col" width="15%" className="pe-0 fw-bold fs-5">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {datasetTable.map((section, idx) =>
                  section.rows.map((row, rowIdx) => (
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
                          className="fst-italic fs-5 fw-bold align-middle"
                          style={{
                            backgroundColor: idx % 2 === 0 ? '#f8f9fa' : '#ffffff',
                          }}
                        >
                          {section.bacteria}
                        </td>
                      )}
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td className="text-center">{row[2]}</td>
                      <td>
                        <button
                          className="btn border-0"
                          onClick={() => handleDownload(row[3])}
                        >
                          <img
                            src="img/downloads.png"
                            alt="download-icon"
                            className="object-fit-cover"
                            width={20}
                            height={20}
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </>
  );
}
