import { Link } from 'react-router-dom';
import styles from './LastArrivals.module.css';

const imageSrc = '/last%20arrival.png';

export default function LastArrivals() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.bgTitle}>new arrivals</p>
        <h2 className={styles.title}>Последние поступления</h2>
        <p className={styles.subtitle}>5 новых моделей этого сезона</p>
        <Link to="/catalog?new=1" className={styles.button}>
          Выбрать
        </Link>
      </div>
      <div className={styles.imageWrap}>
        <img src={imageSrc} alt="Последние поступления" className={styles.image} />
      </div>
    </section>
  );
}
