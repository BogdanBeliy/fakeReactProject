# KROS.BY

Интернет-магазин кроссовок по макету [Figma](https://www.figma.com/design/etBX5UROwKxtXB6tycVfOX/kros.by).

## Стек

- **React** + **Vite**
- **React Router** — маршрутизация
- CSS Modules — стили

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173).

## Сборка

```bash
npm run build
```

## Моки API

Все запросы к «бэкенду» эмулируются в `src/api/mockApi.js`:

- **fetchProducts({ category?, limit? })** — список товаров
- **fetchCategories()** — категории для блока «Выбирай лучшее»
- **fetchNewArrivals()** — последние поступления
- **subscribeNewsletter(email)** — подписка на рассылку
- **fetchCartCount()** — количество в корзине
- **addToCart(productId)** — добавить в корзину (увеличивает счётчик)

Имитируется задержка ответа (200–600 ms). Для подключения реального API достаточно заменить вызовы в компонентах на `fetch`/axios к вашему бэкенду.

## Маршруты

| Путь | Описание |
|------|----------|
| `/` | Главная (Hero, Новая коллекция, Подписка, карусель, категории) |
| `/catalog` | Каталог (опционально `?category=men|women|kids|running`) |
| `/product/:id` | Карточка товара |
| `/cart` | Корзина |
| `/men`, `/women`, `/new`, `/coming`, `/kids` | Каталог по категории |
| `/delivery`, `/sizes`, `/return`, `/payment`, `/contacts` | Заглушки страниц |
# fakeReactProject
