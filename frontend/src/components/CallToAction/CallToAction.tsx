"use client";

import styles from './CallToAction.module.css';
import { useBooking } from '@/context/BookingContext';

export default function CallToAction() {
  const { openBookingModal } = useBooking();

  return (
    <section className={styles.ctaSection} id="contact">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.leftContent}>
            <div className={styles.iconWrapper}>↗</div>
            <h2 className={styles.title}>
              Ready to Build Your<br/>Next Big Thing?
            </h2>
          </div>
          
          <p className={styles.desc}>
            Let&apos;s create a website that elevates your brand, delivers results and sets you apart from the competition.
          </p>
          
          <button onClick={openBookingModal} className={styles.button}>
            Book a Free Consultation <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
