function Work() {
  const activities = [
    {
      icon: "🐾",
      title: "Animal Rescue",
      description:
        "We respond to animals in vulnerable situations and provide them with a safe place where they can begin recovering."
    },
    {
      icon: "🏥",
      title: "Medical Treatment",
      description:
        "Animals needing medical attention receive care, monitoring, treatment, and the time they need to recover."
    },
    {
      icon: "❤️",
      title: "Rehabilitation",
      description:
        "We help rescued animals regain their strength, confidence, and trust through patience and compassionate care."
    },
    {
      icon: "🏠",
      title: "Adoption & Rehoming",
      description:
        "We work toward finding responsible and loving homes where rescued animals can enjoy a safe future."
    },
    {
      icon: "🍎",
      title: "Food & Daily Care",
      description:
        "Every animal in our care needs nutritious food, clean surroundings, attention, and consistent daily support."
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Volunteers and supporters help us continue rescuing animals and creating better outcomes for animals in need."
    }
  ];

  return (
    <div className="page-container">
      <section className="page-hero">
        <span className="eyebrow">
          AVIPAW RESCUE • OUR WORK
        </span>

        <h1>Rescue Is Only the Beginning</h1>

        <p>
          Our work continues long after an animal is rescued.
          We provide care, recovery, protection, and support while
          helping animals move toward a safer and happier future.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="section-label">WHAT WE DO</span>

          <h2>Compassion in Action</h2>

          <p>
            Every rescue is different. Our approach focuses on giving
            each animal the care and attention they need at every stage
            of their journey.
          </p>
        </div>

        <div className="info-grid work-grid">
          {activities.map((activity) => (
            <article
              className="info-card work-card"
              key={activity.title}
            >
              <div className="info-icon">
                {activity.icon}
              </div>

              <h3>{activity.title}</h3>

              <p>{activity.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section work-feature">
        <div className="content-grid">
          <div className="content-image">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
              alt="Animal receiving care"
            />
          </div>

          <div className="content-text">
            <span className="section-label">
              THE RESCUE JOURNEY
            </span>

            <h2>From Danger to a New Beginning</h2>

            <p>
              When an animal enters our care, the first priority is
              creating a safe and supportive environment.
            </p>

            <p>
              From initial rescue and treatment to rehabilitation and
              rehoming, every stage matters. Small improvements can
              become major steps toward a completely different future.
            </p>

            <p>
              With the help of volunteers, adopters, and supporters,
              we can continue giving vulnerable animals another chance.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="section-label">
            BE PART OF THE CHANGE
          </span>

          <h2>There Is More Than One Way to Help</h2>

          <p>
            You can make a difference by adopting, volunteering,
            supporting our rescue work, or helping spread the word.
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

export default Work;