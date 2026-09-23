import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://avipaw-rescue-production.up.railway.app/api";

function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadStories() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/stories`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load rescue stories."
          );
        }

        setStories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Stories loading error:", err);
        setError(
          err.message || "Unable to connect to the rescue server."
        );
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, []);

  return (
    <div className="stories-page">
      <section className="page-hero">
        <h1>Rescue Stories</h1>

        <p>
          Every rescued animal has a story. These are some of the journeys
          that remind us why rescue matters.
        </p>
      </section>

      <section className="stories-section">
        <h2>From Rescue to Recovery</h2>

        {loading && (
          <p>Loading rescue stories...</p>
        )}

        {error && (
          <p>{error}</p>
        )}

        {!loading && !error && stories.length === 0 && (
          <p>No rescue stories are available yet.</p>
        )}

        {!loading && !error && stories.length > 0 && (
          <div className="stories-grid">
            {stories.map((story) => (
              <article
                className="story-card"
                key={story._id}
              >
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.title}
                  />
                ) : (
                  <div
                    style={{
                      minHeight: "250px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f3eee8",
                      fontSize: "60px",
                    }}
                  >
                    ❤️
                  </div>
                )}

                <div className="story-content">
                  <h3>{story.title}</h3>

                  <p>{story.description}</p>

                  {story.date && (
                    <p>{story.date}</p>
                  )}

                  <Link
                    to={`/stories/${story._id}`}
                    className="story-button"
                  >
                    Read Their Story
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="stories-message">
        <h2>There Are More Stories Waiting to Be Written</h2>

        <p>
          Behind every animal we rescue is a journey of fear, recovery,
          kindness, and hope. Your support helps us give more animals the
          chance to experience a better ending.
        </p>
      </section>
    </div>
  );
}

export default Stories;