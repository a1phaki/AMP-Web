import { Mail, MapPin, Github, User } from 'lucide-react';
import WelcomeBanner from '../component/WelcomeBanner';

// 只讓括號內文字可以點擊
function InstituteItem({ label, url }) {
  const match = label.match(/^(.*)\(([^()]*)\)(.*)$/); 
  if (url && match) {
    const beforeText = match[1].trim(); // 括號前的部分
    const insideText = match[2].trim(); // 括號內純文字
    const afterText = match[3].trim();  // 括號後的部分 (通常是空的)
    return (
      <>
        {beforeText} (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-primary"
          aria-label={`Open ${insideText} website`}
        >
          {insideText}
        </a>
        ){afterText && ` ${afterText}`}
      </>
    );
  }

  // 如果沒有括號或沒有 URL，直接輸出原文字
  return <span>{label}</span>;
}

const contacts = [
  {
    name: 'Yen-Peng Chiu',
    email: 'SilverGojo4@gmail.com',
    institutes: [
      {
        label: 'Institute of Data Science and Engineering (CCS)',
        url: 'https://www.cs.nycu.edu.tw/?locale=en',
      },
      {
        label: 'National Yang Ming Chiao Tung University (NYCU)',
        url: 'https://www.nycu.edu.tw/nycu/en/index',
      },
    ],
    github: 'https://github.com/SilverGojo4',
  },
  {
    name: 'Lantian Yao',
    email: 'lantianyao@link.cuhk.edu.cn',
    institutes: [
      { label: 'Kobilka Institute of Innovative Drug Discovery (KIIDD)',
        url: 'https://lhs.cuhk.edu.cn/en/page/62',
      },
      { label: 'School of Science and Engineering (SSE)',
        url: 'https://sse.cuhk.edu.cn/en',
      },
      { label: 'The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen)',
        url: 'https://www.cuhk.edu.cn/en',
      },
    ],
    github: 'https://github.com/lantianyao',
  },
  {
    name: 'Tzong-Yi Lee',
    email: 'leetzongyi@nycu.edu.tw',
    institutes: [
      { label: 'Institute of Bioinformatics and Systems Biology (CBT)',
        url: 'https://ibsb.nycu.edu.tw/en/#1',
      },
      { label: 'Center for Intelligent Drug Systems and Smart Bio-devices (IDS2B)',
        url: 'https://www.ids2b.com',
      },
      {
        label: 'National Yang Ming Chiao Tung University (NYCU)',
        url: 'https://www.nycu.edu.tw/nycu/en/index',
      },
    ],
  },
  {
    name: 'Ying-Chih Chiang',
    email: 'chiangyc@cuhk.edu.cn',
    institutes: [
      { label: 'Kobilka Institute of Innovative Drug Discovery (KIIDD)',
        url: 'https://lhs.cuhk.edu.cn/en/page/62',
      },
      { label: 'The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen)',
        url: 'https://www.cuhk.edu.cn/en',
      },
    ],
  },
];

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
            <p
              className="lh-lg mb-3 me-3 ms-3"
              style={{ fontSize: '1.2rem', textAlign: 'justify' }}
            >
              If you have any questions regarding AMP-MIC prediction, dataset usage, or would like
              to collaborate, feel free to reach out to us through the contact information below.
            </p>

            {/* Contact Cards */}
            {contacts.map((contact, idx) => (
              <div key={idx} className="card border-0 shadow-sm rounded-4 bg-light mb-3">
                <div className="card-body p-4 px-md-5 d-flex flex-column gap-4">
                  
                  {/* Name */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-white p-2 border rounded-circle">
                      <User className="text-primary" size={24} />
                    </div>
                    <div className="fs-5 fw-medium">
                      <strong>Name:</strong> {contact.name}
                    </div>
                  </div>

                  {/* Email */}
                  {contact.email && (
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-white p-2 border rounded-circle">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div className="fs-5 fw-medium">
                        <strong>Email:</strong>&nbsp;
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-decoration-none text-primary"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Institutes */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-white p-2 border rounded-circle">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div className="fs-5 fw-medium">
                      <strong>Institute:</strong>
                      <ul className="mb-0 mt-2 list-unstyled d-flex flex-column gap-1">
                        {contact.institutes.map((inst, i) => (
                          <li key={i}>
                            <InstituteItem label={inst.label} url={inst.url} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* GitHub */}
                  {contact.github && (
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-white p-2 border rounded-circle">
                        <Github className="text-primary" size={24} />
                      </div>
                      <div className="fs-5 fw-medium">
                        <strong>GitHub:</strong>&nbsp;
                        <a
                          href={contact.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none text-primary"
                        >
                          {contact.github.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* FAQ */}
            <hr />
            <h5 className="fw-bold mb-3">Frequently Asked Questions (FAQ)</h5>
            <div className="card border-0 shadow-sm rounded-4 bg-light mb-4">
              <div className="card-body p-4 px-md-5 d-flex flex-column gap-4">
                {/* Q1 */}
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-white p-2 border rounded-circle">
                    <span className="fw-bold text-primary" style={{ fontSize: '1.2rem' }}>
                      Q
                    </span>
                  </div>
                  <div className="fs-5 fw-medium" style={{ color: '#000' }}>
                    <strong>Can I use this dataset for my research?</strong>
                    <br />
                    <span className="fw-normal">
                      Yes, all datasets are available for academic use. Please cite our paper if
                      used in publications.
                    </span>
                  </div>
                </div>

                {/* Q2 */}
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-white p-2 border rounded-circle">
                    <span className="fw-bold text-primary" style={{ fontSize: '1.2rem' }}>
                      Q
                    </span>
                  </div>
                  <div className="fs-5 fw-medium" style={{ color: '#000' }}>
                    <strong>Who should I contact for collaboration?</strong>
                    <br />
                    <span className="fw-normal">
                      Please reach out via the email provided above or through GitHub Issues for
                      development-related discussions.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <h5 className="fw-bold mb-3">Collaboration and Licensing</h5>
            <div className="card border-0 shadow-sm rounded-4 bg-light">
              <div
                className="card-body p-4 px-md-5 d-flex align-items-start"
                style={{ color: '#000' }}
              >
                <div className="bg-white p-2 border rounded-circle me-3">
                  <span className="fw-bold text-primary" style={{ fontSize: '1.2rem' }}>
                    C
                  </span>
                </div>
                <div className="fs-5 fw-medium">
                  <span className="fw-normal">
                    We welcome collaborations related to AMP-MIC prediction, peptide design, or
                    clinical integration. For licensing or joint research opportunities, please
                    contact us directly.
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
