import { Heart, Share2 } from 'lucide-react';

const designs = [
  {
    id: 1,
    title: 'Blush Ombre Almond',
    tag: 'Trending',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop',
    price: '$39'
  },
  {
    id: 2,
    title: 'Nude Rose Quartz',
    tag: 'Minimal',
    img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=1600&auto=format&fit=crop',
    price: '$42'
  },
  {
    id: 3,
    title: 'Lavender Chrome Tips',
    tag: 'Seasonal',
    img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e1d6a?q=80&w=1600&auto=format&fit=crop',
    price: '$45'
  },
  {
    id: 4,
    title: 'Pearl French Oval',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1630307307537-d4fd1caa5db4?q=80&w=1600&auto=format&fit=crop',
    price: '$36'
  }
];

export default function FeaturedDesigns() {
  return (
    <section id="designs" className="relative py-16 bg-gradient-to-b from-white to-rose-50/60">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-rose-950">Featured designs</h2>
            <p className="mt-2 text-rose-900/70">Tap a style to view details and start customizing.</p>
          </div>
          <div className="hidden sm:flex gap-2 text-sm">
            <button className="px-3 py-1.5 rounded-full bg-white ring-1 ring-rose-200 text-rose-700 hover:ring-rose-300">Trending</button>
            <button className="px-3 py-1.5 rounded-full bg-white ring-1 ring-rose-200 text-rose-700/80 hover:ring-rose-300">Seasonal</button>
            <button className="px-3 py-1.5 rounded-full bg-white ring-1 ring-rose-200 text-rose-700/80 hover:ring-rose-300">Minimal</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((d) => (
            <article key={d.id} className="group rounded-3xl overflow-hidden bg-white ring-1 ring-rose-100 hover:ring-rose-200 transition shadow-sm hover:shadow-md">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full bg-white/80 backdrop-blur px-2 py-1 text-xs font-medium text-rose-800 ring-1 ring-rose-200">{d.tag}</span>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 backdrop-blur ring-1 ring-rose-200 text-rose-700 hover:bg-white transition"><Heart className="h-4 w-4" /></button>
                  <button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 backdrop-blur ring-1 ring-rose-200 text-rose-700 hover:bg-white transition"><Share2 className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-rose-950">{d.title}</h3>
                  <p className="text-sm text-rose-900/70">{d.price}</p>
                </div>
                <a href="#" className="inline-flex items-center rounded-full bg-rose-600 text-white text-sm px-4 py-2 font-medium hover:bg-rose-700 transition">Customize</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
