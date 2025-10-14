export default function AboutANIA() {
  return (
    <div className="border border-3 border-secondary rounded-4 shadow-sm">
      <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
        <h2 className="ps-4 h4 fw-medium">About ANIA</h2>
      </div>
      <div className="px-5 py-4 bg-white rounded-bottom-3">
        <div className="d-flex justify-content-center py-2 mx-2">
          <img src="img/Workflow.png" className="object-fit-cover" width="100%" alt="主圖" />
        </div>
        <p
          className=" mb-2  text-sm-start text-justify"
          style={{ fontSize: '1rem', lineHeight: '1.8' }}
        >
          In this study, we proposed <span className="fw-semibold text-primary">ANIA</span>, a deep
          learning framework designed to predict the{' '}
          <span className="fw-semibold text-primary">minimum inhibitory concentration (MIC)</span>{' '}
          values of
          <span className="fw-semibold text-primary"> antimicrobial peptides (AMPs)</span> against
          three clinically relevant bacterial species:
          <em> Staphylococcus aureus</em>, <em> Escherichia coli</em>, and{' '}
          <em> Pseudomonas aeruginosa</em>. ANIA integrates a hybrid neural architecture comprising
          stacked <span className="fw-semibold text-primary">Inception modules</span> and
          <span className="fw-semibold text-primary"> Transformer encoders</span>, enabling the
          simultaneous extraction of local motifs and global contextual dependencies from peptide
          sequences. This design effectively captures both spatial and sequential information
          critical for accurate MIC prediction.
        </p>
        {/* <div className="d-flex justify-content-center py-2 mx-2">
          <img src="img/Workflow.png" className="object-fit-cover" width="100%" alt="主圖" />
        </div> */}
      </div>
    </div>
  );
}
