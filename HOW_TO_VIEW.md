# Как посмотреть сайт

## Способ 1: Локальный сервер (самый простой)

Открой терминал в папке проекта и выполни:

```bash
npm run preview
```

Сайт откроется по адресу: **http://localhost:4173**

## Способ 2: Открыть файл напрямую

Открой файл `dist/index.html` в браузере (двойной клик).

⚠️ **Важно:** При локальном открытии отправка форм может не работать из-за ограничений браузера. Для полной функциональности используй Способ 1 или загрузи на хостинг.

## Способ 3: Загрузить на хостинг

### Netlify (бесплатно, рекомендую):
1. Зайди на https://app.netlify.com/drop
2. Перетащи папку `dist/` в окно браузера
3. Получишь рабочую ссылку вида `https://random-name.netlify.app`

### Другие варианты:
- **Vercel** (бесплатно)
- **GitHub Pages** (бесплатно)
- **Timeweb / Beget / Reg.ru** (платные российские хостинги)

---

# Как заменить плейсхолдеры на реальные фото

## Проблема

Google Drive не позволяет напрямую встраивать файлы из-за CORS-ограничений. Нужно получить **прямые ссылки** на изображения.

## Решение: Получить прямые ссылки

### Шаг 1: Открой файл в Google Drive

Перейди в папку: https://drive.google.com/drive/folders/1W9U9exMK9jSukMICb3h2RFgJfID1zOnm

### Шаг 2: Сделай файл публичным

1. Кликни правой кнопкой на файл → **"Поделиться"**
2. В разделе "Общий доступ" выбери **"Все, у кого есть ссылка"**
3. Нажми **"Готово"**

### Шаг 3: Скопируй ссылку

1. Нажми **"Копировать ссылку"**
2. Ссылка будет выглядеть так:
   ```
   https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
   ```

### Шаг 4: Преобразуй в прямую ссылку

Из ссылки:
```
https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
```

Извлеки ID файла (часть между `/d/` и `/view`):
```
1ABC123XYZ456
```

Прямая ссылка будет:
```
https://drive.google.com/uc?export=view&id=1ABC123XYZ456
```

### Шаг 5: Замени в коде

Открой `src/App.tsx` и найди плейсхолдеры. Замени их на `<img>` с прямой ссылкой.

**Пример:**

Было:
```tsx
<div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden relative">
  <div className="absolute inset-0 pattern-stripes"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
    <div className="text-6xl mb-4">🔧</div>
    <p className="text-lg font-medium opacity-80">Фото буровой установки</p>
  </div>
</div>
```

Стало:
```tsx
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
  <img 
    src="https://drive.google.com/uc?export=view&id=ВАШ_ID_ФАЙЛА" 
    alt="Буровая установка" 
    className="w-full h-full object-cover"
  />
</div>
```

---

## Какие файлы заменить

### 1. Hero (главный экран)
**Файл:** `большая установка процесс.jpg` или `Рабочий процесс.jpg`

Найди в коде:
```tsx
<div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700
```

### 2. Секция "Фильтры"
**Файлы:** `обсадной фильтр сталь.jpeg`, `стальной обсадной фильтр.jpeg`, `фильтр обсадной стальной.jpeg`

Найди в коде:
```tsx
<div className="aspect-square rounded-2xl bg-white/5 border border-white/10
```

### 3. Большая буровая
**Файл:** `большая установка процесс.jpg` или `Буровая установка УРБ-2,5.jpg`

Найди в коде:
```tsx
<div className="aspect-[16/10] bg-gradient-to-br from-slate-200 to-slate-300
```

### 4. Малогабаритная буровая
**Файл:** `гусеничная буровая.jpg` или `гусеничная буровая процесс.jpg`

Найди в коде:
```tsx
<div className="aspect-[16/10] bg-gradient-to-br from-amber-100 to-amber-200
```

### 5. Дополнительные машины (4 карточки)
- `Водовоз камаз 43118.jpg`
- `манипулятор камаз 43118.jpg`
- `манипулятор газ 3308.jpg`
- `Эвакуатор камаз 4308.jpg`

Найди в коде:
```tsx
<div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200
```

---

## Альтернатива: Использовать локальные файлы

Если не хочешь возиться с прямыми ссылками, можешь:

1. Скачать все фото из Google Drive
2. Создать папку `public/images/`
3. Скопировать туда все фото
4. Использовать локальные пути:

```tsx
<img src="/images/burovaya.jpg" alt="..." />
```

---

## Логотип

Сейчас используется SVG-логотип, встроенный в код (файл `src/components/Logo.tsx`).

Если хочешь использовать реальный логотип из папки `H2O-Pro_logo_pack`:

1. Скачай `H2O-Pro_color.svg` или `H2O-Pro_color_5000px.png`
2. Положи в `public/`
3. Замени компонент `<LogoFull />` на:

```tsx
<img src="/H2O-Pro_color.svg" alt="H2O-Про" className="h-10" />
```

---

## Нужна помощь?

Если что-то непонятно — напиши, помогу разобраться!
