import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "https://avipaw-rescue-production.up.railway.app/api/animals";

function AnimalDetails() {
  const { id } = useParams();

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Animal not found");
          }

          throw new Error("Failed to load animal");
        }

        const data = await response.json();

        setAnimal(data);
      } catch (err) {
        setError(err.message || "Failed to load animal");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1>Animal Details</h1>
        <p>Loading animal...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Animal Details</h1>
        <p>{error}</p>

        <Link to="/animals">
          ← Back to Animals
        </Link>
      </div>
    );
  }

  if (!animal) {
    return (
      <div>
        <h1>Animal Details</h1>
        <p>Animal information is unavailable.</p>

        <Link to="/animals">
          ← Back to Animals
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/animals">
        ← Back to Animals
      </Link>

      <h1>{animal.name}</h1>

      {animal.image && (
        <img
          src={animal.image}
          alt={animal.name}
          width="400"
        />
      )}

      <h2>About {animal.name}</h2>

      <p>
        <strong>Species:</strong> {animal.species}
      </p>

      <p>
        <strong>Age:</strong> {animal.age}
      </p>

      <p>
        <strong>Gender:</strong> {animal.gender}
      </p>

      <p>
        <strong>Status:</strong> {animal.status}
      </p>

      <h3>Description</h3>

      <p>{animal.description}</p>
    </div>
  );
}

export default AnimalDetails;