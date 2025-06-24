import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import WelcomeBanner from '../component/WelcomeBanner';

export default function Tutor() {
  const { register } = useForm();

  const [selectedOption, setSelectedOption] = useState('');

  const handelOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const ModalOption = ['E. coli', 'S. aureus', 'P. aerugionsa'];
  return (
    <>
      <WelcomeBanner />
      <div className="container py-5 ">
        <div className="border border-3 border-secondary rounded-4 shadow-sm">
          <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
            <h2 className="ps-4 h4 fw-medium">User Guide</h2>
          </div>
          <div className="px-5 py-4 bg-white custom-border-bottom">
            <div className="row d-flex align-items-stretch g-4">
              <div className="col-12 col-lg-6  d-flex flex-column">
                <div className="p-4 bg-info custom-border flex-grow-1">
                  <h4 className="text-primary">1. Protein Sequence</h4>
                  <p>
                    Firstly, input the protein sequence in the text box (in Fasta format), or upload
                    a Fasta file.
                  </p>
                  <h5 className="pb-2">Input the protein sequence</h5>
                  <div className="custom-border bg-dark mb-3">
                    <div className="custom-border custom-box w-100 d-flex align-items-center">
                      <div className="d-block h-50 w-75 bg-danger ms-7"></div>
                    </div>
                  </div>
                  <h5 className="pb-2">OR Upload a Fasta file</h5>
                  <div className="custom-select-file border-0 my-3 d-flex align-items-center bg-dark custom-border">
                    <div className="custom-border border-1 border-danger border ms-7">
                      <InsertDriveFileIcon className="m-3" sx={{ color: '#F38986' }} />
                    </div>
                    <div className="ps-3 file-info">
                      <h4 className="mb-0">ANIAData.fasta</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column">
                <div className="p-4 bg-light custom-border flex-grow-1">
                  <h4 className="text-primary">2. Functional Activity</h4>
                  <p>
                    Then, choose whether to predict the antibacterial peptide (ABP) activity against
                    a single bacterium.
                  </p>
                  <h5 className="pb-2">Select type</h5>
                  <div className="row">
                    {ModalOption.map((option, index) => (
                      <div className="col-4" key={index}>
                        <div
                          className={`custom-border custom-hover form-check border-1 py-2 border ${
                            selectedOption === option ? 'bg-info border-primary' : ''
                          }`}
                        >
                          <label style={{ display: 'block' }} className="form-check-label ms-2">
                            <input
                              type="radio"
                              value={option}
                              {...register('target', {
                                required: true,
                                onChange: (e) => handelOption(e),
                              })}
                              className="form-check-input "
                              name="target"
                            />
                            {option}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column">
                <div className="p-4 bg-light custom-border flex-grow-1">
                  <h4 className="text-primary">3. Project&apos;s name</h4>
                  <p>Finally, we allow users to input the project&apos;s name.</p>
                  <h5 className="pb-2">Input the project&apos;s name</h5>
                  <div className="custom-border bg-dark mb-3">
                    <div className="custom-border custom-box w-100 d-flex align-items-center">
                      <div className="d-block h-50 w-75 bg-danger ms-7"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column">
                <div className="p-4 bg-info custom-border flex-grow-1">
                  <h4 className="text-primary">4. Start ANIA</h4>
                  <p>
                    And then click the &quot;Start ANIA&quot; button to execute the prediction task.
                    The specific process is shown in the following diagram.
                  </p>
                  <h5 className="pb-2">Click Start ANIA </h5>
                  <div className="custom-border bg-dark mb-3">
                    <div className="custom-border custom-box w-100 d-flex align-items-center justify-content-center custom-relative">
                      <div className="custom-btn">
                        <div className="btn btn-primary btn-lg">Start ANIA </div>
                        <FontAwesomeIcon icon={faArrowPointer} size="xl" className="custom-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="border border-3 border-secondary rounded-4 shadow-sm">
          <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
            <h2 className="ps-4 h4 fw-medium">Input FASTA Format</h2>
          </div>
          <div className="px-5 py-4 bg-white custom-border-bottom">
            <p
              className="mb-3 lh-lg"
              style={{ fontSize: '1.3rem', lineHeight: '1.8', textAlign: 'justify' }}
            >
              The FASTA format is a text-based format for representing nucleotide or peptide
              sequences. Each entry begins with a <code>&gt;</code> symbol followed by a sequence
              identifier, and the actual amino acid sequence is listed in the lines that follow.
            </p>
            <h5 className="pt-0 pb-2">Example:</h5>
            <div className="custom-border bg-light px-3 py-3 rounded-2">
              <pre className="mb-0" style={{ fontFamily: 'monospace', fontSize: '16px' }}>
                {`>DBAASP_5613
AAAAAAAAAAGIGKFLHSAKKFGKAFVGEIMNS
>DBAASP_11942
AAAARRRR
>DBAASP_13251
AAARLRLLLYLITRR`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
