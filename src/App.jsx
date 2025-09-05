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
      <footer>
        <div className={styles.footerContainer}>

          <div className={styles.footerLeft}>
            <div className={styles.footerLinks}>
              <NavLink
                  to="/"
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  to="/products"
                >
                  Products
                </NavLink>
                <NavLink to="/quote">Request a Quote</NavLink>
            </div>
            <p>© 2024. All rights reserved.</p>
          </div>
          <div className={styles.footerMain}>
            <div className={styles.footerLogo}>
              <img src="/images/logo.png" alt="" />
            </div>
            <NavLink to="/quote"><button>Request a Quote</button></NavLink>
            <a href="">Contact Us</a>
            <div className={styles.footerSocials}>
              <a href="">
                <i className="fa-brands fa-facebook" style={{color: "#ffffff"}}></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>
              </a>
              <a href="">
                <i class="fa-brands fa-x-twitter" style={{color: "#ffffff"}}></i>
              </a>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerTitle}>
              <h2>Custom Print DFW</h2>
              <p>Custom printing solutions that elevate your brand.</p>
            </div>
            <div className={styles.footerContact}>
              <h3>Contact Info</h3>
              <a href="tel:+11234567890">123&#8209;456&#8209;7890</a>
              <a href="mailto:contact@customprintdfw.com">contact@customprintdfw.com</a>
            </div>
          </div>
        </div>

      </footer>
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
