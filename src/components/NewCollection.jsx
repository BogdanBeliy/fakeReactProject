import { Link } from 'react-router-dom';
import styles from './NewCollection.module.css';

const imageSrc = '/new%20collection.png';

export default function NewCollection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrap}>
        <img src={imageSrc} alt="Новая коллекция" className={styles.image} />
      </div>
      <div className={styles.content}>
        <p className={styles.bgTitle}>NEW COLLECTION</p>
        <h2 className={styles.title}>НОВАЯ КОЛЛЕКЦИЯ</h2>
        <p className={styles.subtitle}>BY Кайри Ирвинг</p>
        <Link to="/new" className={styles.button}>
          Подробнее
        </Link>
      </div>
    </section>
  );
}
