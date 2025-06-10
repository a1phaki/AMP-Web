function Content() {
  return (
    <>
      <div className="border border-3 border-secondary py-4 rounded-4 mt-5">
        <div className="bg-white custom-border">
          <div className="d-flex justify-content-center py-3 mx-5">
            <img src="img/Workflow.png" className="object-fit-cover" width="90%" alt="主圖" />
          </div>
          <h4 className="pb-3 pt-4 px-5 " style={{ textAlign: 'justify' }}>
            In this study, we proposed ANIA, a deep learning framework designed to predict the
            minimum inhibitory concentration (MIC) values of antimicrobial peptides (AMPs) against
            three clinically relevant bacterial species: Staphylococcus aureus, Escherichia coli,
            and Pseudomonas aeruginosa. To effectively model the spatial and contextual patterns
            embedded within peptide sequences, ANIA integrates a hybrid deep neural architecture
            comprising stacked Inception modules and Transformer encoders, enabling simultaneous
            extraction of local motifs and global sequence dependencies. Incorporating Frequency
            Chaos Game Representation (FCGR) as a spatial encoding strategy, the model transforms
            peptide sequences into structured image-like representations that preserve k-mer
            distribution and positional context. This design allows ANIA to leverage the strengths
            of convolutional and attention-based learning in modeling antimicrobial activity. To
            enhance interpretability, ANIA includes multiple analytical modules—such as Grad-CAM
            visualizations, correlation mapping, motif frequency enrichment, and hydrophobicity
            profiling—allowing users to identify salient regions and physicochemical properties
            associated with low MIC values.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Content;
