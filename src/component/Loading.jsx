function Loading() {
  return (
    <>
      <div
        className="position-fixed d-flex align-items-center justify-content-center"
        style={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: 'rgba(110, 94, 87, 0.3)',
          zIndex: 1048,
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Loading;
