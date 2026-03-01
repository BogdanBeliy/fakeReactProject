import { useState, useEffect, useRef } from 'react';
import { fetchProducts } from '../api/mockApi';
import ProductCard from './ProductCard';
import styles from './ProductCarousel.module.css';

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const wrapRef = useRef(null);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragThreshold = 5;

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const handleScroll = () => {};

  const handlePointerDown = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    didDragRef.current = false;
    startXRef.current = e.pageX ?? e.touches?.[0]?.pageX;
    scrollLeftRef.current = el.scrollLeft;
    el.style.scrollSnapType = 'none';
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current || !wrapRef.current) return;
    if (e.cancelable) e.preventDefault();
    const x = e.pageX ?? e.touches?.[0]?.pageX;
    if (Math.abs(x - startXRef.current) > dragThreshold) didDragRef.current = true;
    const dx = startXRef.current - x;
    wrapRef.current.scrollLeft = scrollLeftRef.current + dx;
  };

  const handlePointerUp = () => {
    if (wrapRef.current) {
      wrapRef.current.style.scrollSnapType = '';
    }
    isDraggingRef.current = false;
    setTimeout(() => { didDragRef.current = false; }, 0);
  };

  const handleWrapClick = (e) => {
    if (didDragRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onUp = () => handlePointerUp();
    const onTouchMove = (e) => {
      if (isDraggingRef.current) e.preventDefault();
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp, { passive: true });
    window.addEventListener('touchcancel', onUp, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('touchcancel', onUp);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

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
      <div
        ref={wrapRef}
        className={styles.carouselWrap}
        onScroll={handleScroll}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onClickCapture={handleWrapClick}
        role="region"
        aria-label="Карусель товаров"
      >
        <div className={styles.carousel}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
