import { Link } from "react-router-dom";

const heroImage =
  "https://static.vecteezy.com/system/resources/thumbnails/069/857/793/small/a-golden-retriever-black-dog-orange-cat-rabbit-and-chicken-sit-together-on-a-field-showcasing-friendship-photo.jpg";

function Home() {
  const page = {
    minHeight: "100vh",
    background: "#f7f3eb",
    color: "#173b32",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const section = {
    width: "min(1180px, 92%)",
    margin: "0 auto",
  };

  const buttonBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "15px",
    transition: "all 0.25s ease",
  };

  const cards = [
    {
      icon: "🩺",
      title: "Medical Care",
      text: "Animals receive the treatment, medicines and recovery support they need.",
    },
    {
      icon: "🏠",
      title: "Safe Shelter",
      text: "We provide a calm and protected place while each animal heals.",
    },
    {
      icon: "❤️",
      title: "Second Chances",
      text: "Our goal is to help every rescued animal move toward a better life.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Rescue",
      text: "We bring animals out of dangerous or difficult situations.",
    },
    {
      number: "02",
      title: "Recover",
      text: "We focus on health, safety, nutrition and emotional care.",
    },
    {
      number: "03",
      title: "Rebuild",
      text: "We prepare animals for a stable and loving future.",
    },
  ];

  return (
    <div style={page}>
      {/* =========================
          HERO
      ========================== */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 76px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `url("${heroImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* soft image overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(9,42,35,0.96) 0%, rgba(14,55,45,0.88) 42%, rgba(14,55,45,0.48) 72%, rgba(14,55,45,0.2) 100%)",
          }}
        />

        {/* soft bottom fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "140px",
            background:
              "linear-gradient(to bottom, rgba(247,243,235,0), #f7f3eb)",
          }}
        />

        <div
          style={{
            ...section,
            position: "relative",
            zIndex: 2,
            padding: "90px 0 110px",
          }}
        >
          <div
            style={{
              width: "min(720px, 100%)",
              color: "#ffffff",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
                padding: "9px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "1.3px",
                marginBottom: "24px",
              }}
            >
              <span>🐾</span>
              <span>AVIPAW RESCUE • COMPASSION IN ACTION</span>
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(48px, 7vw, 88px)",
                lineHeight: "0.98",
                letterSpacing: "-3px",
                fontWeight: "800",
                maxWidth: "820px",
              }}
            >
              Rescue is only
              <span
                style={{
                  display: "block",
                  color: "#f29a3f",
                }}
              >
                the beginning.
              </span>
            </h1>

            <p
              style={{
                marginTop: "28px",
                marginBottom: 0,
                maxWidth: "650px",
                fontSize: "19px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              Every animal deserves safety, medical care, patience and a second
              chance. Avipaw Rescue helps animals move from danger toward
              recovery, love and a better future.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "34px",
              }}
            >
              <Link
                to="/animals"
                style={{
                  ...buttonBase,
                  color: "#173b32",
                  background: "#f29a3f",
                  boxShadow: "0 12px 30px rgba(242,154,63,0.28)",
                }}
              >
                Meet Our Animals →
              </Link>

              <Link
                to="/about"
                style={{
                  ...buttonBase,
                  color: "#ffffff",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Discover Avipaw
              </Link>

              <Link
                to="/adopt"
                style={{
                  ...buttonBase,
                  color: "#ffffff",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Adopt
              </Link>

              <Link
                to="/donate"
                style={{
                  ...buttonBase,
                  color: "#173b32",
                  background: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.45)",
                }}
              >
                Donate
              </Link>

              <Link
                to="/contact"
                style={{
                  ...buttonBase,
                  color: "#ffffff",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Contact
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                marginTop: "38px",
                color: "rgba(255,255,255,0.88)",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <span>✓ Rescue</span>
              <span>✓ Recover</span>
              <span>✓ Rebuild</span>
              <span>✓ Repeat</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO STRIP
      ========================== */}
      <section
        style={{
          padding: "10px 0 10px",
          background: "#f7f3eb",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            ...section,
            marginTop: "-42px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "26px 30px",
              boxShadow: "0 18px 50px rgba(23,59,50,0.1)",
              border: "1px solid rgba(23,59,50,0.07)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 7px",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "1.4px",
                  color: "#ee8a22",
                }}
              >
                EVERY LIFE MATTERS
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(25px, 4vw, 38px)",
                  lineHeight: 1.15,
                  letterSpacing: "-1px",
                }}
              >
                From rescue to a new beginning.
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: "500px",
                lineHeight: 1.7,
                color: "#61736d",
                fontSize: "15px",
              }}
            >
              A rescue is not finished when an animal reaches safety. The
              journey continues through healing, rehabilitation and finding
              the right future.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT WE DO
      ========================== */}
      <section style={{ padding: "80px 0" }}>
        <div style={section}>
          <div style={{ maxWidth: "690px", marginBottom: "38px" }}>
            <p
              style={{
                margin: "0 0 10px",
                color: "#ee8a22",
                fontWeight: "800",
                fontSize: "12px",
                letterSpacing: "1.5px",
              }}
            >
              WHAT WE DO
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              Care that continues
              <br />
              after the rescue.
            </h2>

            <p
              style={{
                marginTop: "18px",
                marginBottom: 0,
                color: "#64726d",
                fontSize: "17px",
                lineHeight: 1.75,
              }}
            >
              Our work is built around practical care and long-term recovery.
              Every step is focused on giving animals a safer path forward.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {cards.map((card) => (
              <article
                key={card.title}
                style={{
                  background: "#ffffff",
                  borderRadius: "22px",
                  padding: "28px",
                  border: "1px solid rgba(23,59,50,0.08)",
                  boxShadow: "0 10px 30px rgba(23,59,50,0.06)",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "16px",
                    background: "#f8e8d5",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  {card.icon}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "22px",
                    color: "#173b32",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#6a7873",
                    lineHeight: 1.7,
                    fontSize: "14px",
                  }}
                >
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          JOURNEY
      ========================== */}
      <section
        style={{
          padding: "80px 0",
          background: "#123f35",
          color: "#ffffff",
        }}
      >
        <div style={section}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "50px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 10px",
                  color: "#f29a3f",
                  fontWeight: "800",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                }}
              >
                THE AVIPAW JOURNEY
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(34px, 5vw, 54px)",
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                }}
              >
                Small steps.
                <br />
                Big second chances.
              </h2>

              <p
                style={{
                  marginTop: "18px",
                  marginBottom: 0,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                }}
              >
                Every rescue is different, but each animal deserves the same
                foundation of safety, care, patience and hope.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "72px 1fr",
                    gap: "18px",
                    alignItems: "center",
                    padding: "22px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "18px",
                      display: "grid",
                      placeItems: "center",
                      background: "#ee8a22",
                      color: "#173b32",
                      fontWeight: "900",
                    }}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: "0 0 5px",
                        fontSize: "22px",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                        fontSize: "14px",
                      }}
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section
        style={{
          padding: "90px 0",
          background: "#f7f3eb",
        }}
      >
        <div style={section}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, #173f35 0%, #0e3028 100%)",
              padding: "52px",
              color: "#ffffff",
              boxShadow: "0 20px 60px rgba(18,63,53,0.18)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                right: "-70px",
                top: "-90px",
                background: "rgba(238,138,34,0.16)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "760px",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  color: "#f29a3f",
                  fontWeight: "800",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                }}
              >
                BE PART OF THE CHANGE
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(34px, 5vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                }}
              >
                Give a rescued animal
                <br />
                a reason to hope.
              </h2>

              <p
                style={{
                  marginTop: "18px",
                  marginBottom: 0,
                  maxWidth: "620px",
                  color: "rgba(255,255,255,0.74)",
                  lineHeight: 1.8,
                }}
              >
                Explore the animals currently in our care and learn more about
                the work behind every second chance.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginTop: "28px",
                }}
              >
                <Link
                  to="/animals"
                  style={{
                    ...buttonBase,
                    color: "#173b32",
                    background: "#f29a3f",
                  }}
                >
                  View Animals →
                </Link>

                <Link
                  to="/stories"
                  style={{
                    ...buttonBase,
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.22)",
                    background: "rgba(255,255,255,0.07)",
                  }}
                >
                  Read Rescue Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MOBILE / RESPONSIVE NOTE
      ========================== */}
      <style>
        {`
          @media (max-width: 900px) {
            section > div > div[style*="grid-template-columns: 1fr 1.5fr"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 700px) {
            section[style*="min-height"] {
              min-height: 760px !important;
            }

            section[style*="min-height"] h1 {
              font-size: 48px !important;
              letter-spacing: -2px !important;
            }

            section[style*="min-height"] p {
              font-size: 16px !important;
            }

            section[style*="min-height"] > div {
              padding-top: 70px !important;
              padding-bottom: 90px !important;
            }

            div[style*="padding: 52px"] {
              padding: 34px 25px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;