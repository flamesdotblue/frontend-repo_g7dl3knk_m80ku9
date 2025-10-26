import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedDesigns from './components/FeaturedDesigns';
import Testimonials from './components/Testimonials';
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
            <a href="#explore" className="hover:text-rose-900">Why Us</a>
            <a href="#designs" className="hover:text-rose-900">Designs</a>
            <a href="#contact" className="hover:text-rose-900">Contact</a>
            <a href="#" className="rounded-full bg-rose-600 text-white px-4 py-2 font-medium hover:bg-rose-700 transition">Order Now</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Features />
        <FeaturedDesigns />
        <Testimonials />
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-rose-100 bg-rose-50/50">
        <div className="container mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Brand</h4>
            <p className="text-rose-900/70 text-sm">A premium, elegant, and professional nail art service with same-day delivery.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-rose-900/80 text-sm">
              <li><a href="#designs" className="hover:text-rose-900">Trending</a></li>
              <li><a href="#designs" className="hover:text-rose-900">Minimal</a></li>
              <li><a href="#designs" className="hover:text-rose-900">Seasonal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-rose-900/80 text-sm">
              <li><a href="#" className="hover:text-rose-900">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-rose-900">Refund Policy</a></li>
              <li><a href="#" className="hover:text-rose-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <p className="text-sm text-rose-900/70">Instagram • Pinterest • TikTok</p>
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
