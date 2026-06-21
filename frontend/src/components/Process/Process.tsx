import styles from './Process.module.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We understand your goals, audience and requirements.',
      icon: '🔍',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'We create wireframes and stunning UI/UX designs.',
      icon: '✏️',
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'We build fast, responsive and scalable websites.',
      icon: '</>',
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'We test, optimize and launch for success.',
      icon: '🚀',
    },
  ];

  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.eyebrow}>Our Process</div>
          <h2 className={styles.title}>
            A Simple Process.<br/>Outstanding <span>Results.</span>
          </h2>
        </div>

        <div className={styles.stepsWrapper}>
          <div className={styles.line}></div>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.stepTitle}>
                <span className={styles.stepNumber}>{step.num}.</span> {step.title}
              </h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
