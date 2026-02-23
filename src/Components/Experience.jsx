import '../Css/Experience.css';

const Experience = () => {
  const jobs = [
    {
      company: "TEACHNOOK",
      role: "Cyber Security Intern",
      period: "JUL 2025 – NOV 2025",
      points: [
        "Performed penetration testing and security assessments for finance and healthcare clients.",
        "Engaged in threat modeling and conducted vulnerability management training sessions.",
        "Executed DAST (Dynamic Application Security Testing) on APIs and Networks to mitigate XSS and SQL Injection."
      ],
      tags: ["Pen-Testing", "DAST", "SQL Injection", "API Security"]
    },
    {
      company: "TAGSOL NOVA LLP",
      role: "Full Stack Intern",
      period: "FEB 2025 – APR 2025",
      points: [
        "Developed a mobile app with React Native featuring GPS and Open-Street Maps integration.",
        "Established main website using React, Node.js, and MySQL with efficient storage management.",
        "Managed orchestration and deployment workflows using Docker, Linux, and FileZilla."
      ],
      tags: ["React Native", "Node.js", "MySQL", "Docker", "Linux"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h1 className="section-title">Work <span className="accent">Experience</span></h1>
      <div className="experience-container">
        {jobs.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="exp-header">
              <div>
                <h2>{job.company}</h2>
                <p className="role-text">{job.role}</p>
              </div>
              <span className="date-badge">{job.period}</span>
            </div>
            <ul className="exp-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {job.tags.map((tag, i) => (
                <span key={i} className="exp-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;