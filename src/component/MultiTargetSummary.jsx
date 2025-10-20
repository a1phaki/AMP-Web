import { useState, useRef, useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';
import TopPeptidesViewer from './TopPeptidesViewer';

function MultiTargetSummary({ projectName, allTargetsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const violinRef = useRef(null);

  const currentData = allTargetsData[currentIndex];
  const { target, tableData, minLen, maxLen, lowCount, highCount, topPeptides, predictedMICs } =
    currentData;

  useEffect(() => {
    if (!predictedMICs || predictedMICs.length === 0) return;

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
      margin: { l: 70, r: 20, t: 10, b: 50 },
      width: 420,
      height: 300,
      yaxis: {
        title: {
          text: 'Predicted Log MIC (unit: µM)',
          font: { family: 'Arial, sans-serif', size: 13, color: '#000' },
        },
        zeroline: false,
      },
    };

    Plotly.newPlot(violinRef.current, [trace], layout, { displayModeBar: false });
  }, [predictedMICs]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allTargetsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === allTargetsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="border border-3 border-secondary rounded-4 shadow-sm mb-4 position-relative">
      <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3 d-flex justify-content-between align-items-center">
        <button
          className="btn btn-light btn-sm fw-bold"
          onClick={handlePrev}
          style={{ width: '36px' }}
        >
          &lt;
        </button>
        <h2 className="h4 mb-0 text-white">Prediction Summary - {target}</h2>
        <button
          className="btn btn-light btn-sm fw-bold"
          onClick={handleNext}
          style={{ width: '36px' }}
        >
          &gt;
        </button>
      </div>

      <div className="bg-white pt-3 px-4 pb-2">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <ul
              className="list-unstyled border-start ps-3 border-3 border-primary"
              style={{ fontSize: '0.95rem', lineHeight: '1.5rem' }}
            >
              <li><strong>Project ID:</strong> {projectName}</li>
              <li><strong>Number of sequences:</strong> {tableData.length}</li>
              <li><strong>Sequence Length:</strong> {minLen} ~ {maxLen}</li>
              <li><strong>Low MIC count:</strong> {lowCount} (log MIC &lt; 1)</li>
              <li><strong>High MIC count:</strong> {highCount} (log MIC &gt; 2)</li>
            </ul>

            <div className="mt-3">
              <h6 className="fw-bold mb-2">Top 10 Lowest Predicted MIC Peptides</h6>
              <TopPeptidesViewer topPeptides={topPeptides} />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">
            <div className="text-center mb-2" style={{ fontSize: '1.1rem' }}>
              <strong>Predicted Log MIC Distribution</strong>
            </div>
            <div ref={violinRef} style={{ width: '100%', maxWidth: '420px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiTargetSummary;
