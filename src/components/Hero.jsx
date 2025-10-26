import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-[radial-gradient(1200px_600px_at_10%_-10%,#ffe4ec_10%,transparent_60%),radial-gradient(1200px_600px_at_110%_10%,#e8e6ff_10%,transparent_60%),linear-gradient(to_bottom,#fff, #fff)]">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="tracking-[0.2em] uppercase text-xs text-rose-500/80 mb-4">Premium Nail Art • Same-Day Delivery</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-rose-950">
            Bespoke nails. Effortless luxury.
          </h1>
          <p className="mt-5 text-rose-900/70 text-lg">
            Curated designs, glassy finishes, and couture details—customized in seconds and delivered today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#customize"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white px-6 py-3 font-medium shadow-lg shadow-rose-300/40 hover:from-rose-700 hover:to-pink-600 transition"
            >
              Start customizing
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#explore"
              className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 font-medium text-rose-700 ring-1 ring-rose-200 hover:bg-white transition"
            >
              Explore designs
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-rose-900/70">
            <div className="flex -space-x-2">
              {[0,1,2].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-200 to-pink-200 ring-2 ring-white" />
              ))}
            </div>
            <span>2,000+ happy clients this month</span>
          </div>
        </motion.div>

        {/* 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden ring-1 ring-rose-100/60 bg-gradient-to-b from-white to-white"
        >
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
