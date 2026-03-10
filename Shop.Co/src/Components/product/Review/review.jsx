import styles from './review.module.css';

const reviews = [
  {
    name: 'Sarah M.',
    initial: 'S',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: 'Alex K.',
    initial: 'A',
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: 'James L.',
    initial: 'J',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: 'Monica R.',
    initial: 'M',
    rating: 5,
    text: "Shop.co has completely transformed my wardrobe. The quality of their pieces is outstanding and delivery is always prompt. Highly recommend to anyone who loves fashion.",
  },
  {
    name: 'Daniel W.',
    initial: 'D',
    rating: 5,
    text: "Great experience overall. The clothes fit perfectly and the fabric quality is better than I expected for the price. Will definitely be shopping here again.",
  },
  {
    name: 'Priya S.',
    initial: 'P',
    rating: 5,
    text: "I love how easy it is to find stylish and affordable pieces here. Every order has been exactly as described and the packaging is always neat and professional.",
  },
];

const StarRating = ({ count }) => (
  <div className={styles.stars}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className={styles.star}>★</span>
    ))}
  </div>
);

const ReviewCard = ({ name, initial, rating, text }) => (
  <div className={styles.card}>
    <StarRating count={rating} />
    <div className={styles.reviewer}>
      <div className={styles.avatar}>{initial}</div>
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.verified}>✔ Verified</div>
      </div>
    </div>
    <p className={styles.text}>{text}</p>
  </div>
);

const Review = () => {
  const doubled = [...reviews,...reviews];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>OUR HAPPY CUSTOMERS</h2>
        <div className={styles.arrows}>
          <button className={styles.arrow} aria-label="Previous">&#8592;</button>
          <button className={styles.arrow} aria-label="Next">&#8594;</button>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {doubled.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>

      
      <div className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="✉  Enter your email address"
            className={styles.input}
          />
          <button className={styles.subscribeBtn}>Subscribe to Newsletter</button>
        </div>
      </div>
    </section>
  );
};

export default Review;