import Hero from './components/Hero';
import ExploreGallery from './components/ExploreGallery';
import Customizer from './components/Customizer';
import OrderSection from './components/OrderSection';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-950">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-tight">
            <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">Éclat Nails</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-rose-900/80">
            <a href="#explore" className="hover:text-rose-900">Explore</a>
            <a href="#customize" className="hover:text-rose-900">Customize</a>
            <a href="#order" className="hover:text-rose-900">Order</a>
            <a href="#contact" className="rounded-full bg-rose-600 text-white px-4 py-2 font-medium hover:bg-rose-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <ExploreGallery />
        <Customizer />
        <OrderSection />
      </main>

      {/* Footer with About & Contact */}
      <footer id="contact" className="border-t border-rose-100 bg-rose-50/50">
        <div className="container mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <p className="text-rose-900/70 text-sm">We deliver elegant, custom nail designs crafted with premium, salon-grade materials — same-day, right to you.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-rose-900/80 text-sm">
              <li>Email: hello@eclatnails.com</li>
              <li>Phone: +1 (555) 012-3456</li>
              <li>Hours: 9:00 – 20:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Visit</h4>
            <div className="aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-rose-100">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.145804153805!2d-73.9851306!3d40.7588965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMDYuNiJX!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <p className="text-sm text-rose-900/70">Instagram • Pinterest • TikTok</p>
            <a href="#explore" className="mt-4 inline-block rounded-full bg-white ring-1 ring-rose-200 px-4 py-2 text-sm text-rose-700 hover:bg-rose-50">See our latest</a>
          </div>
        </div>
        <div className="border-t border-rose-100 py-4 text-center text-sm text-rose-900/70">© {new Date().getFullYear()} Éclat Nails. All rights reserved.</div>
      </footer>

      {/* Sticky chat/support widget */}
      <a
        href="#"
        aria-label="Chat support"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-4 py-3 shadow-lg shadow-rose-300/40 hover:bg-rose-700 transition"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Chat</span>
      </a>
    </div>
  );
}

export default App;
