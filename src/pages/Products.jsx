// src/pages/Products.jsx
export default function Products() {
  const items = [
    { id: 1, name: "Product One", blurb: "Short description." },
    { id: 2, name: "Product Two", blurb: "Short description." },
    { id: 3, name: "Product Three", blurb: "Short description." },
  ];

  return (
    <main className="page products">
      <header>
        <h1>Products</h1>
        <p>Explore what we offer.</p>
      </header>

      <section className="grid">
        {items.map((it) => (
          <article key={it.id} className="card">
            <div className="thumb" aria-hidden="true" />
            <h3>{it.name}</h3>
            <p>{it.blurb}</p>
            <button>Learn More</button>
          </article>
        ))}
      </section>
    </main>
  );
}
