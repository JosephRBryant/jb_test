// src/pages/Products.jsx
export default function Products() {
  const items = [
    { id: 1, name: "Product One", blurb: "Short description." },
    { id: 2, name: "Product Two", blurb: "Short description." },
    { id: 3, name: "Product Three", blurb: "Short description." },
  ];

  return (
    <main className="page products" style={{ display: "flex", justifyContent: "center" }}>
      <img src="../images/placeholder.png" alt="" />
    </main>
  );
}
