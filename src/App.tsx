import { useState, useEffect } from 'react';
import { CallbackModal, LegalModal } from './components/Modals';

// ==================== КОНСТАНТЫ ====================

const PHONE = '+79183388845';
const PHONE_DISPLAY = '+7 (918) 338-88-45';
const TELEGRAM_URL = 'https://t.me/stepan222z';
const TELEGRAM_HANDLE = '@stepan222z';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOIOBZhC8PSQYReyJLWlFg-CPF8QaSIRMRh6fj6_Qez_NrpFnjg';

// ==================== HEADER ====================

function Header({ onCallback }: { onCallback: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Услуги' },
    { href: '#filters', label: 'Фильтры' },
    { href: '#process', label: 'Как работаем' },
    { href: '#equipment', label: 'Техника' },
    { href: '#faq', label: 'Вопросы' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">H₂O</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900 leading-tight">H2O-Про</div>
              <div className="text-[10px] text-slate-500 leading-tight tracking-wide uppercase">Бурение с интеллектом</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-blue-900 transition-colors font-medium">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="text-sm font-semibold text-slate-900 hover:text-blue-900 transition-colors">
              {PHONE_DISPLAY}
            </a>
            <button
              onClick={onCallback}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Перезвоните мне
            </button>
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-100">
            <nav className="flex flex-col gap-1 pt-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-sm font-medium">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a href={`tel:${PHONE}`} className="px-3 py-2 text-blue-900 font-semibold text-sm">{PHONE_DISPLAY}</a>
              <div className="flex gap-2 px-3">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-lg text-center">Telegram</a>
                <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg text-center">Max</a>
              </div>
              <button onClick={() => { onCallback(); setMobileOpen(false); }} className="mx-3 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg">
                Перезвоните мне
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ==================== HERO ====================

function Hero({ onDrilling, onSurvey }: { onDrilling: () => void; onSurvey: () => void }) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-slate-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Краснодарский край · с 2021 года
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Бурение скважин<br />на воду
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-4 max-w-xl leading-relaxed">
              Собственная техника и команда. Без подрядчиков. Работаем по договору — отвечаем за результат.
            </p>

            <p className="text-base text-slate-500 mb-8 max-w-xl">
              Бурение — за метр. Обустройство — по отдельной смете. Вы понимаете, из чего складывается стоимость.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onDrilling}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Обсудить стоимость бурения
              </button>
              <button
                onClick={onSurvey}
                className="px-6 py-3.5 bg-white border border-slate-200 hover:border-blue-900 hover:text-blue-900 text-slate-700 font-semibold rounded-lg transition-colors text-center"
              >
                Бесплатный выезд · Славянский р-он
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Работаем по договору
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Без посредников
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Гарантия на воду
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden relative">
              {/* Placeholder for real photo */}
              <div className="absolute inset-0 pattern-stripes"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                <div className="text-6xl mb-4">🔧</div>
                <p className="text-lg font-medium opacity-80">Фото буровой установки</p>
                <p className="text-sm opacity-50 mt-1">Будет заменено на реальное фото</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 max-w-[220px]">
              <div className="text-2xl font-bold text-blue-900">5 дней</div>
              <div className="text-xs text-slate-500 mt-0.5">Скважина 60 м + обустройство</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ADVANTAGES ====================

function Advantages() {
  const items = [
    {
      icon: '🏗️',
      title: 'Бурим сами. Обустраиваем сами.',
      text: 'Собственная команда и техника. Без привлечения подрядчиков — отвечаем за каждый этап.',
    },
    {
      icon: '📐',
      title: 'Прозрачная цена',
      text: 'Бурение — за метр. Обустройство — по отдельной смете. Вы понимаете, из чего складывается стоимость.',
    },
    {
      icon: '🚜',
      title: 'Малогабаритная буровая',
      text: 'Компактная установка на гусеничном ходу — для участков с ограниченным подъездом и готовым ландшафтом.',
    },
    {
      icon: '📋',
      title: 'Работаем по договору',
      text: 'Договор, акт приёма-передачи, паспорт скважины. Все документы — официально.',
    },
    {
      icon: '🔍',
      title: 'Обследуем участок до бурения',
      text: 'Выезжаем с прибором, определяем глубину и готовим смету. По Славянскому району — бесплатно.',
    },
    {
      icon: '🏠',
      title: 'Для дома, фермы, предприятия',
      text: 'Работаем с частными и корпоративными заказчиками. Подбираем технику и состав работ под объект.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 bg-drilling-equipment"></div>
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-slate-600">Работаем с конца 2021 года. Нас находят по рекомендациям — и это лучшая реклама.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all bg-white">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES ====================

function Services({ onDrilling, onCallback }: { onDrilling: () => void; onCallback: () => void }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
          <p className="text-lg text-slate-600">Три направления — от разведки до готовой скважины с оборудованием</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Drilling */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-5">💧</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Бурение скважин</h3>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span>Скважины для частных домов и ферм</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span>Промышленные водозаборные скважины</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span>Разведочное бурение</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span>Оплата за метр — прозрачно</li>
            </ul>
            <button onClick={onDrilling} className="text-blue-900 font-semibold text-sm hover:text-amber-600 transition-colors">
              Обсудить бурение →
            </button>
          </div>

          {/* Equipment / Well setup */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl mb-5">⚙️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Обустройство скважин</h3>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">•</span>Подбор и монтаж насосного оборудования</li>
              <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">•</span>Прокладка водопровода от скважины</li>
              <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">•</span>Установка кессона, автоматики</li>
              <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">•</span>Можно с вашим насосом</li>
            </ul>
            <button onClick={onCallback} className="text-blue-900 font-semibold text-sm hover:text-amber-600 transition-colors">
              Рассчитать обустройство →
            </button>
          </div>

          {/* Repair */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl mb-5">🔧</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ремонт и обслуживание</h3>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span>Диагностика существующих скважин</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span>Замена насосного оборудования</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span>Промывка и восстановление дебита</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span>Консультации по эксплуатации</li>
            </ul>
            <button onClick={onCallback} className="text-blue-900 font-semibold text-sm hover:text-amber-600 transition-colors">
              Узнать подробнее →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FILTERS BLOCK ====================

function FiltersBlock({ onFilter }: { onFilter: () => void }) {
  return (
    <section id="filters" className="py-16 md:py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-stripes"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-6">
              Собственное производство
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Фильтры для скважин — напрямую от производителя
            </h2>

            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Изготавливаем обсадные фильтры на ПВХ-трубе и металлической основе. Конструкцию, размеры и тип соединения согласуем под ваш заказ.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-blue-100">Фильтры на ПВХ-трубе любого диаметра и на металлической основе</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-blue-100">Любой тип соединения: резьба, сварка, муфта, без муфты</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-blue-100">Изготовим по вашему чертежу или подготовим чертёж под задачу</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-blue-100">Сроки: от 2 дней (ПВХ) до 10 дней (металл) на партию от 10 шт.</span>
              </div>
            </div>

            <button
              onClick={onFilter}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
            >
              Рассчитать изготовление фильтров
            </button>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-lg font-medium text-white/80">Фото производства и фильтров</p>
                <p className="text-sm text-white/40 mt-1">Будет заменено на реальное фото</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold">от 2 дней</div>
              <div className="text-xs opacity-80">Срок изготовления</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROCESS ====================

function Process() {
  const steps = [
    { num: '01', title: 'Звонок или заявка', text: 'Связываетесь с нами любым удобным способом. Обсуждаем задачу.' },
    { num: '02', title: 'Выезд на участок', text: 'Приезжаем, проводим инструментальную разведку. По Славянскому району — бесплатно.' },
    { num: '03', title: 'Смета и договор', text: 'Определяем глубину, материалы. Составляем смету. Заключаем договор.' },
    { num: '04', title: 'Бурение', text: 'Выполняем работы собственной техникой. Оплата за фактический метраж.' },
    { num: '05', title: 'Обустройство', text: 'Устанавливаем насос, прокладываем водопровод, монтируем оборудование.' },
    { num: '06', title: 'Сдача и документы', text: 'Акт приёма-передачи. Паспорт скважины (по запросу). Гарантия на воду.' },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-pipes-equipment"></div>
      <div className="absolute inset-0 bg-white/92"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Как мы работаем</h2>
          <p className="text-lg text-slate-600">От первого звонка до воды из крана — прозрачный процесс с документами на каждом этапе</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-4xl font-bold text-blue-100 mb-2">{step.num}</div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== EQUIPMENT ====================

function Equipment() {
  return (
    <section id="equipment" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-tracked-rig"></div>
      <div className="absolute inset-0 bg-slate-50/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наша техника</h2>
          <p className="text-lg text-slate-600">Собственный парк техники — две буровые установки и вспомогательные машины. Подберём технику под ваш участок.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Big rig */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-200 to-slate-300 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-5xl mb-3">🏗️</div>
                <p className="text-slate-600 font-medium">Фото большой буровой</p>
                <p className="text-xs text-slate-400 mt-1">большая установка процесс.jpg</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Большая буровая установка</h3>
              <p className="text-slate-600 text-sm mb-4">Для открытых участков и промышленного бурения. Глубокое бурение на металлических колоннах. Подходит для сложных геологических условий.</p>
              
              {/* Tech specs */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Характеристики</div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="text-lg font-bold text-blue-900">280 м</div>
                    <div className="text-xs text-slate-500">Глубина бурения</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-900">394 мм</div>
                    <div className="text-xs text-slate-500">Начальный ∅</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-900">190 мм</div>
                    <div className="text-xs text-slate-500">Конечный ∅</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full">Глубокое бурение</span>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full">Промышленные объекты</span>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full">Металлические колонны</span>
              </div>
            </div>
          </div>

          {/* Compact rig */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="aspect-[16/10] bg-gradient-to-br from-amber-100 to-amber-200 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-5xl mb-3">🚜</div>
                <p className="text-slate-600 font-medium">Фото малогабаритной буровой</p>
                <p className="text-xs text-slate-400 mt-1">гусеничная буровая.jpg</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Малогабаритная на гусеничном ходу</h3>
              <p className="text-slate-600 text-sm mb-4">Компактная установка для участков с ограниченным подъездом. Не повредит ландшафт, заезд через стандартные ворота. Идеальна для обустроенных участков.</p>
              
              {/* Tech specs */}
              <div className="bg-amber-50 rounded-lg p-4 mb-4">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Характеристики</div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-lg font-bold text-amber-700">120 м</div>
                    <div className="text-xs text-slate-500">Глубина бурения</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-amber-700">215 мм</div>
                    <div className="text-xs text-slate-500">Диаметр долота</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded-full">Ограниченный подъезд</span>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded-full">Гусеничный ход</span>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded-full">Ландшафтные участки</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional vehicles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Водовоз КамАЗ 43118', file: 'Водовоз камаз 43118.jpg', emoji: '🚛' },
            { name: 'Манипулятор КамАЗ 43118', file: 'манипулятор камаз 43118.jpg', emoji: '🏗️' },
            { name: 'Манипулятор ГАЗ 3308', file: 'манипулятор газ 3308.jpg', emoji: '🔧' },
            { name: 'Эвакуатор КамАЗ 4308', file: 'Эвакуатор камаз 4308.jpg', emoji: '🚚' },
          ].map((v, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <span className="text-4xl">{v.emoji}</span>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-slate-900">{v.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{v.file}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FOR WHOM ====================

function ForWhom({ onDrilling }: { onDrilling: () => void }) {
  const segments = [
    {
      title: 'Для частного дома',
      text: 'Скважина для водоснабжения дома, полива сада и огорода. Подбираем оптимальную глубину и оборудование.',
      cta: 'Обсудить для дома',
      color: 'bg-emerald-50 border-emerald-100',
      icon: '🏡',
    },
    {
      title: 'Для фермы и хозяйства',
      text: 'Водоснабжение ферм, теплиц, животноводческих комплексов. Работаем с большими объёмами и промышленными задачами.',
      cta: 'Обсудить для фермы',
      color: 'bg-amber-50 border-amber-100',
      icon: '🌾',
    },
    {
      title: 'Для предприятия',
      text: 'Промышленные водозаборные скважины, глубокие скважины на железных колоннах. Работаем по договору с юридическими лицами.',
      cta: 'Обсудить для предприятия',
      color: 'bg-blue-50 border-blue-100',
      icon: '🏢',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Для кого мы работаем</h2>
          <p className="text-lg text-slate-600">Заказчиком может быть любой — от частного лица до промышленного предприятия</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <div key={i} className={`p-8 rounded-2xl border ${seg.color} hover:shadow-md transition-shadow`}>
              <div className="text-4xl mb-4">{seg.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{seg.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{seg.text}</p>
              <button onClick={onDrilling} className="text-blue-900 font-semibold text-sm hover:text-amber-600 transition-colors">
                {seg.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ ====================

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      q: 'Сколько стоит бурение скважины?',
      a: 'Стоимость рассчитывается за метр бурения и зависит от местности и материалов. Точную цену называем после разведки — когда знаем глубину водоносного слоя. Обустройство считается отдельной сметой.',
    },
    {
      q: 'А если воды не окажется?',
      a: 'Такого ещё не было. Но если это разведочное бурение и воды нет совсем — оплата 1 000 ₽ за метр. Если воды недостаточно — обсуждаем варианты. Перед началом работ мы определяем глубину специальным прибором и минимизируем риски.',
    },
    {
      q: 'Какую гарантию вы даёте?',
      a: 'Гарантия на то, что скважина будет работать и давать воду. Зная геологический разрез, мы можем прогнозировать дебит (например, 6 кубов). Но точное качество воды до бурения определить невозможно — это видно по факту.',
    },
    {
      q: 'Сколько времени занимает работа?',
      a: 'Скважина 60 метров с обустройством — порядка 5 рабочих дней. Фильтры из ПВХ — от 2 дней на партию от 10 штук. Металлические фильтры — до 10 дней на 10 штук.',
    },
    {
      q: 'Выезд на участок — это платно?',
      a: 'По Славянскому району — бесплатно. Если ехать далеко — 5 000 ₽, чтобы отбить бензин и время. Эта сумма не входит в стоимость бурения.',
    },
    {
      q: 'Можно ли со своим насосом?',
      a: 'Да, конечно. Если вы покупаете оборудование сами — мы выполним монтаж. Совместимость и состав работ согласуем заранее. Если нужно — поможем подобрать.',
    },
    {
      q: 'Работаете ли вы с юридическими лицами?',
      a: 'Да. Работаем официально по договору, через расчётный счёт, без НДС. Предоставляем все закрывающие документы.',
    },
    {
      q: 'Какие документы я получу?',
      a: 'Договор, акт приёма-передачи выполненных работ. По запросу оформляем паспорт скважины (дополнительная услуга).',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Частые вопросы</h2>
          <p className="text-lg text-slate-600">Отвечаем честно — без маркетинговых уловок</p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
                <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT / CTA ====================

function ContactSection({ onCallback }: { onCallback: () => void }) {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-drilling-equipment"></div>
      <div className="absolute inset-0 bg-white/92"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-slate-600 mb-8">Выберите удобный способ — ответим быстро</p>

            <div className="space-y-4 mb-8">
              <a href={`tel:${PHONE}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl group-hover:bg-blue-200 transition-colors">📞</div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Телефон</div>
                  <div className="font-bold text-slate-900 text-lg">{PHONE_DISPLAY}</div>
                </div>
              </a>

              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-sky-50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-xl group-hover:bg-sky-200 transition-colors">✈️</div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Telegram</div>
                  <div className="font-bold text-slate-900">{TELEGRAM_HANDLE}</div>
                </div>
              </a>

              <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-violet-50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-xl group-hover:bg-violet-200 transition-colors">💬</div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Мессенджер MAX</div>
                  <div className="font-bold text-slate-900">Написать в MAX</div>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">Регион работы</div>
                  <div className="text-slate-600 text-sm">Краснодарский край. Выезжаем на объекты без ограничений по расстоянию.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Не знаете, с чего начать?</h3>
            <p className="text-blue-100 mb-6">Оставьте номер — перезвоним в течение 15 минут, ответим на вопросы и подскажем, как лучше действовать в вашей ситуации.</p>

            <button
              onClick={onCallback}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors mb-4"
            >
              Перезвоните мне
            </button>

            <p className="text-xs text-blue-200 text-center">
              Нажимая кнопку, вы даёте согласие на обработку персональных данных
            </p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">с 2021</div>
                  <div className="text-xs text-blue-200">года на рынке</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-blue-200">свои работы</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">по договору</div>
                  <div className="text-xs text-blue-200">официально</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================

function Footer({ onPrivacy, onConsent }: { onPrivacy: () => void; onConsent: () => void }) {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xs">H₂O</span>
              </div>
              <div>
                <div className="font-bold leading-tight">H2O-Про</div>
                <div className="text-[10px] text-slate-400 leading-tight uppercase tracking-wider">Бурение с интеллектом</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Бурение скважин на воду и производство фильтров в Краснодарском крае.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Бурение скважин</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Обустройство</a></li>
              <li><a href="#filters" className="hover:text-white transition-colors">Производство фильтров</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ремонт скважин</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#process" className="hover:text-white transition-colors">Как мы работаем</a></li>
              <li><a href="#equipment" className="hover:text-white transition-colors">Наша техника</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Частые вопросы</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <a href={`tel:${PHONE}`} className="block hover:text-white transition-colors font-medium">{PHONE_DISPLAY}</a>
              <div>Краснодарский край</div>
              <div className="flex gap-2 mt-3">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-xs">TG</a>
                <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-xs">MX</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2021–2026 H2O-Про. ИП. Все права защищены.</p>
          <div className="flex gap-4 text-xs text-slate-500">
            <button onClick={onPrivacy} className="hover:text-white transition-colors">Политика конфиденциальности</button>
            <button onClick={onConsent} className="hover:text-white transition-colors">Согласие на обработку ПД</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== FLOATING MESSANGER BUTTONS ====================

function FloatingButtons() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {expanded && (
        <>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <span className="text-sm font-medium">Telegram</span>
            <span>✈️</span>
          </a>
          <a
            href={MAX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <span className="text-sm font-medium">MAX</span>
            <span>💬</span>
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <span className="text-sm font-medium">Позвонить</span>
            <span>📞</span>
          </a>
        </>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 ${expanded ? 'bg-slate-700 rotate-45' : 'bg-amber-500 hover:bg-amber-600'}`}
        aria-label="Связаться с нами"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {expanded ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </button>
    </div>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  const [modalType, setModalType] = useState<'callback' | 'drilling' | 'filter' | 'survey' | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'consent' | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) setLegalType(detail);
    };
    window.addEventListener('open-legal', handler);
    return () => window.removeEventListener('open-legal', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onCallback={() => setModalType('callback')} />
      <Hero onDrilling={() => setModalType('drilling')} onSurvey={() => setModalType('survey')} />
      <Advantages />
      <Services onDrilling={() => setModalType('drilling')} onCallback={() => setModalType('callback')} />
      <FiltersBlock onFilter={() => setModalType('filter')} />
      <Process />
      <Equipment />
      <ForWhom onDrilling={() => setModalType('drilling')} />
      <FAQ />
      <ContactSection onCallback={() => setModalType('callback')} />
      <Footer onPrivacy={() => setLegalType('privacy')} onConsent={() => setLegalType('consent')} />

      {/* Floating messenger buttons */}
      <FloatingButtons />

      {/* Modals */}
      <CallbackModal
        open={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'callback'}
      />
      {legalType && (
        <LegalModal
          open={true}
          onClose={() => setLegalType(null)}
          type={legalType}
        />
      )}
    </div>
  );
}
