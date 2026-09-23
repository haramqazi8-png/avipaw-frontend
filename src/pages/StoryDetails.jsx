import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API = "https://avipaw-rescue-production.up.railway.app/api";

function StoryDetails() {
  const { id } = useParams();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadStory() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/stories/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load this rescue story."
          );
        }

        setStory(data);
      } catch (err) {
        console.error("Story details error:", err);

        setError(
          err.message || "Unable to load this rescue story."
        );
      } finally {
        setLoading(false);
      }
    }

    loadStory();
  }, [id]);

  if (loading) {
    return (
      <div className="stories-page">
        <section className="stories-message">
          <h1>Loading Story...</h1>
        </section>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="stories-page">
        <section className="stories-message">
          <h1>Story Not Found</h1>

          <p>
            {error ||
              "We couldn't find the rescue story you are looking for."}
          </p>

          <Link
            to="/stories"
            className="story-button"
          >
            ← Back to Stories
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="stories-page">
      <section className="page-hero">
        <h1>{story.title}</h1>

        <p>{story.description}</p>
      </section>

      <section className="stories-section">
        <div className="story-details-card">
          {story.image ? (
            <img
              src={story.image}
              alt={story.title}
            />
          ) : (
            <div
              style={{
                minHeight: "350px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f3eee8",
                fontSize: "80px",
              }}
            >
              ❤️
            </div>
          )}

          <div className="story-details-content">
            <h2>{story.title}</h2>

            <p>
              <strong>Animal:</strong>{" "}
              {story.animalName}
            </p>

            {story.date && (
              <p>
                <strong>Date:</strong>{" "}
                {story.date}
              </p>
            )}

            <p>{story.description}</p>

            <h3>A Happy Chapter</h3>

            <p>
              This rescue story is a reminder that
              with care, patience, kindness, and
              support, animals can have a new
              beginning.
            </p>

            <Link
              to="/stories"
              className="story-button"
            >
              ← Back to All Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryDetails;