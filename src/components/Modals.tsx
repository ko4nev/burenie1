import { useState, useEffect, type ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
};

function Modal({ open, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {title && (
          <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors" aria-label="Закрыть">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ==================== ФОРМА ОБРАТНОЙ СВЯЗИ ====================

type FormType = 'callback' | 'drilling' | 'filter' | 'survey';

const formConfig: Record<FormType, { title: string; subtitle: string; submitText: string }> = {
  callback: {
    title: 'Перезвоним в течение 15 минут',
    subtitle: 'Оставьте номер — обсудим вашу задачу',
    submitText: 'Жду звонка',
  },
  drilling: {
    title: 'Обсудить стоимость бурения',
    subtitle: 'Расскажем про цену за метр и подготовим смету',
    submitText: 'Обсудить бурение',
  },
  filter: {
    title: 'Рассчитать изготовление фильтров',
    subtitle: 'Уточним параметры и сроки производства',
    submitText: 'Рассчитать заказ',
  },
  survey: {
    title: 'Обсудить выезд на участок',
    subtitle: 'По Славянскому району — бесплатно',
    submitText: 'Обсудить выезд',
  },
};

export function CallbackModal({ open, onClose, type = 'callback' }: { open: boolean; onClose: () => void; type?: FormType }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const config = formConfig[type];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    // Отправка на email через FormSubmit.co
    // Замените YOUR_EMAIL@example.com на реальный email клиента
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('comment', comment);
    formData.append('_subject', `Новая заявка с сайта H2O-Про: ${config.title}`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Ошибка отправки:', error);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setComment('');
      setConsent(false);
      onClose();
    }, 2500);
  };

  return (
    <Modal open={open} onClose={onClose} title={config.title}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Заявка принята</h4>
          <p className="text-slate-600">Свяжемся с вами в ближайшее время</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-slate-600 text-sm -mt-2 mb-4">{config.subtitle}</p>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ваше имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition-colors"
              required
            />
          </div>

          {(type === 'drilling' || type === 'filter' || type === 'survey') && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Комментарий <span className="text-slate-400">(необязательно)</span></label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={type === 'drilling' ? 'Район, примерная глубина, назначение скважины...' : type === 'filter' ? 'Материал, диаметр, количество, тип соединения...' : 'Район, адрес участка...'}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition-colors resize-none"
              />
            </div>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-800 focus:ring-blue-800"
              required
            />
            <span className="text-xs text-slate-500 leading-relaxed">
              Нажимая кнопку, вы даёте{' '}
              <button type="button" className="text-blue-800 underline hover:text-blue-600" onClick={() => window.dispatchEvent(new CustomEvent('open-legal', { detail: 'privacy' }))}>
                согласие на обработку персональных данных
              </button>
            </span>
          </label>

          <button
            type="submit"
            disabled={!consent}
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
          >
            {config.submitText}
          </button>
        </form>
      )}
    </Modal>
  );
}

// ==================== ЮРИДИЧЕСКИЕ МОДАЛКИ ====================

export function LegalModal({ open, onClose, type }: { open: boolean; onClose: () => void; type: 'privacy' | 'consent' }) {
  return (
    <Modal open={open} onClose={onClose} title={type === 'privacy' ? 'Политика конфиденциальности' : 'Согласие на обработку персональных данных'}>
      <div className="prose prose-sm max-w-none text-slate-600">
        {type === 'privacy' ? (
          <>
            <p className="text-xs text-slate-400 mb-4">Дата вступления в силу: 01.01.2026</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">1. Общие положения</h4>
            <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта h2o-pro.ru (далее — Сайт), принадлежащего ИП (далее — Оператор).</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">2. Какие данные мы собираем</h4>
            <p>При обращении через формы на Сайте мы можем собирать: имя, номер телефона, адрес электронной почты, а также информацию, которую вы указываете в комментариях к заявке (район, описание задачи и т.д.).</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">3. Цели обработки</h4>
            <p>Персональные данные используются исключительно для: связи с вами по оставленной заявке, подготовки коммерческих предложений и смет, исполнения договорных обязательств.</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">4. Срок хранения</h4>
            <p>Данные хранятся не дольше, чем этого требуют цели обработки, а также законодательство РФ. Вы можете в любой момент запросить удаление своих данных.</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">5. Передача третьим лицам</h4>
            <p>Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">6. Ваши права</h4>
            <p>Вы имеете право запросить информацию о хранящихся данных, потребовать их уточнения, блокирования или удаления, направив обращение по контактным данным на Сайте.</p>

            <h4 className="font-bold text-slate-900 mt-4 mb-2">7. Контакты</h4>
            <p>По вопросам, связанным с обработкой персональных данных: телефон и мессенджеры указаны в разделе «Контакты» на Сайте.</p>
          </>
        ) : (
          <>
            <p className="text-xs text-slate-400 mb-4">В соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»</p>

            <p>Я, оставляя свои персональные данные на сайте h2o-pro.ru, даю согласие на их обработку Оператором (ИП) в следующих целях:</p>

            <ul className="list-disc pl-5 my-3 space-y-1">
              <li>связь со мной по оставленной заявке (телефонный звонок, сообщение в мессенджере);</li>
              <li>подготовка коммерческого предложения, сметы, расчёта;</li>
              <li>исполнение обязательств по договору, если он будет заключён;</li>
              <li>направление информационных сообщений (при согласии).</li>
            </ul>

            <p>Перечень данных: имя, номер телефона, адрес электронной почты, комментарий к заявке.</p>

            <p>Согласие действует с момента его предоставления и может быть отозвано путём направления письменного уведомления Оператору по контактным данным, указанным на Сайте.</p>
          </>
        )}
      </div>
    </Modal>
  );
}
