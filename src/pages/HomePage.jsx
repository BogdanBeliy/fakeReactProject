import Header from '../components/Header';
import Hero from '../components/Hero';
import NewCollection from '../components/NewCollection';
import LastArrivals from '../components/LastArrivals';
import Subscribe from '../components/Subscribe';
import ProductCarousel from '../components/ProductCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Hero />
          <div className={styles.twoCol}>
            <LastArrivals />
            <NewCollection />
          </div>
          <Subscribe />
          <ProductCarousel />
          <CategoryGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
