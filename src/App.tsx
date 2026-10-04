import { useState } from "react";

type IconName =
  | "arrow"
  | "battery"
  | "check"
  | "chevron"
  | "clock"
  | "menu"
  | "phone"
  | "shield"
  | "sparkle"
  | "tool"
  | "x";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    battery: <><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M21 10v4M7 10v4M11 10v4M15 10v4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    menu: <><path d="M4 8h16M4 16h16" /></>,
    phone: <><rect x="6.5" y="2.5" width="11" height="19" rx="3" /><path d="M10 18.5h4" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.5 2.7 8.2 7 10 4.3-1.8 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    sparkle: <><path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Z" /><path d="m5 15 .7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15Z" /></>,
    tool: <><path d="M14.5 6.5a4 4 0 0 0-5.6 5.6L3 18l3 3 5.9-5.9a4 4 0 0 0 5.6-5.6l-2.7 2.7-3-3 2.7-2.7Z" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

const services = [
  { icon: "phone" as IconName, title: "Ремонт на дисплей", copy: "Счупено стъкло или неработещ дисплей, възстановени с качествени части.", price: "От 149 лв." },
  { icon: "battery" as IconName, title: "Смяна на батерия", copy: "Върнете издръжливостта на телефона с безопасна, сертифицирана батерия.", price: "От 89 лв." },
  { icon: "tool" as IconName, title: "Диагностика", copy: "Проблем със зареждането, камерата, звука или влага — ще открием причината.", price: "Безплатен преглед" },
];

type Category = "Телефони" | "Лаптопи" | "Таблети";

