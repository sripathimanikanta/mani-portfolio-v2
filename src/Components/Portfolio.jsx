import '../Css/Portfolio.css';

const Portfolio = () => {
  const education = [
    { school: "A.V. College of Arts, Commerce and Science", degree: "B.Sc (MPCs)", year: "July 2024", score: "90%" },
    { school: "Sri Chaitanya Jr. Kalashala", degree: "Intermediate", year: "March 2019", score: "92%" },
    { school: "Frobel's Garden High School", degree: "SSC", year: "March 2017", score: "95%" }
  ];

  return (
    <div className="portfolio-container" id='academia'>
      {/* Education Section */}
      <h1 className="section-title">Academic <span className="accent">History</span></h1>
      <div className="grid-layout">
        {education.map((edu, index) => (
          <div key={index} className="glass-card">
            <span className="accent" style={{ fontSize: '0.8rem' }}>{edu.year}</span>
            <h3 style={{ margin: '10px 0' }}>{edu.degree}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{edu.school}</p>
            <div style={{ marginTop: '15px' }}>
              <span className="badge">GPA: {edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;