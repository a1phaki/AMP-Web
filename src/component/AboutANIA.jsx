export default function AboutANIA(){
    return(
        <>
            <div className='container py-5 bg-success'>
                <div className="row mx-1 d-flex align-items-stretch">
                    <div className="col-6 d-flex flex-column">
                        <div className='pt-3  pb-2 custom-border-top bg-secondary' >
                            <h2 className='ps-5 h5 fw-medium'>About ANIA</h2>
                        </div>
                        <div className="px-5 py-4 bg-white custom-border-bottom flex-grow-1">
                            <h5 className="fw-normal">
                            The overuse of antibiotics has led to significant microbial resistance, necessitating alternative therapies. Antimicrobial peptides (AMPs) are small proteins effective against various pathogens, making them promising candidates for new anti-infective drugs. This study proposed an encoding method for AMP sequences using Chaos Game Representation (CGR) and protein language model embeddings. These methods converted the sequences into frequency matrices resembling image features. These matrices served as input for Convolutional Neural Networks (CNNs) with Inception Modules to capture local features. The extracted features were then processed by a Transformer model to predict MIC values for Staphylococcus aureus, Escherichia coli, and Pseudomonas aeruginosa.
                            </h5>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <div className='pt-3  pb-2 custom-border-top bg-secondary' >
                            <h2 className='ps-5 h5 fw-medium'>Work Flow</h2>
                        </div>
                        <div className="px-5 py-4 bg-white custom-border-bottom flex-grow-1">
                            <h5 className="fw-normal mb-3">The workflow of ANIA is shown in the figure below.</h5>
                            <img src="img/Workflow.png" className="object-fit-cover" width='100%' alt="主圖" />
                        </div>
                    </div>
                </div>
                <div className="row mx-1 mt-9">
                    <div className="col">
                        <div className='pt-3  pb-2 custom-border-top bg-secondary' >
                            <h2 className='ps-5 h5 fw-medium'>Performance</h2>
                        </div>
                        <div className="px-5 py-4 bg-white custom-border-bottom">
                            <h4 className="text-primary mb-1">
                                Stage 1<span className="ps-4 text-dark fw-light">Distinguish between ABP and non-ABP</span>
                            </h4>
                            <div className='bg-white py-4'>
                                <table className='custom-table-secondary  table table-striped '>
                                    <thead>
                                        <tr>
                                            <th scope="col" width='20%' className="pe-0 fw-normal">Method 
                                                <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                            </th>
                                            <th scope="col" width='16%' className="pe-0 fw-normal">Accuracy
                                                <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                            </th>
                                            <th scope="col" width='16%' className="pe-0 fw-normal">Specificity
                                                <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                            </th>
                                            <th scope="col" width='16%' className="pe-0 fw-normal">Sensitivity
                                                <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                            </th>
                                            <th scope="col" width='16%' className="pe-0 fw-normal">GMean
                                                <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                            </th>
                                            <th scope="col" width='16%' className="fw-normal">GMean</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">AI4AMP</td>
                                            <td>0.732</td>
                                            <td>0.645</td>
                                            <td>0.861</td>
                                            <td>0.745</td>
                                            <td>0.500</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">AI4AMP</td>
                                            <td>0.732</td>
                                            <td>0.645</td>
                                            <td>0.861</td>
                                            <td>0.745</td>
                                            <td>0.500</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">AI4AMP</td>
                                            <td>0.732</td>
                                            <td>0.645</td>
                                            <td>0.861</td>
                                            <td>0.745</td>
                                            <td>0.500</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">AI4AMP</td>
                                            <td>0.732</td>
                                            <td>0.645</td>
                                            <td>0.861</td>
                                            <td>0.745</td>
                                            <td>0.500</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">AI4AMP</td>
                                            <td>0.732</td>
                                            <td>0.645</td>
                                            <td>0.861</td>
                                            <td>0.745</td>
                                            <td>0.500</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">AI4AMP</td>
                                            <td>0.732</td>
                                            <td>0.645</td>
                                            <td>0.861</td>
                                            <td>0.745</td>
                                            <td>0.500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}