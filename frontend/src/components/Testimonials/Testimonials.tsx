import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      <div className={`container ${styles.content}`}>
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Clients Love Us</div>
          <h2 className={styles.title}>
            What Our Clients<br/>Say <span>About Us.</span>
          </h2>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.card}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.quote}>
              Nexus Agency transformed our ideas into a stunning website that not only looks amazing but also drives real results. Highly professional and easy to work with!
            </p>
            <div className={styles.authorRow}>
              <div className={styles.authorInfo}>
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Sarah Thompson" 
                  width={48} 
                  height={48} 
                  className={styles.avatar} 
                />
                <div>
                  <div className={styles.authorName}>Sarah Thompson</div>
                  <div className={styles.authorRole}>Marketing Director, Finvista</div>
                </div>
              </div>
              
              <div className={styles.navArrows}>
                <button className={styles.arrowBtn} aria-label="Previous testimonial">←</button>
                <button className={styles.arrowBtn} aria-label="Next testimonial">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
