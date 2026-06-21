import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedWork.module.css';

export default function FeaturedWork() {
  const projects = [
    {
      title: 'Finvista',
      category: 'Investment Platform',
      statValue: '+120%',
      statLabel: 'User Growth',
      image: '/images/project-1.png',
    },
    {
      title: 'Archiux',
      category: 'Architecture Studio',
      statValue: '+85%',
      statLabel: 'Leads Increase',
      image: '/images/project-2.png',
    },
    {
      title: 'NutriBoost',
      category: 'Health & Nutrition Brand',
      statValue: '+95%',
      statLabel: 'Sales Growth',
      image: '/images/project-3.png',
    },
  ];

  return (
    <section className={styles.workSection} id="work">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Featured Work</div>
            <h2 className={styles.title}>
              Websites That<br/>Deliver <span>Impact.</span>
            </h2>
          </div>
          <Link href="#projects" className={styles.viewAll}>
            View All Projects <span>→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardCategory}>{project.category}</p>
                
                <div className={styles.stats}>
                  <div className={styles.statValue}>{project.statValue}</div>
                  <div className={styles.statLabel}>{project.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
