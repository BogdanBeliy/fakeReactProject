import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchProducts, addToCart } from '../api/mockApi';
import styles from './ProductPage.module.css';

function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU', { style: 'decimal', maximumFractionDigits: 0 }).format(price) + ' ₽';
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((res) => {
      const found = res.data.find((p) => p.id === id);
      setProduct(found || null);
      setLoading(false);
    });
  }, [id]);

  async function handleAddToCart() {
    if (!product) return;
    try {
      await addToCart(product.id);
      window.dispatchEvent(new CustomEvent('cart-update'));
    } catch (_) {}
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <Header />
        <main className={styles.main}><p>Загрузка...</p></main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <p>Товар не найден.</p>
          <Link to="/catalog">В каталог</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img src={product.image} alt={product.name} className={styles.image} />
          </div>
          <div className={styles.info}>
            <p className={styles.brand}>{product.brand}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <button type="button" className={styles.addBtn} onClick={handleAddToCart}>
              В корзину
            </button>
            <Link to="/catalog" className={styles.back}>← Назад в каталог</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
