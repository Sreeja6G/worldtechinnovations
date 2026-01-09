import "./SMM.css";

export default function Technology() {
  return (
    <div className="service-page tech-page">
      {/* HERO */}
      <section className="service-hero">
        <h1>
          Technology <span>Solutions</span>
        </h1>
        <p>
          We design and build scalable, secure, and future-ready digital
          solutions that help businesses grow faster furture Together
        </p>
      </section>

      {/* CONTENT */}
      <section className="service-content">
        <div className="service-block">
          <h2>⚙️ Product Development</h2>
          <ul>
            <li>Web & mobile application development</li>
            <li>Startup MVP & rapid prototyping</li>
            <li>Scalable architecture design</li>
            <li>API & backend systems</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>🧠 System Architecture</h2>
          <ul>
            <li>Clean & maintainable codebase</li>
            <li>Performance optimization</li>
            <li>Cloud-ready infrastructure</li>
            <li>Security best practices</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>🖥️ UI / UX Engineering</h2>
          <ul>
            <li>User-centric interface design</li>
            <li>Responsive & accessible layouts</li>
            <li>Smooth interactions & animations</li>
            <li>Design system consistency</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>🔧 Maintenance & Support</h2>
          <ul>
            <li>Bug fixing & performance monitoring</li>
            <li>Feature upgrades</li>
            <li>Security updates</li>
            <li>Long-term technical support</li>
          </ul>
        </div>

        <div className="service-block highlight">
          <h2>✨ What You Get</h2>
          <ul>
            <li>Reliable & scalable technology</li>
            <li>Faster time to market</li>
            <li>Future-proof solutions</li>
            <li>Technology that grows with you</li>
          </ul>
        </div>
      </section>
    </div>
  );
}