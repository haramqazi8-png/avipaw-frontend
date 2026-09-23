import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://avipaw-rescue-production.up.railway.app/api/animals";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");

  const fetchAnimals = async () => {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();

      if (search.trim()) {
        params.append("search", search.trim());
      }

      if (species) {
        params.append("species", species);
      }

      if (status) {
        params.append("status", status);
      }

      const url = params.toString()
        ? `${API_URL}?${params.toString()}`
        : API_URL;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to load rescue animals.");
      }

      const data = await response.json();

      setAnimals(data);
    } catch (err) {
      setError(
        err.message || "Something went wrong while loading animals."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, [search, species, status]);

  const clearFilters = () => {
    setSearch("");
    setSpecies("");
    setStatus("");
  };

  const statusClass = (value) => {
    const currentStatus = (value || "").toLowerCase();

    if (currentStatus === "available") {
      return "status-badge available";
    }

    if (currentStatus === "adopted") {
      return "status-badge adopted";
    }

    return "status-badge under-treatment";
  };

  return (
    <div className="animals-page">

      {/* PAGE HERO */}
      <section className="animals-hero">
        <div className="animals-hero-content">
          <span className="section-eyebrow">
            AVIPAW RESCUE • FIND A FRIEND
          </span>

          <h1>
            Meet the animals
            <span> waiting for you.</span>
          </h1>

          <p>
            Every animal deserves safety, care, patience and a second chance.
            Explore the animals currently in our rescue program and discover
            their stories.
          </p>
        </div>
      </section>

      {/* FILTER AREA */}
      <section className="animals-search-section">
        <div className="animals-search-header">
          <div>
            <span className="section-eyebrow">
              OUR RESCUE ANIMALS
            </span>

            <h2>Find your new companion.</h2>

            <p>
              Search by name, species or current rescue status.
            </p>
          </div>
        </div>

        <div className="filters">

          <div className="filter-group filter-search">
            <label htmlFor="search">
              Search animals
            </label>

            <input
              id="search"
              type="text"
              placeholder="Search by name or description..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="species">
              Species
            </label>

            <select
              id="species"
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
            >
              <option value="">All Species</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
              <option value="Bird">Birds</option>
              <option value="Rabbit">Rabbits</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="status">
              Status
            </label>

            <select
              id="status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Available">Available</option>
              <option value="Under Treatment">
                Under Treatment
              </option>
              <option value="Adopted">
                Adopted
              </option>
            </select>
          </div>

          <button
            type="button"
            className="btn-secondary filter-clear"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </section>

      {/* LOADING */}
      {loading && (
        <section className="state-box loading-box">
          <div className="loading-spinner"></div>

          <h3>Finding our rescue animals...</h3>

          <p>Please wait while we load the latest animals.</p>
        </section>
      )}

      {/* ERROR */}
      {!loading && error && (
        <section className="state-box state-error">
          <div className="state-icon">!</div>

          <h3>We couldn't load the animals.</h3>

          <p>{error}</p>

          <button
            type="button"
            className="btn-primary"
            onClick={fetchAnimals}
          >
            Try Again
          </button>
        </section>
      )}

      {/* EMPTY */}
      {!loading && !error && animals.length === 0 && (
        <section className="state-box empty-box">
          <div className="state-icon">🐾</div>

          <h3>No animals found.</h3>

          <p>
            No rescue animals match your current search or filters.
          </p>

          <button
            type="button"
            className="btn-primary"
            onClick={clearFilters}
          >
            Show All Animals
          </button>
        </section>
      )}

      {/* ANIMALS */}
      {!loading && !error && animals.length > 0 && (
        <section className="animals-list-section">

          <div className="animals-results-top">
            <div>
              <span className="results-count">
                {animals.length}{" "}
                {animals.length === 1 ? "animal" : "animals"}
              </span>

              <p>
                Currently listed with Avipaw Rescue
              </p>
            </div>
          </div>

          <div className="animals-grid">

            {animals.map((animal) => (
              <article
                className="animal-card"
                key={animal._id}
              >

                {/* IMAGE */}
                <div className="animal-card-image-wrap">

                  {animal.image ? (
                    <img
                      className="animal-card-image"
                      src={animal.image}
                      alt={`${animal.name} - ${animal.species}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="animal-card-no-image">
                      <span>🐾</span>
                      <p>Photo coming soon</p>
                    </div>
                  )}

                  <span
                    className={statusClass(animal.status)}
                  >
                    {animal.status}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="animal-card-body">

                  <div className="animal-card-header">
                    <div>
                      <span className="animal-species">
                        {animal.species}
                      </span>

                      <h3>{animal.name}</h3>
                    </div>
                  </div>

                  <div className="animal-card-meta">

                    <span>
                      <strong>Age</strong>
                      {animal.age}{" "}
                      {animal.age === 1 ? "year" : "years"}
                    </span>

                    <span>
                      <strong>Gender</strong>
                      {animal.gender}
                    </span>

                  </div>

                  <p className="animal-card-description">
                    {animal.description}
                  </p>

                  <Link
                    to={`/animals/${animal._id}`}
                    className="animal-card-link"
                  >
                    <span>Meet {animal.name}</span>
                    <span className="arrow">→</span>
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </section>
      )}

      {/* BOTTOM MESSAGE */}
      {!loading && !error && animals.length > 0 && (
        <section className="animals-bottom-cta">

          <div>
            <span className="section-eyebrow">
              EVERY LIFE MATTERS
            </span>

            <h2>
              Can't adopt right now?
            </h2>

            <p>
              You can still help an animal receive food, medical treatment,
              shelter and the chance to find a loving home.
            </p>
          </div>

          <Link
            to="/"
            className="btn-primary"
          >
            Support Our Mission
          </Link>

        </section>
      )}

    </div>
  );
}

export default Animals;