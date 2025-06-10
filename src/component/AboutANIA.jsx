export default function AboutANIA() {
  return (
    <div className="border border-3 border-secondary rounded-4">
      <div className="pt-3  pb-2 custom-border-top bg-secondary">
        <h2 className="ps-5 h5 fw-medium">About ANIA</h2>
      </div>
      <div className="px-5 py-4 bg-white custom-border-bottom flex-grow-1">
        <h5 className="fw-normal">
          In this study, we proposed ANIA, a deep learning framework designed to predict the minimum
          inhibitory concentration (MIC) values of antimicrobial peptides (AMPs) against three
          clinically relevant bacterial species: Staphylococcus aureus, Escherichia coli, and
          Pseudomonas aeruginosa. To effectively model the spatial and contextual patterns embedded
          within peptide sequences, ANIA integrates a hybrid deep neural architecture comprising
          stacked Inception modules and Transformer encoders, enabling simultaneous extraction of
          local motifs and global sequence dependencies. Incorporating Frequency Chaos Game
          Representation (FCGR) as a spatial encoding strategy, the model transforms peptide
          sequences into structured image-like representations that preserve k-mer distribution and
          positional context. This design allows ANIA to leverage the strengths of convolutional and
          attention-based learning in modeling antimicrobial activity. To enhance interpretability,
          ANIA includes multiple analytical modules—such as Grad-CAM visualizations, correlation
          mapping, motif frequency enrichment, and hydrophobicity profiling—allowing users to
          identify salient regions and physicochemical properties associated with low MIC values.
        </h5>
      </div>
    </div>
  );
}
