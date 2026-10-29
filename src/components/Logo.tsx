// SVG логотип H2O-Про

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фон - круг */}
      <circle cx="50" cy="50" r="48" fill="#0b3d91"/>
      
      {/* Капля воды */}
      <path d="M50 20 C50 20, 30 45, 30 60 C30 71, 39 80, 50 80 C61 80, 70 71, 70 60 C70 45, 50 20, 50 20 Z" 
            fill="#ffffff" opacity="0.9"/>
      
      {/* Буква H внутри капли */}
      <path d="M42 45 L42 68 M42 56.5 L58 56.5 M58 45 L58 68" 
            stroke="#0b3d91" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Акцентная точка */}
      <circle cx="65" cy="35" r="4" fill="#f59e0b"/>
    </svg>
  );
}

export function LogoFull({ className = "h-10" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon className={className} />
      <div className="hidden sm:block">
        <div className="font-bold text-slate-900 leading-tight">H2O-Про</div>
        <div className="text-[10px] text-slate-500 leading-tight tracking-wide uppercase">Бурение с интеллектом</div>
      </div>
    </div>
  );
}

export function LogoFullWhite({ className = "h-9" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#1d4ed8"/>
        <path d="M50 20 C50 20, 30 45, 30 60 C30 71, 39 80, 50 80 C61 80, 70 71, 70 60 C70 45, 50 20, 50 20 Z" 
              fill="#ffffff" opacity="0.9"/>
        <path d="M42 45 L42 68 M42 56.5 L58 56.5 M58 45 L58 68" 
              stroke="#1d4ed8" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="65" cy="35" r="4" fill="#f59e0b"/>
      </svg>
      <div>
        <div className="font-bold text-white leading-tight">H2O-Про</div>
        <div className="text-[10px] text-slate-400 leading-tight uppercase tracking-wider">Бурение с интеллектом</div>
      </div>
    </div>
  );
}
