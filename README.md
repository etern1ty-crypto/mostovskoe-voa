# Мостовское ВОА — сайт автошколы

Полный ребрендинг сайта районного отделения Всероссийского общества автомобилистов в посёлке Мостовском (Краснодарский край). Заменяет устаревший Joomla-сайт `mostovskoevoa.ru` современным быстрым статическим сайтом.

## Стек

- **[Astro](https://astro.build/)** — статический генератор сайтов
- **[Tailwind CSS](https://tailwindcss.com/)** v4 — utility-first стили
- **TypeScript** в strict-режиме
- **Google Fonts** — Inter + Manrope с поддержкой кириллицы

## Структура

```
src/
├── components/       # Общие компоненты (Header, Footer, Icon, ...)
├── data/             # Контент: site, categories, staff, fleet, documents, faq
├── layouts/          # Layout.astro с SEO/JSON-LD
├── pages/            # 8 главных страниц + динамические /categories/[slug]
└── styles/global.css # Дизайн-система (цвета, типографика, компонентные классы)
```

## Скрипты

```bash
npm install      # установить зависимости
npm run dev      # дев-сервер на http://localhost:4321
npm run build    # сборка в ./dist
npm run preview  # локальный preview сборки
```

## Замена плейсхолдеров

Все фотозаглушки помечены комментариями `<!-- TODO: replace placeholder -->` в `src/components/Placeholder.astro`. Заменяйте на `<img src="..." alt="...">` по мере появления реальных фотографий.

## Деплой

Совместимо с Vercel, Netlify, Cloudflare Pages, GitHub Pages — это статический сайт.
