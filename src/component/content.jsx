function Content() {
  return (
    <>
      <div className="border border-3 border-secondary py-3 rounded-4 mt-0">
        <div className="bg-white custom-border">
          <div className="d-flex justify-content-center py-2 mx-2">
            <img src="img/Workflow.png" className="object-fit-cover" width="85%" alt="主圖" />
          </div>
          <h4 className="mt-2 mb-2 ms-8 me-8 pt-1 px-6" style={{ textAlign: 'justify', fontSize: '1.1rem', lineHeight: '1.8',}}>
            In this study, we proposed <strong>ANIA</strong>, a deep learning framework 
            designed to predict the <strong>minimum inhibitory concentration (MIC)</strong>{' '}values of 
            <strong> antimicrobial peptides (AMPs)</strong>{' '}against three clinically relevant bacterial species:{' '}
            <strong>Staphylococcus aureus</strong>, <strong>Escherichia coli</strong>, and 
            <strong> Pseudomonas aeruginosa</strong>. ANIA integrates a hybrid neural architecture comprising 
            stacked Inception modules and Transformer encoders, enabling the simultaneous extraction of local motifs 
            and global contextual dependencies from peptide sequences. This design effectively captures both spatial 
            and sequential information critical for accurate MIC prediction.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Content;