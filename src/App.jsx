import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/men" element={<CatalogPage />} />
        <Route path="/women" element={<CatalogPage />} />
        <Route path="/new" element={<CatalogPage />} />
        <Route path="/coming" element={<CatalogPage />} />
        <Route path="/kids" element={<CatalogPage />} />
        <Route path="/delivery" element={<Layout><PlaceholderPage title="Доставка" /></Layout>} />
        <Route path="/sizes" element={<Layout><PlaceholderPage title="Размеры" /></Layout>} />
        <Route path="/return" element={<Layout><PlaceholderPage title="Возврат" /></Layout>} />
        <Route path="/payment" element={<Layout><PlaceholderPage title="Оплата" /></Layout>} />
        <Route path="/contacts" element={<Layout><PlaceholderPage title="Контакты" /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: 100, textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
      <h1>{title}</h1>
      <p>Раздел в разработке.</p>
    </div>
  );
}

export default App;
