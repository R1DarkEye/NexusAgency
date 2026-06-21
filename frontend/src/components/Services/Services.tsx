import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: 'Custom Website Development',
      desc: 'Tailored websites built from scratch to match your brand and business goals.',
      icon: '💻',
    },
    {
      title: 'E-Commerce Development',
      desc: 'High-converting online stores with seamless shopping experiences.',
      icon: '🛒',
    },
    {
      title: 'CMS Development',
      desc: 'Easy-to-manage websites using WordPress, Webflow and headless CMS.',
      icon: '🗂️',
    },
    {
      title: 'Website Redesign',
      desc: 'Modern, high-performing redesigns that improve UX and conversion.',
      icon: '✨',
    },
    {
      title: 'Maintenance & Support',
      desc: 'Ongoing care and updates to keep your website fast, secure and reliable.',
      icon: '🛡️',
    },
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>What We Do</div>
            <h2 className={styles.title}>
              Powerful Websites.<br/>Built for <span>Results.</span>
            </h2>
          </div>
          <p className={styles.description}>
            We combine strategy, design and development to create websites that not only look amazing but also deliver real business impact.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.arrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
