import "./About.css";

export default function About() {
  return (
    <section className="about">
      <p className="about-tag">ABOUT US</p>

      <h2 className="about-title">
        WTI <span>Agency</span>
      </h2>

      <p className="about-sub">WorldTechInnovations</p>

      <p className="about-text">
        <strong>WTI Agency (WorldTechInnovations)</strong> is a next-generation
        digital agency helping startups and businesses grow from idea to impact.
      </p>

      <p className="about-text">
        We specialize in <strong>research-driven product development</strong>,
        high-performance web & app solutions, and{" "}
        <strong>result-oriented digital marketing</strong>.
      </p>

      <div className="about-stats">
        <div>
          <h3>9+</h3>
          <span>Projects Delivered</span>
        </div>
        <div>
          <h3>3</h3>
          <span>Ongoing Ventures</span>
        </div>
        <div>
          <h3>2+</h3>
          <span>Months Strong</span>
        </div>
      </div>
    </section>
  );
}