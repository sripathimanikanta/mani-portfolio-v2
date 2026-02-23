import '../Css/Certificates.css';

const Certificates = () => {
  const certs = [
    { title: "Python", issuer: "Kaggle", date: "Verified",link:"https://www.kaggle.com/learn/certification/manikantasripathi/python" },
    { title: "HTML", issuer: "Great Learning", date: "Verified",link:"https://olympus.mygreatlearning.com/courses/12761/certificate" },
    { title: "SQL", issuer: "Kaggle", date: "Verified",link: "https://www.kaggle.com/learn/certification/manikantasripathi/intro-to-sql" }
  ];

  return (
    <section id="certifications" className="certs-section">
      <h1 className="section-title">Professional <span className="accent">Certifications</span></h1>
      <div className="certs-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">📜</div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              {/* <span className="verify-tag">{cert.date}</span> */}
              <a className="verify-tag" href={cert.link} target='_blank'>{cert.date}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;