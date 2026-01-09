import "./SMM.css";

export default function SMM() {
  return (
    <div className="service-page">
      {/* HERO */}
      <section className="service-hero">
        <h1>
          Social Media <span>Marketing</span>
        </h1>
        <p>
          We help startups and brands build visibility, trust, and consistent
          growth across social platforms using data-driven strategies and
          creative execution.
        </p>
      </section>

      {/* CONTENT */}
      <section className="service-content">
        <div className="service-block">
          <h2>🎯 Strategy & Planning</h2>
          <ul>
            <li>Brand positioning & audience research</li>
            <li>Platform selection (Instagram, LinkedIn, X)</li>
            <li>Content calendar & growth roadmap</li>
            <li>Competitor & trend analysis</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>🎨 Content Creation</h2>
          <ul>
            <li>High-quality post & reel strategy</li>
            <li>Conversion-focused copywriting</li>
            <li>Visual identity consistency</li>
            <li>Storytelling for brand recall</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>📈 Growth & Engagement</h2>
          <ul>
            <li>Organic reach optimization</li>
            <li>Community building & interaction</li>
            <li>Profile & CTA optimization</li>
            <li>Hashtag & discovery strategy</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>🚀 Performance Marketing</h2>
          <ul>
            <li>Paid ads testing & scaling</li>
            <li>Lead generation campaigns</li>
            <li>Creative & audience optimization</li>
            <li>ROI-driven execution</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>📊 Analytics & Optimization</h2>
          <ul>
            <li>Weekly / monthly reports</li>
            <li>Engagement & reach analysis</li>
            <li>A/B testing</li>
            <li>Continuous improvement</li>
          </ul>
        </div>

        <div className="service-block highlight">
          <h2>✨ Results You Can Expect</h2>
          <ul>
            <li>Strong brand presence</li>
            <li>Consistent audience growth</li>
            <li>Higher engagement & trust</li>
            <li>Leads that convert</li>
          </ul>
        </div>
      </section>
    </div>
  );
}