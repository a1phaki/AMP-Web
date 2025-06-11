import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Plotly from 'plotly.js-dist-min';
import c3 from 'c3';
import 'c3/c3.css';

function ResultPage() {
  const location = useLocation();
  const chartRef = useRef(null);
  const micChartRef = useRef(null);
  const violinRef = useRef(null);

  const { projectId, PredictedData } = location.state || {};
  const tableData = PredictedData || [];

  // === 基礎統計資料 ===
  const target = tableData[0]?.target || 'N/A';

  const sequenceLengths = tableData.map((item) => item.sequenceLength);
  const predictedMICs = tableData.map((item) => item.predictedLogMIC);

  const minLen = Math.min(...sequenceLengths);
  const maxLen = Math.max(...sequenceLengths);
  const avgLen = (
    sequenceLengths.reduce((a, b) => a + b, 0) / (sequenceLengths.length || 1)
  ).toFixed(2);

  const minMIC = Math.min(...predictedMICs).toFixed(4);
  const maxMIC = Math.max(...predictedMICs).toFixed(4);
  const avgMIC = (
    predictedMICs.reduce((a, b) => a + b, 0) / (predictedMICs.length || 1)
  ).toFixed(4);

  const lowCount = predictedMICs.filter((v) => v < 1).length;
  const highCount = predictedMICs.filter((v) => v > 2).length;

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
      color: {
        pattern: ['#FF6B6B'] // 🎨 柱狀圖主色
      },
      axis: {
        x: {
          type: 'category',
          categories,
          label: {
            text: 'Sequence Length', // X 軸標籤文字
            position: 'outer-center',
          },
          tick: {
            rotate: 75,
            multiline: false,
            outer: false,
          },
          height: 80,
        },
        y: {
          label: {
            text: 'Count', // Y 軸標籤文字
            position: 'outer-middle',
          },
          tick: {
            outer: false,
          },
        },
      },
      bar: {
        width: {
          ratio: 1,
        },
      },
      legend: {
        show: false,
      },
      size: {
        width: 350,  // 寬度（單位為 px）
        height: 280  // 高度（單位為 px）
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 50,
      },
    });

    const trace = {
      type: 'violin',
      y: predictedMICs,
      box: { visible: true },
      line: { color: '#636EFA' },
      fillcolor: 'rgba(99, 110, 250, 0.5)',
      meanline: { visible: true },
      name: 'Predicted Log MIC',
    };

    const layout = {
      margin: { l: 70, r: 20, t: 0, b: 50 },
      width: 400,
      height: 300,
      yaxis: {
        title: {
          text: 'Predicted Log MIC (unit: uM)',
          font: {
            family: 'Arial, sans-serif',
            size: 14,
            color: '#000',
          },
        },
        zeroline: false,
      },
    };

    Plotly.newPlot(violinRef.current, [trace], layout, { displayModeBar: false });

  //   const micCategories = micBins.map((bin) => bin.label);
  //   const micCounts = ['MIC Count', ...micBins.map((bin) => bin.count)];

  //   c3.generate({
  //     bindto: micChartRef.current,
  //     data: {
  //       columns: [micCounts],
  //       type: 'bar',
  //     },
  //     axis: {
  //       x: {
  //         type: 'category',
  //         categories: micCategories,
  //         tick: {
  //           rotate: 75,
  //           multiline: false,
  //         },
  //         height: 100,
  //       },
  //       y: {
  //         label: 'Count',
  //       },
  //     },
  //     bar: {
  //       width: {
  //         ratio: 1,
  //       },
  //     },
  //   });
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
          <h2 className="ps-3 fs-bold h5">Prediction Summary</h2>
        </div>
        <div className="bg-white pt-4 px-4 pb-1 mb-2">
          <div className="row">
            <div className="col-4">
              <ul className="list-unstyled border-start ps-3 border-3 border-primary" style={{ fontSize: '1.0rem' }}>
                <li><strong>Project ID: </strong>{projectId}</li>
                <li><strong>Target: </strong>{target}</li>
                <li><strong>Number of sequences: </strong>{tableData.length}</li>
                <li><strong>Sequence Length: </strong>{minLen} ~ {maxLen} (avg: {avgLen})</li>
                <li><strong>Predicted log MIC: </strong>{minMIC} ~ {maxMIC} (avg: {avgMIC})</li>
                <li><strong>Low MIC count: </strong>{lowCount} (log MIC &lt; 1)</li>
                <li><strong>High MIC count: </strong>{highCount} (log MIC &gt; 2)</li>
              </ul>
            </div>
            <div className="col-4">
              <div className="text-center mb-2" style={{ fontSize: '1.2rem' }}>
                <strong>Sequence Length Distribution</strong>
              </div>
              <div ref={chartRef}></div>
            </div>
            <div className="col-4">
              <div className="text-center mb-2 ms-8" style={{ fontSize: '1.2rem' }}>
                <strong>Predicted Log MIC</strong>
              </div>
              <div ref={violinRef}></div>
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
                <th scope="col" width="50%">
                  Sequence
                </th>
                <th scope="col" width="10%" className="text-center">
                  Target
                </th>
                <th scope="col" width="10%" className="text-center">
                  Length
                </th>
                <th scope="col" width="20%" className="text-center">
                  Activity (unit: uM)
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
          className="mt-4 p-2 d-flex justify-content-end custom-border-bottom"
          style={{ backgroundColor: '#F9FAFB' }}
        >
          <button
            type="button"
            className="btn btn-primary btn-lg text-white me-3"
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
