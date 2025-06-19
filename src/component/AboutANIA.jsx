export default function AboutANIA() {
  return (
    <div className="border border-3 border-secondary rounded-4 shadow-sm">
      <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
        <h2 className="ps-4 h4 fw-medium">About ANIA</h2>
      </div>
      <div className="px-5 py-4 bg-white rounded-bottom-3 fs-6">
        <p 
          className="mb-3 lh-lg"
          style={{ fontSize: '1.0rem', lineHeight: '1.8', textAlign: 'justify' }}  
        >
          In this study, we proposed <span className="text-primary fw-semibold">ANIA</span>, a deep learning framework designed to predict the 
          <span className="text-primary fw-semibold"> minimum inhibitory concentration (MIC)</span> values of antimicrobial peptides (AMPs) against three 
          clinically relevant bacterial species: <em>Staphylococcus aureus</em>, <em>Escherichia coli</em>, and <em>Pseudomonas aeruginosa</em>.
        </p>
        <p 
          className="mb-3 lh-lg"
          style={{ fontSize: '1.0rem', lineHeight: '1.8', textAlign: 'justify' }}  
        >
          To effectively model the spatial and contextual patterns embedded within peptide sequences, 
          ANIA integrates a hybrid neural architecture comprising stacked 
          <span className="text-primary fw-semibold"> Inception modules</span> and 
          <span className="text-primary fw-semibold"> Transformer encoders</span>, enabling simultaneous extraction of 
          local motifs and global dependencies.
        </p>
        <p 
          className="mb-3 lh-lg"
          style={{ fontSize: '1.0rem', lineHeight: '1.8', textAlign: 'justify' }}  
        >
          Incorporating <span className="text-primary fw-semibold">Frequency Chaos Game Representation (FCGR)</span> as a spatial encoding strategy, 
          the model transforms sequences into image-like matrices preserving <span className="text-primary fw-semibold">k-mer distribution</span> and 
          positional context.
        </p>
        <p 
          className="mb-3 lh-lg"
          style={{ fontSize: '1.0rem', lineHeight: '1.8', textAlign: 'justify' }}  
        >
          To enhance interpretability, ANIA includes multiple analytical modules—such as 
          <span className="text-primary fw-semibold"> Grad-CAM</span> visualizations, 
          <span className="text-primary fw-semibold"> correlation mapping</span>, 
          <span className="text-primary fw-semibold"> motif enrichment</span>, and 
          <span className="text-primary fw-semibold"> hydrophobicity profiling</span>—helping users identify salient regions and 
          physicochemical properties associated with <span className="fw-semibold text-primary">low MIC values</span>.
        </p>
      </div>
    </div>
  );
}
