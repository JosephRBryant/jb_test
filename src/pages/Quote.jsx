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
    <main className="page quotes" style={{ display: "flex", justifyContent: "center" }}>
      <img src="../images/placeholder.png" alt="" />
      <form onSubmit={handleSubmit} className="quote-form">

      </form>
    </main>
  );
}
