import { useState } from 'react';
import { subscribeNewsletter } from '../api/mockApi';
import SocialLinks from './SocialLinks';
import styles from './Subscribe.module.css';

export default function Subscribe() {
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
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.section}>
      <p className={styles.bgTitle}>subscribe</p>
      <h2 className={styles.title}>будь в курсе новинок первым</h2>
      <p className={styles.subtitle}>никакого спама, только лучшие предложения недели</p>
      <form className={styles.form} onSubmit={handleSubmit}>
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
      <p className={styles.or}>или</p>
      <SocialLinks className={styles.socialLarge} />
      {status === 'success' && <p className={styles.messageSuccess}>Вы подписаны на рассылку</p>}
      {status === 'error' && <p className={styles.messageError}>Проверьте email и попробуйте снова</p>}
    </section>
  );
}
