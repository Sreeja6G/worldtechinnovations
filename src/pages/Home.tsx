import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [projects, setProjects] = useState(1);
  const [ventures, setVentures] = useState(1);
  const [months, setMonths] = useState(1);
  const[showBanner,setShowBanner
  ] =useState(true);
  const [activeService, setActiveService] = useState("rd");
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const navigate = useNavigate();

  /* COUNTERS */
  useEffect(() => {
    let p = 0, v = 0, m = 0;
    const interval = setInterval(() => {
      if (p < 9) setProjects(++p);
      if (v < 3) setVentures(++v);
      if (m < 2) setMonths(++m);
      if (p === 9 && v === 3 && m === 2) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  /* ABOUT OBSERVER */
  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAboutVisible(true),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* MAGNETIC EFFECT */
  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const magneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop()) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;
  };

  const magneticLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/logo.jpeg" alt="WorldTech Technologies" />
          <span>WorldTech innovations</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {showBanner && (
  <div className="startup-banner">
    <span>
      🚀 Have a startup idea? Let’s build it together.
    </span>

    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfiatQOnSerCjDqTllEHoCIp719pnsppmzXefoK8w_i8IzzMg/viewform"
      target="_blank"
      rel="noreferrer"
      className="banner-btn"
    >
      Fill Startup Form →
    </a>

    <button
      className="banner-close"
      onClick={() => setShowBanner(false)}
    >
      ✕
    </button>
  </div>
)}
      {/* PAGE */}
      <div className="page">

        {/* HERO */}
        <section className="hero" id="home">
          <h1>
            Ideas don’t build companies.<br />
            <span>Execution does.</span>
          </h1>
          <p className="hero-sub">
            We turn startup vision into scalable products, powerful brands, and measurable growth.
          </p>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          ref={aboutRef}
          className={`about ${aboutVisible ? "about-active" : ""}`}
        >
          <div className="about-tag">ABOUT US</div>
          <h2 className="about-title">WTI <span>Agency</span></h2>
          <p className="about-sub">WorldTechInnovations</p>

          <p className="about-text">
            Helping startups and businesses grow from idea to impact.
            <br /><br />
            We specialize in <b>research-driven product development</b>,
            high-performance web & app solutions, and
            <b> result-oriented digital marketing</b>.
          </p>

          <div className="about-stats">
            <div><h3>{projects}+</h3><span>Projects Delivered</span></div>
            <div><h3>{ventures}</h3><span>Ongoing Ventures</span></div>
            <div><h3>{months}+</h3><span>Months Strong</span></div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="service-row">
            {["rd", "smm", "tech", "dreamx"].map((service) => (
              <div key={service} className="service-wrap">
                <div
                  className={`service-circle ${service} ${activeService === service ? "active" : ""}`}
                  onClick={() => setActiveService(service)}
                  onMouseMove={isDesktop() ? magneticMove : undefined}
                  onMouseLeave={isDesktop() ? magneticLeave : undefined}
                >
                  {service === "rd" && "R&D"}
                  {service === "smm" && "SMM"}
                  {service === "tech" && "Technology"}
                  {service === "dreamx" && "DreamX"}
                </div>

                <button
                  className="service-btn"
                  onClick={() => navigate(`/services/${service}`)}
                >
                  Explore
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* COMPLETED PROJECTS */}
        <section className="projects-showcase">
          <h2 className="projects-title">✅ Completed Projects</h2>
          <div className="projects-grid">
            {[
              ["DreamX World","https://www.dreamxworld.com"],
              ["Rockage Fashion","https://www.rockagefashion.com"],
              ["Srivinayaka Foundation","https://www.srivinayakafoundation.org"],
              ["RACAN – Research","https://racan.vercel.app"],
              ["School Bus Media","https://www.schoolbusmedia.com"],
              ["Claufe","https://www.claufe.in"],
              ["SK Car Products","https://www.skcarproducts.com"],
              ["Ranjith On Wheels","https://ranjithonwheels.vercel.app"],
              ["Text Book Platform","https://text-book-frontend.vercel.app"],
            ].map(([name, url], i) => (
              <a key={i} href={url} target="_blank" rel="noreferrer" className="project-card">
                <span className="project-index">0{i + 1}</span>
                <h3>{name}</h3>
                <span className="project-cta">View Live →</span>
              </a>
            ))}
          </div>
        </section>
        {/* ================= ONGOING PROJECTS ================= */}
<section className="ongoing-projects">
  <h2 className="ongoing-title">🔄 Ongoing Projects</h2>

  <p className="ongoing-sub">
    Currently building high-impact products with full-cycle execution.
  </p>

  <div className="ongoing-grid">
    <div className="ongoing-card">
      <h3>🛒 E-Commerce Platform</h3>
      <p className="ongoing-desc">
        End-to-end product development for a scalable online store.
      </p>
      <ul>
        <li>🔬 Research & Strategy</li>
        <li>💻 Full-Stack Development</li>
        <li>📢 Growth-focused Marketing</li>
      </ul>
      <span className="ongoing-status">In Progress</span>
    </div>

    <div className="ongoing-card">
      <h3>🛒 E-Commerce Platform</h3>
      <p className="ongoing-desc">
        Conversion-optimized platform focused on performance and UX.
      </p>
      <ul>
        <li>🎨 UI/UX Design</li>
        <li>⚙️ Scalable Frontend</li>
        <li>📈 Analytics & Optimization</li>
      </ul>
      <span className="ongoing-status">In Progress</span>
    </div>
    <div className="ongoing-card">
      <h3>🏋️ Fitness / Gym Brand</h3>
      <p className="ongoing-desc">
        Brand-focused website with lead generation & growth strategy.
      </p>
      <ul>
        <li>🧠 Brand Positioning</li>
        <li>🌐 Website Development</li>
        <li>📢 Social Media Growth</li>
      </ul>
      <span className="ongoing-status">In Progress</span>
    </div>
  </div>
</section>
        {/* ================= STARTUP GROWTH PROGRAM 2026 ================= */}
<section className="startup-program">
  <div className="program-badge">2026 INITIATIVE</div>

  <h2 className="program-title">
    Startup <span>Growth Program</span>
  </h2>

  <p className="program-sub">
    Every Month, WTI Agency partners with <b>7 high-potential startups</b> and
    helps them grow from idea to impact with full execution support.
  </p>

  <div className="program-grid">
    <div className="program-card">
      <h3>🔬 What We Provide</h3>
      <ul>
        <li>Complete Research & Development</li>
        <li>Professional, conversion-focused website</li>
        <li>1 Month of Social Media Marketing</li>
      </ul>
    </div>

    <div className="program-card highlight">
      <h3>💰 Investment</h3>
      <p className="price">₹22,000 INR</p>
      <p className="note">
        We believe <b>value creates commitment</b>. Paid efforts build serious
        founders.
      </p>
    </div>

    <div className="program-card">
      <h3>🚀 Who It’s For</h3>
      <ul>
        <li>Early-stage startups</li>
        <li>Builders with real intent</li>
        <li>Founders ready to execute</li>
      </ul>
    </div>
  </div>
</section>

{/* ================= JOIN US ================= */}
<div className="join-center">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfiatQOnSerCjDqTllEHoCIp719pnsppmzXefoK8w_i8IzzMg/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="join-btn"
  >
    Join Us →
  </a>
</div>

{/* ================= FOUNDER PROFILE ================= */}
<section className="founder">
  <h2 className="founder-title">
    Meet Our <span>Founder</span>
  </h2>

  <h3 className="founder-name">
    MILA YASWANTH KUMAR YADAV
  </h3>

  <p className="founder-role">
    Founder • Product Manager • Research & Developer
  </p>

  <p className="founder-desc">
    Startup-focused product thinker with strong experience in
    <b> research, product strategy, and execution</b>. Leads both technical
    development and business vision at WTI Agency.
  </p>

  <blockquote className="founder-quote">
    “Technology should not just look good — it should solve real problems.”
  </blockquote>
</section>

{/* ================= WHY CHOOSE WTI ================= */}
<section className="why-wti">
  <h2 className="why-title">
    Why Choose <span>WTI Agency</span>
  </h2>

  <div className="why-grid">
    <div>🚀 Proven execution in a short time</div>
    <div>🧠 Startup-first mindset</div>
    <div>🔬 Strong R&D foundation</div>
    <div>🤝 Transparent & value-driven pricing</div>
    <div>📈 Growth-oriented marketing</div>
    <div>🔁 Long-term partnership approach</div>
  </div>
</section>

{/* ================= FINAL CTA ================= */}
<section className="final-cta">
  <h2>
    Let’s <span>Build the Future</span> Together
  </h2>
  <p>
    Whether you’re a startup, business, or entrepreneur —
    WTI Agency is ready to help you design, build, and scale.
  </p>
  <button className="cta-btn"
  onClick={()=>navigate("//docs.google.com/forms/d/e/1FAIpQLSfiatQOnSerCjDqTllEHoCIp719pnsppmzXefoK8w_i8IzzMg/viewform")}>Start Your Journey →</button>
</section>

{/* ================= FOOTER ================= */}
<footer className="site-footer" id="contact">
  <div className="footer-content">
    <h3 className="footer-brand">WorldTechInnovations</h3>

    <p className="footer-contact">
      📧{" "}
      <a href="mailto:worldtechinnovations786@gmail.com">
        myaswanthkumaryadav78@gmail.com
      </a>
    </p>

    <p className="footer-contact">
      📞 <a href="tel:+919440463292">+91 9440463292</a>
    </p>

    <div className="footer-socials">
      <a
        href="https://www.instagram.com/worldtech_innovations"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>

    <p className="footer-copy">
      © {new Date().getFullYear()} WorldTechInnovations. All rights reserved.
    </p>
  </div>
</footer>
      </div>
    </>
  );
}