import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/mockApi';
import ProductCard from './ProductCard';
import styles from './ProductCarousel.module.css';

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const containerRef = (node) => {
    if (!node) return;
    node.scrollLeft = scrollLeft;
  };

  const handleScroll = (e) => setScrollLeft(e.target.scrollLeft);

  if (loading) {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>Сейчас в топе</h2>
        <p className={styles.subtitle}>Загрузка...</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>Сейчас в топе</h2>
        <p className={styles.empty}>Товаров не найдено</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <p className={styles.bgTitle}>best choice</p>
      <h2 className={styles.title}>Сейчас в топе</h2>
      <p className={styles.subtitle}>лучшие 20 моделей по мнению покупателей</p>
      <div className={styles.carouselWrap}>
        <div
          className={styles.carousel}
          ref={containerRef}
          onScroll={handleScroll}
          role="region"
          aria-label="Карусель товаров"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
