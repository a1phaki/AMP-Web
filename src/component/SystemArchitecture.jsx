// src/component/SystemArchitecture.jsx
export default function SystemArchitecture() {
  return (
    <div className="border border-3 border-secondary rounded-4 shadow-sm">
      <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
        <h2 className="ps-4 h4 fw-medium">System Architecture</h2>
      </div>
      <div className="px-5 py-4 bg-white rounded-bottom-3">
        <p className="mb-3 lh-lg">
          The architecture below illustrates the end-to-end design of the 
          <span className="fw-semibold text-primary"> ANIA platform</span>, supporting AMP sequence submission, 
          feature encoding, and MIC prediction via a deep learning model.
        </p>
        <div className="mb-3 bg-light bg-white p-3 rounded-3 border">
            <img
                src="img/SystemArchitecture.png"
                className="img-fluid rounded-2 d-block mx-auto"
                alt="System Architecture Diagram"
            />
        </div>
      </div>
    </div>
  );
}
