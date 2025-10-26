import { useMemo, useState } from 'react';
import { Sparkles, Star } from 'lucide-react';

const ALL_DESIGNS = [
  { id: 1, title: 'Rosé Quartz', tag: 'Minimal', color: '#f8d7da', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Champagne Glow', tag: 'Classic', color: '#f4e1ce', image: 'https://images.unsplash.com/photo-1724440913201-f781232ae677?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb3MlQzMlQTklMjBRdWFydHp8ZW58MHwwfHx8MTc2MTQ5NjEzNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Lavender Veil', tag: 'Pastel', color: '#e9e2ff', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Nude Ombre', tag: 'Minimal', color: '#f6e7db', image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Rose-Gold Foil', tag: 'Statement', color: '#f7d0c7', image: 'https://images.unsplash.com/photo-1724440913201-f781232ae677?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb3MlQzMlQTklMjBRdWFydHp8ZW58MHwwfHx8MTc2MTQ5NjEzNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'French Modern', tag: 'Classic', color: '#fff1f1', image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, title: 'Dewy Pearl', tag: 'Pastel', color: '#f0f3ff', image: 'https://images.unsplash.com/photo-1608416026650-66b4e0c0c301?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFtcGFnbmUlMjBHbG93fGVufDB8MHx8fDE3NjE0OTYxMzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 8, title: 'Blush Marble', tag: 'Statement', color: '#fce1e6', image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1200&auto=format&fit=crop' },
];

const TABS = ['All', 'Minimal', 'Classic', 'Pastel', 'Statement'];

export default function ExploreGallery() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return ALL_DESIGNS;
    return ALL_DESIGNS.filter((d) => d.tag === active);
  }, [active]);

  return (
    <section id="explore" className="relative py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="tracking-widest uppercase text-xs text-rose-500/80 mb-2">Explore Designs</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-rose-950">Curated looks for every mood</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-rose-700">
            <Star className="h-4 w-4" />
            <span className="text-sm">Premium, salon-grade finishes</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full text-sm transition ring-1 ring-rose-200 ${
                active === tab ? 'bg-rose-600 text-white ring-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <article key={d.id} className="group rounded-3xl overflow-hidden ring-1 ring-rose-100 hover:ring-rose-200 transition bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-rose-700 ring-1 ring-white">
                  <Sparkles className="h-3 w-3 text-rose-600" /> {d.tag}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-rose-900">{d.title}</h3>
                  <div className="h-4 w-10 rounded-full" style={{ background: d.color }} />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <button className="px-3 py-1.5 rounded-full text-sm bg-rose-600 text-white hover:bg-rose-700 transition">Customize</button>
                  <button className="px-3 py-1.5 rounded-full text-sm bg-white ring-1 ring-rose-200 text-rose-700 hover:bg-rose-50 transition">Quick Order</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
