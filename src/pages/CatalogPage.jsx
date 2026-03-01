import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/mockApi';
import styles from './CatalogPage.module.css';

const pathToCategory = { '/men': 'men', '/women': 'women', '/new': 'new', '/coming': 'coming', '/kids': 'kids' };

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const categoryFromPath = pathToCategory[pathname];
  const category = searchParams.get('category') || categoryFromPath;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts({ category: category || undefined }).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [category]);

  const titleMap = { men: 'Мужские', women: 'Женские', new: 'Новинка', coming: 'Скоро в продаже', kids: 'Детские' };
  const pageTitle = category ? (titleMap[category] || category) : 'Каталог';

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{pageTitle}</h1>
        {loading ? (
          <p className={styles.loading}>Загрузка...</p>
        ) : products.length === 0 ? (
          <p className={styles.empty}>Товаров не найдено</p>
        ) : (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
