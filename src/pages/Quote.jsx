// src/pages/Quote.jsx
import { useState } from "react";

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    details: "",
    budget: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: send to your backend / form service
    console.log("Quote request:", form);
    alert("Thanks! We’ll be in touch.");
    setForm({ name: "", email: "", details: "", budget: "" });
  }

  return (
    <main className="page quote">
      <header>
        <h1>Request a Quote</h1>
        <p>Tell us a little about your project.</p>
      </header>

      <form onSubmit={handleSubmit} className="quote-form">
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Budget (optional)
          <input
            name="budget"
            value={form.budget}
            onChange={handleChange}
            placeholder="$2k–$5k"
          />
        </label>

        <label>
          Project Details
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="What are you looking to build?"
            rows={6}
            required
          />
        </label>

        <button type="submit">Send Request</button>
      </form>
    </main>
  );
}
