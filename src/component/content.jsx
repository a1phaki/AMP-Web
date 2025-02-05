function Content() {
    return (
        <>
            <div className=" bg-success px-3 py-5">
                <div className="bg-white custom-border">
                    <div className="d-flex justify-content-center py-5">
                        <img src="img/Workflow.png" className="object-fit-cover px-5" width='100%' alt="主圖" />
                    </div>
                    <h4 className="pb-5 px-5">
                    The overuse of antibiotics has led to significant microbial resistance, necessitating alternative therapies. Antimicrobial peptides (AMPs) are small proteins effective against various pathogens, making them promising candidates for new anti-infective drugs. This study proposed an encoding method for AMP sequences using Chaos Game Representation (CGR) and protein language model embeddings. These methods converted the sequences into frequency matrices resembling image features. These matrices served as input for Convolutional Neural Networks (CNNs) with Inception Modules to capture local features. The extracted features were then processed by a Transformer model to predict MIC values for Staphylococcus aureus, Escherichia coli, and Pseudomonas aeruginosa.
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Content