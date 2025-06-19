function Loading({ progress = 0 }) {
  const isFinished = progress >= 100;
  const displayText = isFinished ? 'Prediction complete!' : 'Processing...';

  return (
    <div
      className="position-fixed d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(255, 255, 255, 0.85)',
        zIndex: 1048,
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {/* 提示文字 */}
      <div
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#333',
          marginBottom: '20px',
        }}
      >
        {isFinished ? 'Finishing up...' : 'Analyzing AMP Sequences...'}
      </div>

      {/* 進度條 */}
      <div style={{ width: '90%' }}>
        <div className="progress" style={{ height: '2.5rem' }}>
          <div
            className={`progress-bar ${
              isFinished ? 'bg-success' : 'bg-primary progress-bar-striped progress-bar-animated'
            }`}
            style={{
              width: `${progress}%`,
              fontSize: '1.2rem',       // ⬅️ 這裡調整文字大小
              fontWeight: 600,
            }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {displayText} ({progress}%)
          </div>
        </div>
      </div>

      {/* ✅ 完成後顯示一個小提示訊息 */}
      {isFinished && (
        <div
          className="mt-4 text-success"
          style={{
            fontSize: '1.1rem',
            animation: 'fadeIn 1s ease-in-out',
          }}
        >
          ✅ Completed! Redirecting to results page...
        </div>
      )}

      {/* ✅ 加入淡入動畫 */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Loading;