const devices: Record<Category, { name: string; detail: string; price: string; image: string; photoBy: string }[]> = {
  Телефони: [
    { name: "iPhone 15", detail: "128 GB · Отключен", price: "1 149 лв.", image: "https://images.unsplash.com/photo-1707438095902-cc23b01ac7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBzbWFydHBob25lJTIwcHJvZHVjdCUyMGlzb2xhdGVkJTIwY2xlYW4lMjBiYWNrZ3JvdW5kJTIwaVBob25lJTIwU2Ftc3VuZyUyMFBpeGVsfGVufDF8fHx8MTc5MTEwOTE0NHww&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Evgeny Opanasenko" },
    { name: "Galaxy S24", detail: "256 GB · Отключен", price: "1 099 лв.", image: "https://images.unsplash.com/photo-1709744722656-9b850470293f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW1zdW5nJTIwR2FsYXh5JTIwUzI0JTIwcHJvZHVjdHxlbnwxfHx8fDE3OTExMDkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Bobby Raj Sirimani" },
    { name: "Pixel 9", detail: "128 GB · Отключен", price: "999 лв.", image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBQaXhlbCUyMHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3OTExMDkxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Daniel Romero" },
  ],
  Лаптопи: [
    { name: "MacBook Air M2", detail: "13″ · 8 GB · 256 GB", price: "1 699 лв.", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWNCb29rJTIwQWlyJTIwTTIlMjBsYXB0b3B8ZW58MXx8fHwxNzkxMTA5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Maxim Hopman" },
    { name: "ThinkPad X1", detail: "14″ · 16 GB · 512 GB", price: "1 499 лв.", image: "https://images.unsplash.com/photo-1770932327451-63bb8530f607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZW5vdm8lMjBUaGlua1BhZCUyMGxhcHRvcCUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMTA5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Back2Gaming" },
    { name: "Dell XPS 13", detail: "13″ · 16 GB · 512 GB", price: "1 599 лв.", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEZWxsJTIwWFBTJTIwbGFwdG9wJTIwcHJvZHVjdHxlbnwxfHx8fDE3OTExMDkxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Erick Cerritos" },
  ],
  Таблети: [
    { name: "iPad Air", detail: "11″ · 128 GB · Wi-Fi", price: "1 099 лв.", image: "https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGFkJTIwQWlyJTIwdGFibGV0JTIwcHJvZHVjdHxlbnwxfHx8fDE3OTExMDkxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Sanjeev Mohindra" },
    { name: "Galaxy Tab S9", detail: "11″ · 256 GB · Wi-Fi", price: "999 лв.", image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB0YWJsZXQlMjBwcm9kdWN0JTIwaVBhZCUyMGNsZWFuJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3OTExMDkxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Rahul Chakraborty" },
    { name: "iPad mini", detail: "8.3″ · 64 GB · Wi-Fi", price: "749 лв.", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGFkJTIwbWluaSUyMHRhYmxldCUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMTA5MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080", photoBy: "Roberto Nickson" },
  ],
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Ремонт на дисплей");
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("Телефони");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openCategory = (category: Category) => {
    setActiveCategory(category);
    scrollTo("shop");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button className="group flex items-center gap-3" onClick={() => scrollTo("home")} aria-label="Към началото">
            <span className="grid size-10 place-items-center rounded-full bg-forest text-white transition-transform group-hover:-rotate-6">
              <Icon name="phone" className="size-5" />
            </span>
            <span className="text-xl font-bold tracking-tight">Mend<span className="text-leaf">Mobile</span></span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Основна навигация">
            <button className="nav-link" onClick={() => scrollTo("services")}>Ремонти</button>
            <button className="nav-link" onClick={() => openCategory("Телефони")}>Телефони</button>
            <button className="nav-link" onClick={() => openCategory("Лаптопи")}>Лаптопи</button>
            <button className="nav-link" onClick={() => openCategory("Таблети")}>Таблети</button>
            <button className="nav-link" onClick={() => scrollTo("about")}>Защо ние</button>
          </nav>

          <button className="button-primary hidden md:flex" onClick={() => scrollTo("book")}>
            Заяви ремонт <Icon name="arrow" className="size-4" />
          </button>
          <button className="grid size-11 place-items-center rounded-full border border-forest/15 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Отвори менюто">
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-forest/10 bg-cream px-5 py-5 md:hidden" aria-label="Мобилна навигация">
            <div className="flex flex-col items-stretch gap-2 text-left font-semibold">
              <button className="rounded-xl px-4 py-3 text-left hover:bg-sand" onClick={() => scrollTo("services")}>Ремонти</button>
              <button className="rounded-xl px-4 py-3 text-left hover:bg-sand" onClick={() => openCategory("Телефони")}>Телефони</button>
              <button className="rounded-xl px-4 py-3 text-left hover:bg-sand" onClick={() => openCategory("Лаптопи")}>Лаптопи</button>
              <button className="rounded-xl px-4 py-3 text-left hover:bg-sand" onClick={() => openCategory("Таблети")}>Таблети</button>
              <button className="rounded-xl px-4 py-3 text-left hover:bg-sand" onClick={() => scrollTo("about")}>Защо ние</button>
              <button className="button-primary mt-2 justify-center" onClick={() => scrollTo("book")}>Заяви ремонт</button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative pt-32 sm:pt-40">
          <div className="absolute -left-32 top-48 size-80 rounded-full bg-mint/50 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-28">
            <div className="relative z-10 max-w-2xl">
              <div className="eyebrow"><Icon name="sparkle" className="size-4" /> Лично отношение. Експертна грижа.</div>
              <h1 className="mt-7 text-5xl font-bold leading-[.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Телефонът ви,<br /><span className="font-serif italic text-leaf">отново като нов.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
                Бързи и честни ремонти и качествени телефони — без излишно чакане. Повечето ремонти са готови още същия ден.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="button-primary justify-center" onClick={() => scrollTo("book")}>
                  Заяви ремонт <Icon name="arrow" className="size-4" />
                </button>
                <button className="button-secondary justify-center" onClick={() => openCategory("Телефони")}>Разгледай устройствата</button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-muted">
                <span className="flex items-center gap-2"><Icon name="check" className="size-4 text-leaf" /> 90 дни гаранция</span>
                <span className="flex items-center gap-2"><Icon name="check" className="size-4 text-leaf" /> Без ремонт, без такса</span>
                <span className="flex items-center gap-2"><Icon name="check" className="size-4 text-leaf" /> Без записан час</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-forest shadow-2xl shadow-forest/20">
                <img
                  className="h-full w-full object-cover opacity-90 mix-blend-luminosity"
                  src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwcmVwYWlyJTIwdGVjaG5pY2lhbiUyMGdyZWVuJTIwd29ya2JlbmNoJTIwbWluaW1hbHxlbnwxfHx8fDE3OTExMDg1MjV8MA&ixlib=rb-4.1.0&q=85&w=1080"
                  alt="Техник внимателно ремонтира смартфон"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/5 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 text-white sm:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[.18em] text-pale">Ремонтът на деня</p>
                  <p className="mt-2 text-2xl font-bold">Сменен дисплей за 42 мин.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-forest/10 sm:-left-8">
                <span className="grid size-11 place-items-center rounded-full bg-mint text-forest"><Icon name="clock" /></span>
                <div><p className="text-xs font-semibold uppercase tracking-wider text-muted">Средно време</p><p className="font-bold">Под 60 минути</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-forest py-5 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-5 text-sm font-semibold sm:justify-between sm:px-8">
            <span>4.9/5 от нашите клиенти</span><span className="text-pale/40">•</span>
            <span>Висококачествени части</span><span className="text-pale/40">•</span>
            <span>Данните ви остават защитени</span><span className="text-pale/40">•</span>
            <span>Сертифицирани техници</span>
          </div>
        </section>

        <section id="services" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="section-label">Какво ремонтираме</p><h2 className="section-title mt-3">Малък инцидент?<br />Вече е решен.</h2></div>
              <p className="max-w-md text-lg leading-8 text-muted">Ясни цени, внимателно обслужване и без скрити такси. Ремонтираме Apple, Samsung, Google и други.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.title} className="service-card group">
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-mint text-forest transition-colors group-hover:bg-forest group-hover:text-white"><Icon name={service.icon} className="size-6" /></span>
                    <span className="font-serif text-2xl italic text-leaf">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{service.copy}</p>
                  <button className="mt-8 flex w-full items-center justify-between border-t border-forest/10 pt-5 font-bold text-forest" onClick={() => { setSelectedService(service.title); scrollTo("book"); }}>
                    {service.price}<span className="grid size-9 place-items-center rounded-full bg-sand transition-transform group-hover:translate-x-1"><Icon name="arrow" className="size-4" /></span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="bg-sand py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center"><p className="section-label">По-добри от чисто нови</p><h2 className="section-title mt-3">Техника с ново начало.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">Телефони, лаптопи и таблети, проверени по 40 показателя, професионално обновени и с пълна едногодишна гаранция.</p></div>
            <div className="mt-9 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Категории устройства">
              {(Object.keys(devices) as Category[]).map((category) => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? "category-tab-active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {devices[activeCategory].map((device) => (
                <article key={device.name} className="group rounded-[2rem] bg-white p-4">
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-pale">
                    <img
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      src={device.image}
                      alt={`${device.name} — обновено устройство`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold backdrop-blur">Обновен</span>
                    <span className="absolute bottom-3 right-3 text-[.65rem] font-semibold text-white/80">Снимка: {device.photoBy}</span>
                  </div>
                  <div className="flex items-end justify-between px-2 pb-2 pt-5">
                    <div><h3 className="text-xl font-bold">{device.name}</h3><p className="mt-1 text-sm text-muted">{device.detail}</p></div>
                    <p className="text-xl font-bold text-forest">{device.price}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center"><button className="button-secondary" onClick={() => scrollTo("book")}>Попитай за наличност <Icon name="arrow" className="size-4" /></button></div>
          </div>
        </section>

        <section id="about" className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] bg-mint p-7 sm:p-10">
              <div className="absolute -right-16 -top-16 size-64 rounded-full border-[3rem] border-white/30" />
              <p className="relative max-w-md font-serif text-4xl leading-tight italic text-forest sm:text-5xl">„Грижата за техниката, която използвате всеки ден, трябва да бъде лесна.“</p>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white p-5 sm:bottom-10 sm:left-10 sm:right-10">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-forest text-white"><Icon name="shield" /></span>
                  <div><p className="font-bold">Обещанието на Mend</p><p className="text-sm text-muted">Качествена работа, обяснена на разбираем език.</p></div>
                </div>
              </div>
            </div>
            <div>
              <p className="section-label">Защо MendMobile</p>
              <h2 className="section-title mt-3">Грижа за техниката с човешко отношение.</h2>
              <p className="mt-6 text-lg leading-8 text-muted">Създадохме MendMobile, защото сервизите често са объркващи, а покупката на употребяван телефон изглежда рискована. Ние направихме и двете по-лесни.</p>
              <div className="mt-9 space-y-6">
                {[
                  ["Ясни отговори", "Обясняваме проблема, възможностите и точната цена преди да започнем работа."],
                  ["Надежден ремонт", "Качествени части, опитни техници и 90-дневна гаранция за всеки ремонт."],
                  ["По-малък отпечатък", "Ремонтът на един телефон спестява около 80 кг производствени емисии."],
                ].map(([title, copy], i) => (
                  <div key={title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-forest text-sm font-bold text-white">{i + 1}</span>
                    <div><h3 className="font-bold">{title}</h3><p className="mt-1 leading-6 text-muted">{copy}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="bg-forest py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-pale">Когато сте готови</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Нека телефонът ви отново работи като нов.</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">Разкажете ни какъв е проблемът. Ще потвърдим час и ще ви дадем ясна оферта — обикновено до 15 минути.</p>
              <p className="mt-8 flex items-center gap-3 font-semibold"><Icon name="clock" className="size-5 text-pale" /> Пон–Съб, 9:00–19:00 ч.</p>
            </div>
            <div className="rounded-[2rem] bg-cream p-6 text-ink sm:p-9">
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-mint text-forest"><Icon name="check" className="size-8" /></span>
                  <h3 className="mt-6 text-2xl font-bold">Заявката е приета.</h3>
                  <p className="mt-2 max-w-sm text-muted">Благодарим! Наш специалист ще се свърже с вас скоро, за да потвърди цената и часа.</p>
                  <button className="button-secondary mt-7" onClick={() => setSubmitted(false)}>Заяви друг ремонт</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-label">Вашето име<input className="form-input" required placeholder="Алекс Иванов" /></label>
                    <label className="form-label">Телефонен номер<input className="form-input" required type="tel" placeholder="+359 88 123 4567" /></label>
                    <label className="form-label">Устройство<input className="form-input" required placeholder="напр. iPhone 14" /></label>
                    <label className="form-label">От какво имате нужда?
                      <select className="form-input" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                        <option>Ремонт на дисплей</option><option>Смяна на батерия</option><option>Диагностика</option><option>Покупка на телефон</option><option>Покупка на лаптоп</option><option>Покупка на таблет</option><option>Друго</option>
                      </select>
                    </label>
                  </div>
                  <label className="form-label mt-5">Има ли нещо друго, което трябва да знаем?<textarea className="form-input min-h-24 resize-none" placeholder="Разкажете ни какво се случи..." /></label>
                  <button className="button-primary mt-6 w-full justify-center" type="submit">Получи оферта <Icon name="arrow" className="size-4" /></button>
                  <p className="mt-4 text-center text-xs text-muted">Не е необходимо плащане. Първо ще потвърдим всички детайли.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-leaf"><Icon name="phone" className="size-4" /></span><span className="text-lg font-bold">MendMobile</span></div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60"><button onClick={() => scrollTo("services")}>Ремонти</button><button onClick={() => openCategory("Телефони")}>Телефони</button><button onClick={() => openCategory("Лаптопи")}>Лаптопи</button><button onClick={() => openCategory("Таблети")}>Таблети</button><button onClick={() => scrollTo("book")}>Контакти</button><span>© 2025 MendMobile</span></div>
        </div>
      </footer>
    </div>
  );
}
