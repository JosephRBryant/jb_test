// src/pages/Services.jsx
import styles from "../components/Services.module.css";
export default function Services() {
  return (
    <main className={styles.services}>
      <div className={styles.header}>
        <h1>Services</h1>
        <p>In today’s competitive marketplace, standing out is essential for  success. Our company specializes in unique printing solutions that not  only elevate your brand but also distinguish it from the competition. We understand that every business has its own story to tell, and our  tailored printing services reflect that individuality. From eye-catching promotional materials to innovative packaging designs, we utilize  cutting-edge technology and creative techniques to bring your vision to  life. Our team of experts is dedicated to delivering exceptional quality and personalized service, ensuring that your printed materials leave a  lasting impression on your audience. With our unique printing solutions, you can confidently showcase your brand and capture the attention it  deserves. Let us help you transform your ideas into remarkable printed  products that truly set you apart.</p>
      </div>
      <div className={styles.main}>
        <div className={styles.servicesCardA}>
          <div className={styles.servicesImgGrid}>
            <img src="../images/image9.jpg" alt="semi truck" />
            <img src="../images/image8.jpg" alt="pickup truck" />
            <img src="../images/image7.jpg" alt="Apartment Homes signage" />
            <img src="../images/image6.jpg" alt="Boss Lady hat" />
          </div>
          <div className={styles.servicesTextA}>
            <h2>Custom LED Signage</h2>
            <h3>Increase Visibility & Foot Traffic with our custom LED signs:</h3>
            <ul>
              <li>High-visibility displays that capture attention day and night</li>
              <li>Weather-resistant construction built for Texas conditions</li>
              <li>Custom designed for dynamic messaging and promotions</li>
              <li>Multi-location synchronization for consistent brand messaging</li>
              <li>Professional installation by certified technicians</li>
            </ul>
            <button>Call Us To Get Started</button>
          </div>
        </div>
        <div className={styles.servicesCardB}>
          <div className={styles.servicesTextB}>
            <h2>Professionally-Crafted Embroidery</h2>
            <h3>Our exclusive embroidery process delivers executive services competitors can’t match:</h3>
            <ul>
              <li>Proprietary stitching techniques to ensure that every stitch adds a touch of professionalism and sophistication</li>
              <li>Wide array of colors, styles, and designs to create unique embroidery that captures your organization’s essence</li>
              <li>Color-Match across all materials and applications</li>
              <li>Rapid execution for even the most complex designs</li>
              <li>Enterprise volume capabilities with individual-level quality control</li>
            </ul>
            <button>Get Started Today</button>
          </div>
          <div className={styles.servicesImgGrid}>
            <img src="../images/image9.jpg" alt="semi truck" />
            <img src="../images/image8.jpg" alt="pickup truck" />
            <img src="../images/image7.jpg" alt="Apartment Homes signage" />
            <img src="../images/image6.jpg" alt="Boss Lady hat" />
          </div>
        </div>
        <div className={styles.servicesCardA}>
          <div className={styles.servicesImgGrid}>
            <img src="../images/image9.jpg" alt="semi truck" />
            <img src="../images/image8.jpg" alt="pickup truck" />
            <img src="../images/image7.jpg" alt="Apartment Homes signage" />
            <img src="../images/image6.jpg" alt="Boss Lady hat" />
          </div>
          <div className={styles.servicesTextA}>
            <h2>Vehicle Wrap Services</h2>
            <h3>Convert vehicles into extraordinary marketing assets:</h3>
            <ul>
              <li>Full custom wraps or partial graphic solutions for any vehicle type</li>
              <li>Professionally designed layouts that maximize brand visibility</li>
              <li>Certified materials for Texas weather durability</li>
              <li>Installation by certified professionals at our Terrell facility</li>
              <li>Custom Solutions for Businesses Managing Multiple Vehicles</li>
            </ul>
            <button>Call Us To Get Started</button>
          </div>
        </div>
        <div className={styles.servicesCardB}>
          <div className={styles.servicesTextB}>
            <h2>Business Printing Services</h2>
            <h3>Maintain consistent professional branding with our printing solutions for all business communication needs:</h3>
            <ul>
              <li>Company identity packages (business cards, letterhead, envelopes)</li>
              <li>Marketing collateral (brochures, presentation folders, sell sheets)</li>
              <li>Large format printing (banners, posters, trade show displays)</li>
              <li>Direct mail campaign materials</li>
              <li>Internal communication and operational documents</li>
            </ul>
            <button>Get Started Today</button>
          </div>
          <div className={styles.servicesImgGrid}>
            <img src="../images/image9.jpg" alt="semi truck" />
            <img src="../images/image8.jpg" alt="pickup truck" />
            <img src="../images/image7.jpg" alt="Apartment Homes signage" />
            <img src="../images/image6.jpg" alt="Boss Lady hat" />
          </div>
        </div>
        <div className={styles.servicesCardA}>
          <div className={styles.servicesImgGrid}>
            <img src="../images/image9.jpg" alt="semi truck" />
            <img src="../images/image8.jpg" alt="pickup truck" />
            <img src="../images/image7.jpg" alt="Apartment Homes signage" />
            <img src="../images/image6.jpg" alt="Boss Lady hat" />
          </div>
          <div className={styles.servicesTextA}>
            <h2>Promotional Products</h2>
            <h3>Our carefully curated promotional products transform everyday items into powerful marketing tools that keep your brand top-of-mind:</h3>
            <ul>
              <li>Executive gifts that strenghten key relationships</li>
              <li>Trade show items that generate qualified leads</li>
              <li>Employee recognition products that boost retention</li>
              <li>Client appreciation gifts that reinforce partnerships</li>
              <li>Industry-specific items relevant to your target market</li>
            </ul>
            <button>Call Us To Get Started</button>
          </div>
        </div>
      </div>
      <div className={styles.execProcess}>
        <div className={styles.execProcessContainer}>
          <h2>Our Executive Process</h2>
          <h3>1. Strategic Consultation</h3>
          <p>Our process begins with a comprehensive consultation to identify your precise business objectives, brand positioning, and target audience demographics. This strategic foundation ensures that your print solutions directly support your objectives.</p>
          <p className={styles.dash}>-</p>
          <h3>2. Custom Solution Design</h3>
          <p>Our expert team develops tailored design recommendations engineered explicitly for your business needs.</p>
          <p className={styles.dash}>-</p>
          <h3>3. Professional Execution</h3>
          <p>Upon approval, our Terrell facility begins production using our state-of-the-art equipment and technology to create exceptional print products that outshine competitors.</p>
          <p className={styles.dash}>-</p>
          <h3>4. Precision Implementation</h3>
          <p>Whether installing LED signage, wrapping vehicles, or delivering printed materials, our expert team ensures flawless execution with minimal disruption to your business operations.</p>
        </div>
      </div>
    </main>
  );
}
