/**
 * Моки для запросов к API (kros.by)
 * Имитация задержки сети и типичных ответов
 */

const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

// Товары для карусели "Сейчас в топе" и каталога
export const mockProducts = [
  { id: '1', brand: 'Nike', name: 'Air Max 98', description: 'Женские кроссовки с клетчатым принтом', price: 10080, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', category: 'women' },
  { id: '2', brand: 'Nike', name: 'Air Max 270 react LX', description: 'Женская беговая обувь', price: 13990, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', category: 'women' },
  { id: '3', brand: 'Nike', name: 'ZoomX VaporFly NEXT%', description: 'Беговая обувь', price: 21490, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400', category: 'running' },
  { id: '4', brand: 'Nike', name: 'React Element 55', description: 'Мужская обувь', price: 10790, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400', category: 'men' },
  { id: '5', brand: 'Nike', name: 'Air Max 720', price: 15990, description: 'Мужские кроссовки', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', category: 'men' },
  { id: '6', brand: 'Jordan', name: 'Why Not? Zer0.3', price: 12990, description: 'Баскетбольные кроссовки', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400', category: 'men' },
  { id: '7', brand: 'Nike', name: 'Air Max 90', price: 11990, description: 'Детские кроссовки', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400', category: 'kids' },
];

// Категории для блока "Выбирай лучшее"
export const mockCategories = [
  { id: 'women', title: 'Женские', count: 82, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600' },
  { id: 'men', title: 'Мужские', count: 96, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600' },
  { id: 'running', title: 'беговые', count: 24, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600' },
  { id: 'kids', title: 'Детские', count: 73, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600' },
];

// Последние поступления (короткий список)
export const mockNewArrivals = mockProducts.slice(0, 5);

// Корзина (мок состояния)
let cartCount = 1;

/** Получить товары (топ / каталог) */
export async function fetchProducts(params = {}) {
  await delay();
  const { category, limit } = params;
  let list = [...mockProducts];
  if (category) {
    list = list.filter((p) => p.category === category);
  }
  return { data: limit ? list.slice(0, limit) : list };
}

/** Получить категории */
export async function fetchCategories() {
  await delay();
  return { data: mockCategories };
}

/** Получить последние поступления */
export async function fetchNewArrivals() {
  await delay();
  return { data: mockNewArrivals };
}

/** Подписаться на рассылку */
export async function subscribeNewsletter(email) {
  await delay(600);
  if (!email || !email.includes('@')) {
    throw new Error('Некорректный email');
  }
  return { success: true, message: 'Вы подписаны на рассылку' };
}

/** Получить количество в корзине */
export async function fetchCartCount() {
  await delay(200);
  return { count: cartCount };
}

/** Добавить в корзину (мок) */
export async function addToCart(productId) {
  await delay(300);
  cartCount += 1;
  return { success: true, count: cartCount };
}
