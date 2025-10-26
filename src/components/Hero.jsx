import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-white">
      {/* Soft glow backgrounds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center py-16">
        <div className="max-w-xl">
          <p className="tracking-widest uppercase text-xs text-rose-500/80 mb-3">Premium Nail Art • Same-Day Delivery</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-rose-950">
            Elegant, custom nail designs delivered to your door
          </h1>
          <p className="mt-5 text-rose-900/70 text-lg">
            Browse premium styles, customize every detail, and book a same-day delivery. Luxury, made effortless.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#customize"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-300/40 hover:bg-rose-700 transition"
            >
              Customize Your Nails Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#explore"
              className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 font-medium text-rose-700 ring-1 ring-rose-200 hover:ring-rose-300 transition"
            >
              Explore Designs
            </a>
          </div>
          {/* Social proof */}
          <div className="mt-8 flex items-center gap-6 text-sm text-rose-900/70">
            <div className="flex -space-x-2">
              {['/avatars/a1.png','/avatars/a2.png','/avatars/a3.png'].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-200 to-pink-200 ring-2 ring-white" />
              ))}
            </div>
            <span>Trusted by 2k+ stylish customers</span>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden ring-1 ring-rose-100/60 bg-white">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Gradient overlay for elegance - non-blocking */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}
