import { Link } from 'react-router-dom';
import { useState } from 'react';
import { subscribeNewsletter } from '../api/mockApi';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const navCategories = [
  { path: '/men', label: 'мужские' },
  { path: '/women', label: 'Женские' },
  { path: '/kids', label: 'Детские' },
  { path: '/new', label: 'Новинка' },
  { path: '/coming', label: 'Скоро в продаже' },
];

const navInfo = [
  { path: '/delivery', label: 'Доставка' },
  { path: '/sizes', label: 'Размеры' },
  { path: '/return', label: 'Возврат' },
  { path: '/payment', label: 'Оплата' },
  { path: '/contacts', label: 'Контакты' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.navCol}>
          {navCategories.map((item) => (
            <Link key={item.path} to={item.path} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className={styles.navCol}>
          {navInfo.map((item) => (
            <Link key={item.path} to={item.path} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.subscribe}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrap}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.input}
                disabled={loading}
              />
              <button type="submit" className={styles.submit} disabled={loading} aria-label="Подписаться">
                →
              </button>
            </div>
          </form>
          {status === 'success' && <p className={styles.messageSuccess}>Вы подписаны</p>}
          {status === 'error' && <p className={styles.messageError}>Ошибка</p>}
        </div>
        <SocialLinks className={styles.socialFooter} />
      </div>
    </footer>
  );
}
