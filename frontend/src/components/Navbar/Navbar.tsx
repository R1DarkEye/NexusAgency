"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useBooking } from '@/context/BookingContext';

export default function Navbar() {
  const { openBookingModal } = useBooking();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>N</div>
          <span>NEXUS<br/><span style={{fontSize: '12px', fontWeight: 500, color: 'var(--text-body)'}}>AGENCY</span></span>
        </Link>
        
        <nav className={styles.navLinks}>
          <Link href="#work" className={styles.navLink}>Work</Link>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#insights" className={styles.navLink}>Insights ▾</Link>
        </nav>
        
        <button onClick={openBookingModal} className={styles.ctaButton}>
          Book a Call <span>→</span>
        </button>
      </div>
    </header>
  );
}
