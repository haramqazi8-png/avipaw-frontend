import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/animals";

function Dashboard() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    species: "Dog",
    age: "",
    gender: "Male",
    status: "Available",
    description: "",
    image: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // Load only the logged-in user's animals
  useEffect(() => {
    const fetchMyAnimals = async () => {
      try {
        setLoading(true);
        setError("");

        if (!token || !user) {
          setError("Please log in to access your dashboard.");
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_URL}/mine`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const data = await response.json();

          throw new Error(
            data.message || "Failed to load your animals"
          );
        }

        const data = await response.json();

        setAnimals(data);
      } catch (err) {
        setError(err.message || "Failed to load animals");
      } finally {
        setLoading(false);
      }
    };

    fetchMyAnimals();
  }, [token, user?.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setFormErrors({
      ...formErrors,
      [name]: ""
    });

    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Animal name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (formData.age === "") {
      errors.age = "Age is required";
    } else if (Number(formData.age) < 0) {
      errors.age = "Age cannot be negative";
    } else if (Number(formData.age) > 30) {
      errors.age = "Age cannot exceed 30";
    }

    if (!formData.description.trim()) {
      errors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      errors.description =
        "Description must be at least 10 characters";
    }

    if (!formData.image.trim()) {
      errors.image = "Image URL is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      species: "Dog",
      age: "",
      gender: "Male",
      status: "Available",
      description: "",
      image: ""
    });

    setFormErrors({});
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    try {
      const method = editingId ? "PUT" : "POST";

      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            (editingId
              ? "Failed to update animal"
              : "Failed to add animal")
        );
      }

      if (editingId) {
        setAnimals((currentAnimals) =>
          currentAnimals.map((animal) =>
            animal._id === data._id ? data : animal
          )
        );

        setSuccess(`${data.name} was updated successfully.`);
      } else {
        setAnimals((currentAnimals) => [
          data,
          ...currentAnimals
        ]);

        setSuccess(`${data.name} was added successfully.`);
      }

      resetForm();
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  const handleEdit = (animal) => {
    setEditingId(animal._id);

    setFormData({
      name: animal.name,
      species: animal.species,
      age: animal.age,
      gender: animal.gender,
      status: animal.status,
      description: animal.description,
      image: animal.image
    });

    setFormErrors({});
    setError("");
    setSuccess("");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${name}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete animal"
        );
      }

      setAnimals((currentAnimals) =>
        currentAnimals.filter(
          (animal) => animal._id !== id
        )
      );

      setSuccess(`${name} was deleted successfully.`);

      if (editingId === id) {
        resetForm();
      }
    } catch (err) {
      setError(err.message || "Failed to delete animal");
    }
  };

  if (!token || !user) {
    return (
      <div>
        <h1>Avipaw Rescue Dashboard</h1>

        <p>
          Please log in to access your dashboard.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>

      <p>
        Manage the animals you have added to Avipaw Rescue.
      </p>

      {success && (
        <p>
          {success}
        </p>
      )}

      {error && (
        <p>
          {error}
        </p>
      )}

      <section>
        <h2>
          {editingId
            ? "Edit Animal"
            : "Add an Animal"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Animal Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter animal name"
            />

            {formErrors.name && (
              <p>{formErrors.name}</p>
            )}
          </div>

          <div>
            <label>Species</label>

            <select
              name="species"
              value={formData.species}
              onChange={handleChange}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Age</label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
              max="30"
              placeholder="Age"
            />

            {formErrors.age && (
              <p>{formErrors.age}</p>
            )}
          </div>

          <div>
            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Available">
                Available
              </option>

              <option value="Under Treatment">
                Under Treatment
              </option>

              <option value="Adopted">
                Adopted
              </option>
            </select>
          </div>

          <div>
            <label>Description</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the animal"
              rows="4"
            />

            {formErrors.description && (
              <p>
                {formErrors.description}
              </p>
            )}
          </div>

          <div>
            <label>Image URL</label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />

            {formErrors.image && (
              <p>{formErrors.image}</p>
            )}
          </div>

          <button type="submit">
            {editingId
              ? "Update Animal"
              : "Add Animal"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </section>

      <section>
        <h2>My Animals</h2>

        {loading && (
          <p>Loading your animals...</p>
        )}

        {!loading && animals.length === 0 && (
          <div>
            <h3>No animals yet</h3>

            <p>
              Add your first animal using the form above.
            </p>
          </div>
        )}

        {!loading && animals.length > 0 && (
          <div>
            {animals.map((animal) => (
              <article key={animal._id}>
                {animal.image && (
                  <img
                    src={animal.image}
                    alt={animal.name}
                    width="200"
                  />
                )}

                <h3>{animal.name}</h3>

                <p>
                  <strong>Species:</strong>{" "}
                  {animal.species}
                </p>

                <p>
                  <strong>Age:</strong>{" "}
                  {animal.age}
                </p>

                <p>
                  <strong>Gender:</strong>{" "}
                  {animal.gender}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {animal.status}
                </p>

                <p>
                  {animal.description}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    handleEdit(animal)
                  }
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(
                      animal._id,
                      animal.name
                    )
                  }
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;