function About() {
  return (
    <div className="page-container">
      <section className="page-hero">
        <span className="eyebrow">ABOUT AVIPAW RESCUE</span>

        <h1>Giving Animals a Second Chance</h1>

        <p>
          Avipaw Rescue is dedicated to protecting animals in need,
          providing compassionate care, and helping them find safe and
          loving homes.
        </p>
      </section>

      <section className="content-section">
        <div className="content-grid">
          <div className="content-image">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85"
              alt="Rescued dogs"
            />
          </div>

          <div className="content-text">
            <span className="section-label">OUR MISSION</span>

            <h2>Rescue. Recover. Rebuild.</h2>

            <p>
              Every animal deserves safety, kindness, medical attention,
              and the opportunity to experience a better life.
            </p>

            <p>
              At Avipaw Rescue, we work to give vulnerable animals a
              safe place to recover while preparing them for their next
              chapter.
            </p>

            <p>
              Our goal is not simply to rescue an animal from danger.
              We want to help them recover, regain trust, and eventually
              find a loving forever home.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="section-label">WHAT WE BELIEVE</span>

          <h2>Every Life Matters</h2>

          <p>
            Rescue is only the beginning. Real change happens when
            animals receive the care and support they need after rescue.
          </p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <div className="info-icon">🐾</div>

            <h3>Compassion</h3>

            <p>
              We treat every animal with patience, dignity, and kindness.
            </p>
          </article>

          <article className="info-card">
            <div className="info-icon">❤️</div>

            <h3>Care</h3>

            <p>
              We provide protection, recovery support, food, and
              appropriate medical care.
            </p>
          </article>

          <article className="info-card">
            <div className="info-icon">🏠</div>

            <h3>Forever Homes</h3>

            <p>
              We help animals move from rescue toward safe and loving
              homes.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="section-label">JOIN THE MISSION</span>

          <h2>Help Us Give More Animals a Second Chance</h2>

          <p>
            Whether you adopt, volunteer, donate, or simply share our
            mission, your support can make a difference.
          </p>
        </div>

        <div className="cta-buttons">
          <a href="/animals" className="btn btn-primary">
            Meet Our Animals
          </a>

          <a href="/donate" className="btn btn-outline">
            Support Our Mission
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;