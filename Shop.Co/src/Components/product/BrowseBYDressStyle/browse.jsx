import styles from './browse.module.css';

const categories = [
  {
    label: 'Casual',
    cardClass: styles.cardCasual,
    imgClass: styles.imageCasual,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
  },
  {
    label: 'Formal',
    cardClass: styles.cardFormal,
    imgClass: styles.imageFormal,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
  },
  {
    label: 'Party',
    cardClass: styles.cardParty,
    imgClass: styles.imageParty,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
  },
  {
    label: 'Gym',
    cardClass: styles.cardGym,
    imgClass: styles.imageGym,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
];

const Browse = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>BROWSE BY DRESS STYLE</h2>
        <div className={styles.grid}>
          {categories.map(({ label, cardClass, imgClass, image }) => (
            <div key={label} className={`${styles.card} ${cardClass}`}>
              <span className={styles.label}>{label}</span>
              <img
                src={image}
                alt={label}
                className={`${styles.image} ${imgClass}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browse;