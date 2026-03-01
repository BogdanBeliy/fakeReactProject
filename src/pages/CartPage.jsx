import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './CartPage.module.css';

export default function CartPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Корзина</h1>
        <p className={styles.empty}>В корзине пока пусто. Перейдите в каталог, чтобы добавить товары.</p>
        <Link to="/catalog" className={styles.link}>
          В каталог
        </Link>
      </main>
      <Footer />
    </div>
  );
}
