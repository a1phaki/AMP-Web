import { Mail, MapPin, Github, User } from 'lucide-react';
import WelcomeBanner from '../component/WelcomeBanner';

export default function Contact() {
  return (
    <>
        <WelcomeBanner />
        <div className="container py-5">
            <div className="border border-3 border-secondary rounded-4 shadow-sm">
                {/* Header */}
                <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
                    <h2 className="ps-4 h4 fw-bold">Contact Us</h2>
                </div>

                {/* Content */}
                <div className="px-4 py-4 bg-white">
                    {/* Intro */}
                    <p className="lh-lg mb-3 me-3 ms-3" style={{ fontSize: '1.2rem', textAlign: 'justify' }}>
                        If you have any questions regarding AMP-MIC prediction, dataset usage, or would like to collaborate,
                        feel free to reach out to us through the contact information below.
                    </p>

                    {/* Contact Info */}
                    <div className="card border-0 shadow-sm rounded-4 bg-light mb-4">
                        <div className="card-body p-4 px-md-5 d-flex flex-column gap-4">
                            {/* Name */}
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white p-2 border rounded-circle">
                                    <User className="text-primary" size={24} />
                                </div>
                                <div className="fs-5 fw-medium">
                                    <strong>Name:</strong> Yen-Peng Chiu
                                </div>
                            </div>
                            {/* Email */}
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white p-2 border rounded-circle">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div className="fs-5 fw-medium">
                                    <strong>Email:</strong> &nbsp;
                                    <a href="mailto:SilverGojo4@gmail.com" className="text-decoration-none text-primary">
                                        SilverGojo4@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* Institute */}
                            {/* Institute with Link */}
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white p-2 border rounded-circle">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div className="fs-5 fw-medium">
                                    <strong>Institute:</strong> &nbsp;
                                    <a
                                    href="https://www.cs.nycu.edu.tw/intro/organization/data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-decoration-none text-primary"
                                    >
                                    Institute of Data Science and Engineering, NYCU
                                    </a>
                                </div>
                            </div>
                            {/* GitHub */}
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white p-2 border rounded-circle">
                                    <Github className="text-primary" size={24} />
                                </div>
                                <div className="fs-5 fw-medium">
                                    <strong>GitHub:</strong> &nbsp;
                                    <a
                                        href="https://github.com/SilverGojo4/AMP-MIC"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-decoration-none text-primary"
                                    >
                                        github.com/SilverGojo4/AMP-MIC
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <hr />
                    <h5 className="fw-bold mb-3">Frequently Asked Questions (FAQ)</h5>
                    <div className="card border-0 shadow-sm rounded-4 bg-light mb-4">
                        <div className="card-body p-4 px-md-5 d-flex flex-column gap-4">

                            {/* Q1 */}
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-white p-2 border rounded-circle">
                                    <span className="fw-bold text-primary" style={{ fontSize: '1.2rem' }}>Q</span>
                                </div>
                                <div className="fs-5 fw-medium" style={{ color: '#000' }}>
                                    <strong>Can I use this dataset for my research?</strong><br />
                                    <span className="fw-normal">
                                        Yes, all datasets are available for academic use. Please cite our paper if used in publications.
                                    </span>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-white p-2 border rounded-circle">
                                    <span className="fw-bold text-primary" style={{ fontSize: '1.2rem' }}>Q</span>
                                </div>
                                <div className="fs-5 fw-medium" style={{ color: '#000' }}>
                                    <strong>Who should I contact for collaboration?</strong><br />
                                    <span className="fw-normal">
                                        Please reach out via the email provided above or through GitHub Issues for development-related discussions.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Collaboration */}
                    <h5 className="fw-bold mb-3">Collaboration and Licensing</h5>
                    <div className="card border-0 shadow-sm rounded-4 bg-light">
                        <div className="card-body p-4 px-md-5 d-flex align-items-start" style={{ color: '#000' }}>
                            <div className="bg-white p-2 border rounded-circle me-3">
                                <span className="fw-bold text-primary" style={{ fontSize: '1.2rem' }}>C</span>
                            </div>
                            <div className="fs-5 fw-medium">
                                <span className="fw-normal">
                                    We welcome collaborations related to AMP-MIC prediction, peptide design, or clinical integration.
                                    For licensing or joint research opportunities, please contact us directly.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
