import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-white font-bold text-xl">Nebula</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Услуги</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Портфолио</a>
          <a href="#team" className="text-gray-300 hover:text-white transition-colors">Команда</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
          <button className="px-5 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all">
            Начать проект
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 pb-4">
          <a href="#services" className="block py-2 text-gray-300 hover:text-white">Услуги</a>
          <a href="#portfolio" className="block py-2 text-gray-300 hover:text-white">Портфолио</a>
          <a href="#team" className="block py-2 text-gray-300 hover:text-white">Команда</a>
          <a href="#contact" className="block py-2 text-gray-300 hover:text-white">Контакты</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-gray-400 text-sm">Принимаем новые проекты на 2026 год</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Создаём{' '}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            цифровые
          </span>
          <br />
          впечатления
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
          Мы — команда дизайнеров и разработчиков, которая превращает смелые идеи в выдающиеся цифровые продукты
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all hover:scale-105">
            Обсудить проект
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/5 transition-all">
            Смотреть работы →
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '150+', label: 'Проектов' },
            { value: '8 лет', label: 'Опыта' },
            { value: '50+', label: 'Клиентов' },
            { value: '12', label: 'Наград' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Дизайн',
      description: 'Создаём интуитивные интерфейсы, которые пользователи полюбят. Исследования, прототипы, дизайн-системы.',
      color: 'from-violet-500/20 to-violet-500/5',
    },
    {
      icon: '💻',
      title: 'Веб-разработка',
      description: 'Быстрые, адаптивные и масштабируемые веб-приложения на современных технологиях.',
      color: 'from-fuchsia-500/20 to-fuchsia-500/5',
    },
    {
      icon: '📱',
      title: 'Мобильные приложения',
      description: 'Нативные и кроссплатформенные приложения для iOS и Android с безупречным UX.',
      color: 'from-cyan-500/20 to-cyan-500/5',
    },
    {
      icon: '🚀',
      title: 'Брендинг',
      description: 'Разрабатываем визуальную идентичность, которая выделит ваш бренд среди конкурентов.',
      color: 'from-amber-500/20 to-amber-500/5',
    },
    {
      icon: '📊',
      title: 'Аналитика',
      description: 'Настраиваем системы аналитики и помогаем принимать решения на основе данных.',
      color: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
      icon: '⚡',
      title: 'Оптимизация',
      description: 'Ускоряем загрузку, улучшаем SEO и повышаем конверсию существующих продуктов.',
      color: 'from-rose-500/20 to-rose-500/5',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">Наши услуги</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Что мы делаем</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Полный спектр услуг для создания и развития вашего цифрового присутствия
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl bg-gradient-to-b ${service.color} border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      title: 'Финтех платформа',
      category: 'Веб-приложение',
      gradient: 'from-violet-600 to-indigo-600',
    },
    {
      title: 'Маркетплейс одежды',
      category: 'E-commerce',
      gradient: 'from-fuchsia-600 to-pink-600',
    },
    {
      title: 'Фитнес-трекер',
      category: 'Мобильное приложение',
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'Образовательная платформа',
      category: 'SaaS',
      gradient: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Наши работы</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Каждый проект — это уникальная история успеха наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-white/70 text-sm font-medium">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">{project.title}</h3>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: 'Алексей Петров', role: 'CEO & Стратег', emoji: '👨‍💼' },
    { name: 'Мария Иванова', role: 'Lead Designer', emoji: '👩‍🎨' },
    { name: 'Дмитрий Козлов', role: 'Tech Lead', emoji: '👨‍💻' },
    { name: 'Анна Смирнова', role: 'Product Manager', emoji: '👩‍💼' },
  ];

  return (
    <section id="team" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Команда</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Люди за проектами</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Талантливые специалисты, объединённые страстью к созданию выдающихся продуктов
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group text-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                {member.emoji}
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-gray-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: 'Nebula полностью трансформировали наш цифровой продукт. Конверсия выросла на 340% за первые 3 месяца.',
      author: 'Игорь Волков',
      company: 'TechStart',
    },
    {
      text: 'Профессионализм на высшем уровне. Команда понимает бизнес-задачи и предлагает решения, о которых мы даже не думали.',
      author: 'Елена Морозова',
      company: 'FashionHub',
    },
    {
      text: 'Работаем с Nebula уже 3 года. Каждый проект превосходит ожидания. Рекомендую!',
      author: 'Сергей Николаев',
      company: 'DataFlow',
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium text-sm uppercase tracking-wider">Отзывы</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Что говорят клиенты</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-gray-500 text-sm">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Готовы начать{' '}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            свой проект
          </span>
          ?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Расскажите нам о вашей идее, и мы поможем воплотить её в жизнь. Первая консультация — бесплатно.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all hover:scale-105">
            Написать нам
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/5 transition-all">
            hello@nebula.studio
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-lg">Nebula</span>
            </div>
            <p className="text-gray-500 text-sm">Создаём цифровые продукты, которые меняют мир к лучшему.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Дизайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Брендинг</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Соцсети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <span className="text-sm">TG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <span className="text-sm">VK</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <span className="text-sm">BE</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <span className="text-sm">GH</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 Nebula Studio. Все права защищены.</p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
