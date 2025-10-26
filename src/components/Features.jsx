import { Sparkles, ShieldCheck, Truck, Wand2 } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    desc: 'Salon-grade gels, long-lasting finish, and hypoallergenic materials.'
  },
  {
    icon: Wand2,
    title: 'Custom Designs',
    desc: 'Choose length, base, patterns, foils, and gems to make it yours.'
  },
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    desc: 'Available in select zones with precise time-slot selection.'
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction First',
    desc: 'Free touch-up or full refund if you’re not delighted.'
  }
];

export default function Features() {
  return (
    <section id="explore" className="relative py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-rose-950">Why you’ll love us</h2>
            <p className="mt-2 text-rose-900/70">Luxury, personalization, and speed — without compromise.</p>
          </div>
          <a href="#designs" className="hidden sm:inline-block text-rose-700 hover:text-rose-900 font-medium">See featured designs →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-rose-50/60 ring-1 ring-rose-100 hover:ring-rose-200 transition shadow-sm hover:shadow-md">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-rose-200 to-pink-200 flex items-center justify-center text-rose-800/80 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-rose-950">{title}</h3>
              <p className="mt-2 text-rose-900/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
