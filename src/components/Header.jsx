import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCartCount } from '../api/mockApi';
import cartIcon from '../assets/icons/cart.svg';
import styles from './Header.module.css';

const navItems = [
  { path: '/men', label: 'мужские' },
  { path: '/women', label: 'Женские' },
  { path: '/new', label: 'Новинка' },
  { path: '/coming', label: 'Скоро в продаже' },
];

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCartCount().then((res) => setCartCount(res.count));
    const onCartUpdate = () => fetchCartCount().then((res) => setCartCount(res.count));
    window.addEventListener('cart-update', onCartUpdate);
    return () => window.removeEventListener('cart-update', onCartUpdate);
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        KROS.BY
      </Link>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link to="/cart" className={styles.cart} aria-label="Корзина">
        <img src={cartIcon} alt="" className={styles.cartIcon} width={24} height={24} />
        {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
      </Link>
    </header>
  );
}
