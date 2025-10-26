import { useState } from 'react';
import { Truck } from 'lucide-react';

const SLOTS = ['10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'];

export default function OrderSection() {
  const [slot, setSlot] = useState(SLOTS[1]);
  const [payment, setPayment] = useState('Card');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Order placed!\nTime slot: ${slot}\nPayment: ${payment}`);
  }

  return (
    <section id="order" className="relative py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="tracking-widest uppercase text-xs text-rose-500/80 mb-2">Fast Checkout</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-rose-950">Order with same-day delivery</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-rose-700">
            <Truck className="h-4 w-4" />
            <span className="text-sm">Courier delivered</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid lg:grid-cols-3 gap-8">
          {/* Details */}
          <div className="lg:col-span-2 rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-rose-100">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-rose-900 mb-1">Full name</label>
                <input required className="w-full rounded-lg border border-rose-200 px-3 py-2 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-900 mb-1">Phone</label>
                <input required type="tel" className="w-full rounded-lg border border-rose-200 px-3 py-2 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-rose-900 mb-1">Address</label>
                <input required className="w-full rounded-lg border border-rose-200 px-3 py-2 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-rose-900 mb-1">Notes (optional)</label>
                <textarea rows={3} className="w-full rounded-lg border border-rose-200 px-3 py-2 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-rose-900 mb-2">Preferred time slot</label>
              <div className="flex flex-wrap gap-2">
                {SLOTS.map((s) => (
                  <button type="button" key={s} onClick={() => setSlot(s)} className={`px-4 py-2 rounded-full text-sm ring-1 ring-rose-200 ${slot === s ? 'bg-rose-600 text-white ring-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50'}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-rose-900 mb-2">Payment</label>
              <div className="flex gap-4 text-sm">
                {['Card','Cash on Delivery'].map((p) => (
                  <label key={p} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ring-1 ring-rose-200 cursor-pointer ${payment === p ? 'bg-rose-600 text-white ring-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50'}`}>
                    <input type="radio" name="payment" value={p} className="hidden" checked={payment === p} onChange={() => setPayment(p)} />
                    {p}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="rounded-3xl bg-rose-50 p-6 ring-1 ring-rose-100">
            <h3 className="font-medium text-rose-900">Order summary</h3>
            <p className="mt-2 text-sm text-rose-900/70">Customized set + same-day delivery</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Design</span><span>Custom</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>Included</span></div>
              <div className="flex justify-between"><span>Est. arrival</span><span>Today</span></div>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-100 flex justify-between font-medium">
              <span>Total</span>
              <span>$39</span>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-300/40 hover:bg-rose-700 transition">Place order</button>
          </aside>
        </form>
      </div>
    </section>
  );
}
