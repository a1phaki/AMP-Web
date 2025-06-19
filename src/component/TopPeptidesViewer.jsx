import { useState } from 'react';

function TopPeptidesViewer({ topPeptides }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPeptide = topPeptides[selectedIndex];

  return (
    <div className="mt-3">
      <div className="border rounded bg-light" style={{ fontSize: '1.0rem' }}>
        <div 
          className="border-bottom px-3 py-2 d-flex align-items-center justify-content-between text-white rounded-top"
          style={{ backgroundColor: '#fcc2b8' }}
        >
          <strong className="me-2">Top-ranked peptide</strong>
          <select
            className="form-select form-select-sm w-auto"
            style={{ fontWeight: 'bold', fontSize: '1.0rem' }}
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
          >
            {topPeptides.map((_, i) => (
              <option key={i} value={i}>
                Top {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="px-3 py-2" style={{ lineHeight: '1.5' }}>
          <div className="d-flex">
            <strong className="me-2">ID:</strong>
            <span>{selectedPeptide.id}</span>
          </div>
          <div className="d-flex">
            <strong className="me-2">Sequence:</strong>
            <span
              title={selectedPeptide.sequence}
              style={{
                maxWidth: '180px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {selectedPeptide.sequence}
            </span>
          </div>
          <div className="d-flex">
            <strong className="me-2">Length:</strong>
            <span>{selectedPeptide.sequenceLength}</span>
          </div>
          <div className="d-flex">
            <strong className="me-2">Log MIC:</strong>
            <span>{parseFloat(selectedPeptide.predictedLogMIC).toFixed(2)} (uM)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPeptidesViewer;
