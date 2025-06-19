export default function Content() {
  return (
    <div className="border border-3 border-secondary rounded-4 shadow-sm">
      <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
        <h2 className="ps-4 h4 fw-medium">Overview of ANIA</h2>
      </div>
      <div className="px-5 py-4 bg-white rounded-bottom-3">
        <div className="mb-3 bg-light bg-white p-3 rounded-3 border">
          <img
            src="img/Workflow.png"
            className="img-fluid rounded-2 d-block mx-auto"
            alt="ANIA Workflow"
          />
        </div>
        <p 
          className="mb-3 lh-lg"
          style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'justify' }}
        >
          In this study, we proposed <span className="fw-semibold text-primary">ANIA</span>, a deep learning framework 
          designed to predict the <span className="fw-semibold text-primary">minimum inhibitory concentration (MIC)</span> values of 
          <span className="fw-semibold text-primary"> antimicrobial peptides (AMPs)</span> against three clinically relevant bacterial species: 
          <em> Staphylococcus aureus</em>, <em> Escherichia coli</em>, and <em> Pseudomonas aeruginosa</em>. 
          ANIA integrates a hybrid neural architecture comprising stacked <span className="fw-semibold text-primary">Inception modules</span> and 
          <span className="fw-semibold text-primary"> Transformer encoders</span>, enabling the simultaneous extraction of local motifs 
          and global contextual dependencies from peptide sequences. This design effectively captures both spatial 
          and sequential information critical for accurate MIC prediction.
        </p>
      </div>
    </div>
  );
}
