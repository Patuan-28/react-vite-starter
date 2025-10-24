export default function Projects() {
  const projects = [
    { name: 'XSS Detector', desc: 'Browser extension dengan LSTM Attention Model.' },
    { name: 'Spring Boot API', desc: 'REST API untuk submission review system.' },
  ];

  return (
    <section id="projects" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h2>Proyek Saya</h2>
      {projects.map((p, i) => (
        <div key={i} style={{ margin: '1rem 0' }}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
