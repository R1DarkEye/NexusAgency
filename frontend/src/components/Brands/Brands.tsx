import styles from './Brands.module.css';

export default function Brands() {
  const brands = [
    { name: 'SOLARIS', icon: '⚙️' },
    { name: 'vertica', icon: '▼' },
    { name: 'Cloudly', icon: '☁️' },
    { name: 'Pulse', icon: '℗' },
    { name: 'snapkit', icon: '§' },
    { name: 'DASH', icon: 'D' },
    { name: 'Lineup', icon: '◎' },
  ];

  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <div className={styles.eyebrow}>Trusted by growing brands</div>
        <div className={styles.brandGrid}>
          {brands.map((brand, i) => (
            <div key={i} className={styles.brand}>
              <span style={{ fontSize: '24px' }}>{brand.icon}</span> {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
