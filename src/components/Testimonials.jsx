import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ananya',
    text: 'Absolutely obsessed. The finish is luxe and the customization was spot-on. Arrived same day!',
  },
  {
    name: 'Meera',
    text: 'Elegant yet minimal. Loved the pastel palette and the pearls. Will reorder for sure.',
  },
  {
    name: 'Riya',
    text: 'Professional service, gorgeous designs. The delivery time slots are super convenient.',
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-rose-950">Loved by our community</h2>
        <p className="mt-2 mb-8 text-rose-900/70">Real reviews from stylish customers.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="rounded-3xl p-6 bg-rose-50/60 ring-1 ring-rose-100 shadow-sm">
              <div className="flex items-center gap-1 text-rose-600 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-rose-900/80 leading-relaxed">“{r.text}”</p>
              <p className="mt-4 font-medium text-rose-950">{r.name}</p>
            </div>
          ))}
        </div>

        {/* Newsletter inline */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-100 to-pink-100 ring-1 ring-rose-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-rose-950">Get design drops and seasonal offers</h3>
              <p className="text-rose-900/70">Join our newsletter for elegant inspiration in your inbox.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full sm:w-auto gap-2">
              <input type="email" required placeholder="Enter your email" className="flex-1 sm:w-72 rounded-full bg-white/80 backdrop-blur px-4 py-3 ring-1 ring-rose-300 focus:ring-rose-400 outline-none text-rose-900 placeholder:rose-900/50" />
              <button className="rounded-full bg-rose-600 text-white px-6 py-3 font-medium hover:bg-rose-700 transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
