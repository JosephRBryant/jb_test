import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./components/App.module.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Products from "./pages/Products";

function Layout({ children }) {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.links}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Products
            </NavLink>

            <NavLink to="/quote"><button>Request a Quote</button></NavLink>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} YourCo</footer>
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </Layout>
  );
}
