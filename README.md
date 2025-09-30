
# RICHMAN Forex Bot — Landing

Готовый лендинг (Next.js 14 + Tailwind) с разделами: Hero, Преимущества, Результаты (слайдер Myfxbook), Тарифы и Партнёрам.

## Локальный запуск
```bash
npm install
npm run dev
```
Откройте http://localhost:3000

## Сборка
```bash
npm run build
npm start
```

## Деплой на Vercel
1) Создайте репозиторий на GitHub и запушьте файлы.
2) Зайдите на vercel.com → Add New Project → выберите репозиторий.
3) Framework: Next.js, Build command: `next build`, Output: `.next`.
4) Deploy.

## Где менять контент
- `app/page.tsx` — тексты, тарифы и ссылки.
- `public/logo-richman.png` — логотип.
- `public/myfxbook*.jpg` — скриншоты результатов.
