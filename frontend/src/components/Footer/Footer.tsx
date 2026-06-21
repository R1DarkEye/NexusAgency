import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>N</div>
              <span>NEXUS<br/><span style={{fontSize: '12px', fontWeight: 500, color: 'var(--text-body)'}}>AGENCY</span></span>
            </Link>
            <p className={styles.companyDesc}>
              We build high-performance websites that help brands grow, engage and succeed online.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">tw</a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">ig</a>
            </div>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="#work">Work</Link></li>
              <li className={styles.linkItem}><Link href="#services">Services</Link></li>
              <li className={styles.linkItem}><Link href="#about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="#insights">Insights</Link></li>
              <li className={styles.linkItem}><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="#">Custom Website Development</Link></li>
              <li className={styles.linkItem}><Link href="#">E-Commerce Development</Link></li>
              <li className={styles.linkItem}><Link href="#">CMS Development</Link></li>
              <li className={styles.linkItem}><Link href="#">Website Redesign</Link></li>
              <li className={styles.linkItem}><Link href="#">Maintenance & Support</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉</span>
                hello@nexusagency.com
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                +1 (234) 567-8900
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                123 Business Ave,<br/>New York, NY 10001, USA
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          &copy; 2025 Nexus Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
