# Инструкция по замене плейсхолдеров на реальные фото

## Что нужно сделать

Сейчас на сайте используются плейсхолдеры (заглушки) вместо реальных фотографий. Чтобы заменить их на настоящие фото из Google Drive, выполните следующие шаги:

---

## Шаг 1: Скачайте фото из Google Drive

Перейдите по ссылке: https://drive.google.com/drive/folders/1W9U9exMK9jSukMICb3h2RFgJfID1zOnm

Скачайте все изображения в папку на компьютере.

---

## Шаг 2: Загрузите фото на хостинг

### Вариант А: Бесплатный хостинг изображений (проще)

1. Зайдите на один из сайтов:
   - **Imgur**: https://imgur.com/upload
   - **Postimages**: https://postimages.org
   - **ImgBB**: https://imgbb.com

2. Загрузите каждое фото

3. Скопируйте **прямую ссылку** на изображение (обычно кнопка "Direct link" или "Прямая ссылка")

   Пример прямой ссылки:
   ```
   https://i.imgur.com/ABC123.jpg
   ```

### Вариант Б: Google Drive (сложнее, нужны прямые ссылки)

Если хотите использовать Google Drive, нужно получить прямые ссылки на файлы:

1. Откройте папку в Google Drive
2. Кликните правой кнопкой на файл → "Поделиться" → "Получить доступ по ссылке"
3. Измените доступ на "Все, у кого есть ссылка"
4. Скопируйте ID файла из URL (длинный набор символов после `/d/`)
5. Прямая ссылка будет иметь вид:
   ```
   https://drive.google.com/uc?export=view&id=ВАШ_FILE_ID
   ```

---

## Шаг 3: Замените плейсхолдеры в коде

Откройте файл `src/App.tsx` и найдите следующие места:

### 1. Hero секция (главный экран)

Найдите строку:
```tsx
<div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden relative">
```

Замените содержимое на:
```tsx
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
  <img 
    src="ВАША_ССЫЛКА_НА_ФОТО" 
    alt="Буровая установка" 
    className="w-full h-full object-cover"
  />
</div>
```

### 2. Секция "Фильтры"

Найдите:
```tsx
<div className="aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
```

Замените на:
```tsx
<div className="aspect-square rounded-2xl overflow-hidden relative">
  <img 
    src="ВАША_ССЫЛКА_НА_ФОТО_ПРОИЗВОДСТВА" 
    alt="Производство фильтров" 
    className="w-full h-full object-cover"
  />
</div>
```

### 3. Секция "Техника" - Большая буровая

Найдите:
```tsx
<div className="aspect-[16/10] bg-gradient-to-br from-slate-200 to-slate-300 relative">
```

Замените на:
```tsx
<div className="aspect-[16/10] relative">
  <img 
    src="ССЫЛКА_НА_большая_установка_процесс.jpg" 
    alt="Большая буровая установка" 
    className="w-full h-full object-cover"
  />
</div>
```

### 4. Секция "Техника" - Малогабаритная буровая

Найдите:
```tsx
<div className="aspect-[16/10] bg-gradient-to-br from-amber-100 to-amber-200 relative">
```

Замените на:
```tsx
<div className="aspect-[16/10] relative">
  <img 
    src="ССЫЛКА_НА_гусеничная_буровая.jpg" 
    alt="Малогабаритная буровая установка" 
    className="w-full h-full object-cover"
  />
</div>
```

### 5. Дополнительные машины (4 карточки)

Найдите блок с 4 машинами и замените каждую карточку:

```tsx
<div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
  <span className="text-4xl">🚛</span>
</div>
```

На:
```tsx
<div className="aspect-[4/3]">
  <img 
    src="ССЫЛКА_НА_Водовоз_камаз_43118.jpg" 
    alt="Водовоз КамАЗ 43118" 
    className="w-full h-full object-cover"
  />
</div>
```

Повторите для всех 4 машин.

---

## Шаг 4: Пересоберите проект

После замены всех фото выполните команду:

```bash
npm run build
```

Готовые файлы появятся в папке `dist/`.

---

## Какие фото использовать

Из вашей папки Google Drive:

| Место на сайте | Файл из Google Drive |
|----------------|----------------------|
| Hero (главный экран) | `большая установка процесс.jpg` или `Рабочий процесс.jpg` |
| Фильтры | Нужны фото производства/фильтров (если есть) |
| Большая буровая | `большая установка процесс.jpg` или `Буровая установка УРБ-2,5.jpg` |
| Малогабаритная | `гусеничная буровая.jpg` или `гусеничная буровая процесс.jpg` |
| Водовоз | `Водовоз камаз 43118.jpg` |
| Манипулятор КамАЗ | `манипулятор камаз 43118.jpg` |
| Манипулятор ГАЗ | `манипулятор газ 3308.jpg` |
| Эвакуатор | `Эвакуатор камаз 4308.jpg` |

---

## Альтернатива: Локальные файлы

Если не хотите использовать внешний хостинг, можно положить фото в папку `public/images/` и использовать локальные пути:

```tsx
<img src="/images/burovaya.jpg" alt="..." />
```

---

## Нужна помощь?

Если что-то непонятно — напишите, помогу разобраться!
