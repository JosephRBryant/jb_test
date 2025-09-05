// src/pages/Home.jsx
import { NavLink } from "react-router-dom";
import styles from "../components/Home.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Custom Printing Solutions For Your Business</h1>
        <p>
          Custom Print DFW delivers premium printing, embroidery, and signage services for businesses in the DFW Metroplex. From custom business cards and brochures to eye-catching signage and embroidery for apparel, our services are designed to turn your marketing efforts into business growth.
        </p>
        <NavLink to="/quote"><button>Request a Quote</button></NavLink>
      </section>

      <section className={styles.servicesPreview}>
        <h2>What We Do</h2>
        <p>
          In today’s fast-paced business environment, visual branding isn’t just important—it’s critical. Custom Print DFW provides premium print services that capture attention and drive business results.
        </p>
        <div className={styles.imageGrid}>
          <img src="../images/image9.jpg" alt="semi truck" />
          <img src="../images/image8.jpg" alt="pickup truck" />
          <img src="../images/image7.jpg" alt="Apartment Homes signage" />
          <img src="../images/image6.jpg" alt="Boss Lady hat" />
          <img src="../images/embroidery.jpg" alt="embroidery examples" />
          <img src="../images/image12.jpg" alt="screen printing" />
          <img src="../images/image11.jpg" alt="Dallas Star signage" />
          <img src="../images/image10.jpg" alt="Chocolate Lounge sign" />
        </div>
        <button>Learn More</button>
      </section>

      <section className={styles.valueProp}>
        <h2>The Custom Print DFW Difference</h2>
        <p>
          Our commitment to your success extends beyond completing individual projects to encompass your overall market presence and brand positioning. When you partner with Custom Print DFW, you gain more than a vendor—you secure a dedicated visual marketing ally focused on contributing to your bottom-line performance. This fundamental difference explains why business leaders throughout the DFW metroplex increasingly choose Custom Print DFW as their exclusive print partner.
        </p>
        <div className={styles.imageGrid}>
          <img src="../images/image4.jpg" alt="Mi Dulce Mexicano sign" />
          <img src="../images/image2.jpg" alt="OXY sign" />
          <img src="../images/image3.jpg" alt="Cedars Village Market sign" />
          <img src="../images/image1.jpg" alt="Axe Throwing sign" />
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className={styles.testImage}></div>
        <blockquote>
          <p>
            “I’m a little late, But this business goes above and beyond to get the job done, they listen to every detail you ask and when they bring your vision to life, it is absolutely amazing!! Thank you Jessica and the crew for always providing world class service, and always going above and beyond. You have us hooked for all of our future events.”
          </p>
          <cite>- Nieman Gas</cite>
        </blockquote>
      </section>

      <section className={styles.cta}>
        <p>
          Contact Us Today for an expert print consultation. Discover how Custom Print DFW can strengthen your market position, elevate your brand, and drive revenue growth.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}
