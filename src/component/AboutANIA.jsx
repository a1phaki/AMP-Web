export default function AboutANIA() {
  return (
    <>
      <div className="pt-3  pb-2 custom-border-top bg-secondary">
        <h2 className="ps-5 h5 fw-medium">About ANIA</h2>
      </div>
      <div className="px-5 py-4 bg-white custom-border-bottom flex-grow-1">
        <h5 className="fw-normal">
          The overuse of antibiotics has led to significant microbial resistance, necessitating
          alternative therapies. Antimicrobial peptides (AMPs) are small proteins effective against
          various pathogens, making them promising candidates for new anti-infective drugs. This
          study proposed an encoding method for AMP sequences using Chaos Game Representation (CGR)
          and protein language model embeddings. These methods converted the sequences into
          frequency matrices resembling image features. These matrices served as input for
          Convolutional Neural Networks (CNNs) with Inception Modules to capture local features. The
          extracted features were then processed by a Transformer model to predict MIC values for
          Staphylococcus aureus, Escherichia coli, and Pseudomonas aeruginosa.
        </h5>
      </div>
    </>
  );
}
