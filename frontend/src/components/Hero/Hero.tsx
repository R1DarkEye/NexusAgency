"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import { useBooking } from '@/context/BookingContext';

export default function Hero() {
  const { openBookingModal } = useBooking();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Web Development Agency</div>
          <h1 className={styles.title}>
            We Build Websites That <span>Drive Growth</span>
          </h1>
          <p className={styles.description}>
            Nexus Agency builds fast, scalable and high-performing websites that help brands stand out and grow online.
          </p>
          
          <div className={styles.ctaGroup}>
            <button onClick={openBookingModal} className={styles.primaryCta}>
              Book a Free Consultation <span>→</span>
            </button>
            <Link href="#work" className={styles.secondaryCta}>
              See Our Work <span>→</span>
            </Link>
          </div>
          
          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" width={40} height={40} alt="Client" className={styles.avatar} />
              <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" width={40} height={40} alt="Client" className={styles.avatar} />
              <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" width={40} height={40} alt="Client" className={styles.avatar} />
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" width={40} height={40} alt="Client" className={styles.avatar} />
            </div>
            <div className={styles.socialProofText}>
              <strong>50+</strong> happy clients<br/>worldwide
            </div>
          </div>
        </div>
        
        <div className={styles.rightCol}>
          <Image 
            src="/images/hero-laptop.png" 
            width={800} 
            height={500} 
            alt="Nexus Agency Dashboard" 
            className={styles.laptopImg}
            priority
          />
        </div>
      </div>
    </section>
  );
}
