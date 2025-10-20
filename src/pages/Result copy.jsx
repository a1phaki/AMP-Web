import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Plotly from 'plotly.js-dist-min';
import c3 from 'c3';
import 'c3/c3.css';
import TopPeptidesViewer from '../component/TopPeptidesViewer';
import WelcomeBanner from '../component/WelcomeBanner';
import HoverIconButton from '../component/HoverIconButton';

function ResultPage() {
  const location = useLocation();
  const chartRef = useRef(null);
  const violinRef = useRef(null);

  // 若未從合法流程進入（如直接輸入 /result），跳回首頁
  let projectName = '';
  let tableData = [];

  // 優先從 location.state 取得資料
  if (location.state && location.state.PredictedData) {
    projectName = location.state.projectName;
    tableData = location.state.PredictedData;

    // 預測資料存入 localStorage（支援頁面重整）
    localStorage.setItem(
      'lastPredictionResult',
      JSON.stringify({
        projectName,
        PredictedData: tableData,
      }),
    );
  } else {
    // 回退：從 localStorage 取得資料
    const saved = localStorage.getItem('lastPredictionResult');
    if (saved) {
      const parsed = JSON.parse(saved);
      projectName = parsed.projectName;
      tableData = parsed.PredictedData;
    } else {
      alert('Invalid access: Please upload peptide sequences first.');
      window.location.href = '/';
    }
  }

  // === 基礎統計資料 ===
  const target = tableData[0]?.target || 'N/A';
  const sequenceLengths = tableData.map((item) => item.sequenceLength);
  const predictedMICs = tableData.map((item) => item.predictedLogMIC);
  const minLen = Math.min(...sequenceLengths);
  const maxLen = Math.max(...sequenceLengths);
  const lowCount = predictedMICs.filter((v) => v < 1).length;
  const highCount = predictedMICs.filter((v) => v > 2).length;

  // === Top 10 MIC 最低的胜肽 ===
  const topPeptides = [...tableData]
    .sort((a, b) => a.predictedLogMIC - b.predictedLogMIC)
    .slice(0, 10);

  // === 長度分佈統計區間 ===
  const numBins = 12;
  const intervalSize = 5;
  const bins = Array.from({ length: numBins }, (_, i) => ({
    label: `${i * intervalSize} - ${(i + 1) * intervalSize}`,
    count: 0,
  }));

  tableData.forEach((item) => {
    const index = Math.min(Math.floor(item.sequenceLength / intervalSize), numBins - 1);
    bins[index].count += 1;
  });

  // === 使用 useEffect 繪製視覺化圖表（Bar + Violin） ===
  useEffect(() => {
    if (tableData.length === 0) return;

    // === C3: Sequence Length Bar Chart ===
    const categories = bins.map((bin) => bin.label);
    const counts = ['Sequence Count', ...bins.map((bin) => bin.count)];

    c3.generate({
      bindto: chartRef.current,
      data: {
        columns: [counts],
        type: 'bar',
      },
      color: { pattern: ['#F18989'] },
      axis: {
        x: {
          type: 'category',
          categories,
          label: { text: 'Sequence Length', position: 'outer-center' },
          tick: { rotate: 75, multiline: false, outer: false },
          height: 80,
        },
        y: {
          label: { text: 'Count', position: 'outer-middle' },
          tick: { outer: false },
        },
      },
      bar: { width: { ratio: 1 } },
      legend: { show: false },
      size: { width: 350, height: 280 },
      padding: { top: 0, right: 0, bottom: 0, left: 50 },
      tooltip: { show: true }, // 建議加上 tooltip
    });

    // === Plotly: Violin Plot of Predicted Log MIC ===
    const trace = {
      type: 'violin',
      y: predictedMICs,
      box: { visible: true },
      line: { color: '#636EFA' },
      fillcolor: 'rgba(99, 110, 250, 0.5)',
      meanline: { visible: true },
      name: 'Predicted Log MIC',
      hovertemplate: 'Log MIC: %{y:.2f}<extra></extra>',
    };

    const layout = {
      margin: { l: 70, r: 20, t: 0, b: 50 },
      width: 400,
      height: 300,
      yaxis: {
        title: {
          text: 'Predicted Log MIC (unit: uM)',
          font: { family: 'Arial, sans-serif', size: 14, color: '#000' },
        },
        zeroline: false,
      },
    };

    Plotly.newPlot(violinRef.current, [trace], layout, { displayModeBar: false });
  }, [bins, predictedMICs]);

  // === 匯出資料為 CSV 檔案 ===
  const convertToCSV = (tableData) => {
    // 檢查哪些 target 實際存在資料
    const hasEColi = tableData.some((item) => item.eColi !== undefined && item.eColi !== null);
    const hasSAureus = tableData.some((item) => item.sAureus !== undefined && item.sAureus !== null);
    const hasPAeruginosa = tableData.some((item) => item.pAeruginosa !== undefined && item.pAeruginosa !== null);

    // 基本欄位
    const headers = ['ID', 'Sequence', 'Sequence Length'];
    if (hasEColi) headers.push('E. coli');
    if (hasSAureus) headers.push('S. aureus');
    if (hasPAeruginosa) headers.push('P. aeruginosa');

    // 建立每列
    const rows = tableData.map((item) => {
      const row = [item.id, item.sequence, item.sequenceLength];
      if (hasEColi) row.push(item.eColi !== null && item.eColi !== undefined ? item.eColi.toFixed(3) : '-');
      if (hasSAureus) row.push(item.sAureus !== null && item.sAureus !== undefined ? item.sAureus.toFixed(3) : '-');
      if (hasPAeruginosa) row.push(item.pAeruginosa !== null && item.pAeruginosa !== undefined ? item.pAeruginosa.toFixed(3) : '-');
      return row;
    });

    // 組合成 CSV 字串
    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  };

  const convertToJSON = (tableData) => {
    // 只保留有值的 target 欄位
    return JSON.stringify(
      tableData.map((item) => {
        const obj = {
          ID: item.id,
          Sequence: item.sequence,
          "Sequence Length": item.sequenceLength,
        };
        if (item.eColi !== undefined && item.eColi !== null) obj["E. coli"] = item.eColi.toFixed(3);
        if (item.sAureus !== undefined && item.sAureus !== null) obj["S. aureus"] = item.sAureus.toFixed(3);
        if (item.pAeruginosa !== undefined && item.pAeruginosa !== null) obj["P. aeruginosa"] = item.pAeruginosa.toFixed(3);
        return obj;
      }),
      null,
      2
    );
  };

  const handleExport = (e) => {
    e.preventDefault();
    const csvText = convertToCSV(tableData);
    const blob = new Blob([csvText], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${projectName || 'peptides'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportJSON = (e) => {
    e.preventDefault();
    const jsonText = convertToJSON(tableData);
    const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${projectName || 'peptides'}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // === 設定網頁標題（動態根據 projectName）===
  useEffect(() => {
    document.title = projectName ? `Prediction Result - ${projectName}` : 'Prediction Result';
  }, [projectName]);

  // === 回傳畫面 UI ===
  return (
    <>
      <WelcomeBanner />
      <div className="container py-5">
        {/* Summary 區塊 */}
        <div className="border border-3 border-secondary rounded-4 shadow-sm mb-4">
          <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
            <h2 className="ps-4 h4 fs-bold">Prediction Summary</h2>
          </div>
          <div className="bg-white pt-4 px-4 pb-1 mb-2">
            <div className="row">
              {/* 統計摘要 */}
              <div className="col-lg-4 col-12">
                <ul
                  className="list-unstyled border-start ps-3 border-3 border-primary"
                  style={{ fontSize: '1rem' }}
                >
                  <li>
                    <strong>Project ID: </strong>
                    {projectName}
                  </li>
                  <li>
                    <strong>Target: </strong>
                    {target}
                  </li>
                  <li>
                    <strong>Number of sequences: </strong>
                    {tableData.length}
                  </li>
                  <li>
                    <strong>Sequence Length: </strong>
                    {minLen} ~ {maxLen}
                  </li>
                  <li>
                    <strong>Low MIC count: </strong>
                    {lowCount} (log MIC &lt; 1)
                  </li>
                  <li>
                    <strong>High MIC count: </strong>
                    {highCount} (log MIC &gt; 2)
                  </li>
                  <TopPeptidesViewer topPeptides={topPeptides} />
                </ul>
              </div>

              {/* Sequence Length 分佈圖 */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="text-center mb-2" style={{ fontSize: '1.2rem' }}>
                  <strong>Sequence Length Distribution</strong>
                </div>
                <div ref={chartRef}></div>
              </div>

              {/* Violin Plot 圖 */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="text-center mb-2 ms-8" style={{ fontSize: '1.2rem' }}>
                  <strong>Predicted Log MIC</strong>
                </div>
                <div ref={violinRef}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 結果表格區塊 */}
        <div className="border border-3 border-secondary rounded-4 shadow-sm">
          <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
            <h2 className="ps-4 h4 fs-bold">ANIA Predictions - Detailed Results for Each Peptide</h2>
          </div>
          <div className="bg-white p-4 custom-table">
            <table className="custom-table-secondary table-hover table table-striped">
              <thead className="text-center">
                <tr>
                  <th style={{ width: '13%' }} className="fw-bold fs-5">
                    ID<span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th style={{ width: '48%' }} className="fw-bold fs-5">
                    Sequence<span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th style={{ width: '12%' }} className="fw-bold fs-5">
                    <em>E. coli</em> 
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th style={{ width: '12%' }} className="fw-bold fs-5">
                    <em>S. aureus</em> 
                    <span className="float-end text-success fw-lighter opacity-25">|</span>
                  </th>
                  <th style={{ width: '15%' }} className="fw-bold fs-5">
                    <em>P. aeruginosa</em> 
                  </th>
              </tr>
              </thead>
              <tbody className="text-center align-middle">
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td className="text-break" style={{ fontFamily: 'monospace' }}>
                      {data.sequence}
                    </td>
                    <td>
                      {data.eColi !== undefined && data.eColi !== null
                        ? data.eColi.toFixed(3)
                        : '–'}
                    </td>
                    <td>
                      {data.sAureus !== undefined && data.sAureus !== null
                        ? data.sAureus.toFixed(3)
                        : '–'}
                    </td>
                    <td>
                      {data.pAeruginosa !== undefined && data.pAeruginosa !== null
                        ? data.pAeruginosa.toFixed(3)
                        : '–'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 匯出按鈕 */}
          <div
            className="mt-4 pe-4 p-2 d-flex justify-content-end custom-border-bottom"
            style={{ backgroundColor: '#F9FAFB' }}
          >
            <HoverIconButton
              label="Export .json"
              defaultIcon="img/file_white.png"
              hoverIcon="img/file_white.png"
              className="btn btn-primary btn-lg text-white me-3"
              onClick={handleExportJSON}
              iconStyle={{
                marginLeft: '-5px',
                marginRight: '2px',
                transform: 'translateY(-1.5px)',
              }}
            />
            <HoverIconButton
              label="Export .csv"
              defaultIcon="img/file_white.png"
              hoverIcon="img/file_white.png"
              className="btn btn-primary btn-lg text-white"
              onClick={handleExport}
              iconStyle={{
                marginLeft: '-2px',
                marginRight: '8px',
                transform: 'translateY(-2.0px)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
