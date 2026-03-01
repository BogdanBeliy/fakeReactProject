import { Link } from 'react-router-dom';
import { addToCart } from '../api/mockApi';
import styles from './ProductCard.module.css';

function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU', { style: 'decimal', maximumFractionDigits: 0 }).format(price) + ' ₽';
}

export default function ProductCard({ product }) {
  const { id, brand, name, description, price, image } = product;

  async function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await addToCart(id);
      window.dispatchEvent(new CustomEvent('cart-update'));
    } catch (_) {}
  }

  return (
    <article className={styles.card}>
      <Link to={`/product/${id}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <img src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.brand}>{brand}</h3>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{formatPrice(price)}</p>
        </div>
        <button type="button" className={styles.addBtn} onClick={handleAddToCart}>
          В корзину
        </button>
      </Link>
    </article>
  );
}
