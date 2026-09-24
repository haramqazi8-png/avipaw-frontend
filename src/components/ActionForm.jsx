import { useState } from "react";

const FORM_NAME = "contact";

const styles = {
  page: { minHeight: "100vh", background: "#f7f3eb", color: "#173b32", paddingBottom: "80px" },
  hero: { background: "linear-gradient(135deg, #123f35 0%, #0d3028 100%)", color: "white", padding: "76px 20px 96px" },
  container: { width: "min(1050px, 92%)", margin: "0 auto" },
  card: { background: "white", borderRadius: "28px", padding: "clamp(24px, 5vw, 46px)", marginTop: "-38px", position: "relative", boxShadow: "0 20px 60px rgba(23,59,50,0.10)", border: "1px solid rgba(23,59,50,0.06)" },
  label: { display: "block", marginBottom: "7px", fontSize: "13px", fontWeight: 700, color: "#34534a" },
  input: { width: "100%", boxSizing: "border-box", padding: "14px 15px", border: "1px solid #d9ddd8", borderRadius: "12px", background: "#ffffff", color: "#173b32", fontSize: "15px" }
};

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export default function ActionForm({
  type, eyebrow, title, description, fields, submitLabel = "Submit Request →"
}) {
  const [form, setForm] = useState(() =>
    Object.fromEntries(fields.map((field) => [field.name, field.defaultValue ?? ""]))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
    setSuccess("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    for (const field of fields) {
      if (field.required && !String(form[field.name] ?? "").trim()) {
        setError(`${field.label} is required.`);
        return;
      }
    }

    if (type === "Donation" && (!Number.isFinite(Number(form.donationAmount)) || Number(form.donationAmount) <= 0)) {
      setError("Please enter a valid donation amount.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, type, ...form })
      });

      if (!response.ok) {
        throw new Error("Unable to submit request. Please try again.");
      }

      setSuccess("Your message has been sent successfully. We'll get back to you soon!");
      setForm(Object.fromEntries(fields.map((field) => [field.name, field.defaultValue ?? ""])));
    } catch (err) {
      setError(err.message || "Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <p style={{ margin: 0, color: "#f29a3f", fontSize: "12px", fontWeight: 800, letterSpacing: "1.5px" }}>{eyebrow}</p>
          <h1 style={{ margin: "12px 0 0", maxWidth: "820px", fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 1, letterSpacing: "-2px" }}>{title}</h1>
          <p style={{ maxWidth: "720px", marginTop: "23px", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontSize: "17px" }}>{description}</p>
        </div>
      </section>

      <main style={styles.container}>
        <section style={styles.card}>
          {success && (<div style={{ marginBottom: "20px", padding: "15px", borderRadius: "13px", background: "#e7f4ec", color: "#23623f", border: "1px solid #b9d9c5", fontWeight: 700 }}>{success}</div>)}
          {error && (<div style={{ marginBottom: "20px", padding: "15px", borderRadius: "13px", background: "#fff0ee", color: "#9b3329", border: "1px solid #efc4bf", fontWeight: 700 }}>{error}</div>)}

          <form onSubmit={handleSubmit} name={FORM_NAME} data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p style={{ display: "none" }}>
              <label>Don't fill this out: <input name="bot-field" onChange={handleChange} /></label>
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
              {fields.map((field) => (
                <div key={field.name} style={field.fullWidth ? { gridColumn: "1 / -1" } : undefined}>
                  <label style={styles.label}>{field.label}{field.required ? " *" : ""}</label>

                  {field.type === "select" ? (
                    <select name={field.name} value={form[field.name]} onChange={handleChange} style={styles.input}>
                      {field.options.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea name={field.name} value={form[field.name]} onChange={handleChange} rows={7} placeholder={field.placeholder} style={{ ...styles.input, resize: "vertical", minHeight: "150px" }} />
                  ) : (
                    <input name={field.name} value={form[field.name]} onChange={handleChange} type={field.type || "text"} placeholder={field.placeholder} min={field.min} style={styles.input} />
                  )}
                </div>
              ))}
            </div>

            <button type="submit" disabled={loading} style={{ marginTop: "28px", border: "none", borderRadius: "999px", padding: "15px 26px", background: "#ee8a22", color: "#173b32", fontWeight: 800, fontSize: "15px", cursor: loading ? "default" : "pointer", opacity: loading ? 0.65 : 1 }}>
              {loading ? "Sending..." : submitLabel}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
