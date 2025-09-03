function ToolCard() {
  const tool = {
    icon: 'img/Logo2.png',
    borderColor: '#7fc4f6',
    bgColor: '#f38986',
    title: 'ANIA',
    description:
      'A deep learning model for predicting MIC values of antimicrobial peptides using CGR-based sequence representation',
  };

  return (
    <div className="rounded-4 mx-0 mt-4 pb-0 mb-4">
      <div className="bg-white">
        <div className="row align-items-center">
          <div className="col-auto">
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                backgroundColor: tool.bgColor,
                border: `2px solid ${tool.borderColor}`,
                overflow: 'hidden',
              }}
            >
              <img
                src={tool.icon}
                alt="ANIA icon"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col">
            <h5 className="mt-1 mb-1 fw-bold" style={{ fontSize: '1.8rem' }}>
              {tool.title}
            </h5>
            <p className="text-muted mb-0" style={{ fontSize: '1.2rem', textAlign: 'justify' }}>
              {tool.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
