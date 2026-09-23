import { useEffect, useState } from "react";

const API = "http://localhost:5000/api";
const REQUEST_API = "http://localhost:5000/api/requests";

function Adopt() {
  const [animals, setAnimals] = useState([]);
  const [loadingAnimals, setLoadingAnimals] = useState(true);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    animalId: "",
    housing: "House",
    experience: "None",
    message: ""
  });

  useEffect(() => {
    async function loadAnimals() {
      setError("");

      try {
        const response = await fetch(
          `${API}/animals?status=Available`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
            "Unable to load available animals."
          );
        }

        setAnimals(data);
      } catch (err) {
        setError(
          err.message ||
          "Unable to load animals."
        );
      } finally {
        setLoadingAnimals(false);
      }
    }

    loadAnimals();
  }, []);

  function handleChange(event) {
    const {
      name,
      value
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setError("");
    setSuccess("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!form.name.trim()) {
      setError("Your Name is required.");
      return;
    }

    if (!form.email.trim()) {
      setError("Email Address is required.");
      return;
    }

    if (!form.animalId) {
      setError("Please select an animal.");
      return;
    }

    if (!form.message.trim()) {
      setError("Adoption message is required.");
      return;
    }

    const selectedAnimal = animals.find(
      (animal) =>
        animal._id === form.animalId
    );

    setLoading(true);

    try {
      const response = await fetch(
        REQUEST_API,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            type: "Adoption",

            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),

            animalId: form.animalId,

            animalName:
              selectedAnimal?.name || "",

            species:
              selectedAnimal?.species || "",

            housing: form.housing,

            experience: form.experience,

            message: form.message.trim()
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Unable to submit adoption request."
        );
      }

      setSuccess(
        data.message ||
        "Adoption request submitted successfully."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        animalId: "",
        housing: "House",
        experience: "None",
        message: ""
      });

    } catch (err) {
      setError(
        err.message ||
        "Unable to connect to backend."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px 15px",
    border: "1px solid #d9ddd8",
    borderRadius: "12px",
    background: "#ffffff",
    color: "#173b32",
    fontSize: "15px"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "7px",
    fontSize: "13px",
    fontWeight: 700,
    color: "#34534a"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f3eb",
        color: "#173b32",
        paddingBottom: "80px"
      }}
    >

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #123f35 0%, #0d3028 100%)",
          color: "white",
          padding: "76px 20px 96px"
        }}
      >
        <div
          style={{
            width: "min(1050px, 92%)",
            margin: "0 auto"
          }}
        >

          <p
            style={{
              margin: 0,
              color: "#f29a3f",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "1.5px"
            }}
          >
            FIND A FOREVER HOME
          </p>

          <h1
            style={{
              margin: "12px 0 0",
              maxWidth: "820px",
              fontSize:
                "clamp(42px, 6vw, 70px)",
              lineHeight: 1,
              letterSpacing: "-2px"
            }}
          >
            Start an adoption request.
          </h1>

          <p
            style={{
              maxWidth: "720px",
              marginTop: "23px",
              color:
                "rgba(255,255,255,0.78)",
              lineHeight: 1.8,
              fontSize: "17px"
            }}
          >
            Choose an available animal from
            the database and share a little
            about your home and experience.
          </p>

        </div>
      </section>

      {/* FORM */}
      <main
        style={{
          width: "min(1050px, 92%)",
          margin: "0 auto"
        }}
      >

        <section
          style={{
            background: "white",
            borderRadius: "28px",
            padding:
              "clamp(24px, 5vw, 46px)",
            marginTop: "-38px",
            position: "relative",
            boxShadow:
              "0 20px 60px rgba(23,59,50,0.10)",
            border:
              "1px solid rgba(23,59,50,0.06)"
          }}
        >

          {/* SUCCESS */}
          {success && (
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                borderRadius: "13px",
                background: "#e7f4ec",
                color: "#23623f",
                border:
                  "1px solid #b9d9c5",
                fontWeight: 700
              }}
            >
              {success}
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                borderRadius: "13px",
                background: "#fff0ee",
                color: "#9b3329",
                border:
                  "1px solid #efc4bf",
                fontWeight: 700
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "20px"
              }}
            >

              {/* NAME */}
              <div>
                <label style={labelStyle}>
                  Your Name *
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={inputStyle}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label style={labelStyle}>
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={inputStyle}
                />
              </div>

              {/* PHONE */}
              <div>
                <label style={labelStyle}>
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  style={inputStyle}
                />
              </div>

              {/* ANIMAL */}
              <div>
                <label style={labelStyle}>
                  Choose Animal *
                </label>

                <select
                  name="animalId"
                  value={form.animalId}
                  onChange={handleChange}
                  style={inputStyle}
                  disabled={loadingAnimals}
                >
                  <option value="">
                    {loadingAnimals
                      ? "Loading animals..."
                      : "Select an animal"}
                  </option>

                  {animals.map((animal) => (
                    <option
                      key={animal._id}
                      value={animal._id}
                    >
                      {animal.name} —{" "}
                      {animal.species}
                    </option>
                  ))}
                </select>
              </div>

              {/* HOME */}
              <div>
                <label style={labelStyle}>
                  Home Type
                </label>

                <select
                  name="housing"
                  value={form.housing}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="House">
                    House
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>

                  <option value="Farm">
                    Farm
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* EXPERIENCE */}
              <div>
                <label style={labelStyle}>
                  Animal Experience
                </label>

                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="None">
                    None
                  </option>

                  <option value="Some experience">
                    Some experience
                  </option>

                  <option value="Experienced">
                    Experienced
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div
                style={{
                  gridColumn:
                    "1 / -1"
                }}
              >
                <label style={labelStyle}>
                  Why would you like to adopt? *
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="7"
                  placeholder="Tell us about your home and why you would like to adopt..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "150px"
                  }}
                />
              </div>

            </div>

            <button
              type="submit"
              disabled={
                loading ||
                loadingAnimals
              }
              style={{
                marginTop: "28px",
                border: "none",
                borderRadius: "999px",
                padding: "15px 26px",
                background: "#ee8a22",
                color: "#173b32",
                fontWeight: 800,
                fontSize: "15px",
                cursor:
                  loading
                    ? "default"
                    : "pointer",
                opacity:
                  loading
                    ? 0.65
                    : 1
              }}
            >
              {loading
                ? "Sending..."
                : "Send Adoption Request →"}
            </button>

          </form>

        </section>

      </main>

    </div>
  );
}

export default Adopt;