import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import c3 from 'c3';
import 'c3/c3.css';

function ResultPage() {
  const location = useLocation();
  const chartRef = useRef(null);
  const micChartRef = useRef(null);

  const { projectId, PredictedData } = location.state || {};
  const tableData = PredictedData || [];

  // === 處理 Predicted Log MIC 區間 ===
  const micValues = tableData.map((item) => item.predictedLogMIC);
  const micMin = Math.min(...micValues);
  const micMax = Math.max(...micValues);
  const micBinsCount = 20;
  const micInterval = (micMax - micMin) / micBinsCount;

  const micBins = Array.from({ length: micBinsCount }, (_, i) => ({
    label: `${(micMin + i * micInterval).toFixed(2)} - ${(micMin + (i + 1) * micInterval).toFixed(2)}`,
    count: 0,
  }));

  micValues.forEach((value) => {
    const index = Math.min(Math.floor((value - micMin) / micInterval), micBinsCount - 1);
    micBins[index].count += 1;
  });

  const numBins = 12;
  const intervalSize = 5;

  const bins = Array.from({ length: numBins }, (_, i) => ({
    label: `${Math.floor(0 + i * intervalSize)} - ${Math.floor(0 + (i + 1) * intervalSize)}`,
    count: 0,
  }));

  tableData.forEach((item) => {
    const index = Math.min(
      Math.floor((item.sequenceLength - 0) / intervalSize),
      numBins - 1, // ex: 如果是5區間，就最多到 index 4
    );
    bins[index].count += 1;
  });

  useEffect(() => {
    if (tableData.length === 0) return;

    const categories = bins.map((bin) => bin.label);
    const counts = ['Sequence Count', ...bins.map((bin) => bin.count)];

    c3.generate({
      bindto: chartRef.current,
      data: {
        columns: [counts],
        type: 'bar',
      },
      axis: {
        x: {
          type: 'category',
          categories,
          tick: {
            rotate: 75,
            multiline: false,
          },
          height: 100,
        },
        y: {
          label: 'Count',
        },
      },
      bar: {
        width: {
          ratio: 1,
        },
      },
    });

    const micCategories = micBins.map((bin) => bin.label);
    const micCounts = ['MIC Count', ...micBins.map((bin) => bin.count)];

    c3.generate({
      bindto: micChartRef.current,
      data: {
        columns: [micCounts],
        type: 'bar',
      },
      axis: {
        x: {
          type: 'category',
          categories: micCategories,
          tick: {
            rotate: 75,
            multiline: false,
          },
          height: 100,
        },
        y: {
          label: 'Count',
        },
      },
      bar: {
        width: {
          ratio: 1,
        },
      },
    });
  }, [tableData]);

  const convertToCSV = (tableData) => {
    const headers = ['ID', 'Sequence', 'Target', 'Sequence Length', 'Predicted Log MIC'];
    const rows = tableData.map((item) => [
      item.id,
      item.sequence,
      item.target,
      item.sequenceLength,
      item.predictedLogMIC,
    ]);
    return [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
  };

  const handleExport = (e) => {
    e.preventDefault();
    const csvText = convertToCSV(tableData);
    const blob = new Blob([csvText], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'peptides.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container py-5">
      <div className="border border-3 border-secondary rounded-4 mb-4">
        <div className="pt-3 pb-2 custom-border-top bg-secondary">
          <h2 className="ps-3 fs-bold h5">Submission Summary</h2>
        </div>
        <div className="bg-white p-4">
          <div className="row">
            <div className="col-4">
              <ul className="bg-primary">
                <li>Project ID：{projectId}</li>
                <li>Number of sequence：{tableData.length}</li>
              </ul>
            </div>
            <div className="col-4">
              <div ref={chartRef}></div>
            </div>
            <div className="col-4">
              <div ref={micChartRef}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-3 border-secondary rounded-4">
        <div className="pt-3 pb-2 custom-border-top bg-secondary">
          <h2 className="ps-3 fs-bold h5">RESULT TABLE</h2>
        </div>
        <div className="bg-white p-4 custom-table">
          <table className="table-secondary table table-striped">
            <thead>
              <tr>
                <th scope="col" width="10%">
                  ID
                </th>
                <th scope="col" width="35%">
                  Sequence
                </th>
                <th scope="col" width="10%" className="text-center">
                  Target
                </th>
                <th scope="col" width="10%" className="text-center">
                  Length
                </th>
                <th scope="col" width="35%" className="text-center">
                  Activity (log MIC, unit: uM)
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td scope="row">{data.id}</td>
                  <td>{data.sequence}</td>
                  <td className="text-center">{data.target}</td>
                  <td className="text-center">{data.sequenceLength}</td>
                  <td className="text-center">{data.predictedLogMIC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="p-3 d-flex justify-content-end custom-border-bottom"
          style={{ backgroundColor: '#F9FAFB' }}
        >
          <button
            type="button"
            className="btn btn-primary btn-lg text-white"
            onClick={handleExport}
          >
            Export .csv
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
