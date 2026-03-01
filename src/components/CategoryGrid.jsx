import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../api/mockApi';
import styles from './CategoryGrid.module.css';

export default function CategoryGrid() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>Выбирай лучшее</h2>
        <p className={styles.loading}>Загрузка...</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <p className={styles.bgTitle}>choose the best</p>
      <h2 className={styles.title}>Выбирай лучшее</h2>
      <p className={styles.subtitle}>более 400 моделей в наличии</p>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.id} to={`/catalog?category=${cat.id}`} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={cat.image} alt={cat.title} className={styles.image} />
            </div>
            <span className={styles.cardTitle}>{cat.title}</span>
            <span className={styles.cardCount}>{cat.count} моделей</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
