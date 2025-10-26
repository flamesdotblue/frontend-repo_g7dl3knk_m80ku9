import { useMemo, useState } from 'react';
import { Heart } from 'lucide-react';

const SHAPES = ['Oval', 'Coffin', 'Almond', 'Square'];
const LENGTHS = ['Short', 'Medium', 'Long'];

function NailPreview({ color, finish, shape, length }) {
  const glow = finish === 'Glossy' ? 'drop-shadow-[0_8px_16px_rgba(244,63,94,0.25)]' : '';
  const gradient = useMemo(() => {
    if (finish === 'Matte') return `linear-gradient(145deg, ${color}, ${color})`;
    return `linear-gradient(145deg, ${color}, #ffffff)`;
  }, [color, finish]);

  const widthClass = useMemo(() => {
    switch (shape) {
      case 'Coffin':
        return 'rounded-t-xl';
      case 'Almond':
        return 'rounded-t-full';
      case 'Square':
        return 'rounded-t-md';
      default:
        return 'rounded-t-2xl';
    }
  }, [shape]);

  const heightClass = useMemo(() => {
    switch (length) {
      case 'Short':
        return 'h-28';
      case 'Long':
        return 'h-44';
      default:
        return 'h-36';
    }
  }, [length]);

  return (
    <div className={`mx-auto w-24 ${heightClass} ${widthClass} rounded-b-[2rem] border border-white/40`} style={{ background: gradient }}>
      <div className={`h-full w-full ${glow} relative`}> 
        <div className="absolute inset-0 rounded-[1.2rem]" style={{ background: 'radial-gradient(120px 60px at 30% 20%, rgba(255,255,255,0.45), transparent)' }} />
      </div>
    </div>
  );
}

export default function Customizer() {
  const [color, setColor] = useState('#f7d0c7');
  const [finish, setFinish] = useState('Glossy');
  const [shape, setShape] = useState('Oval');
  const [length, setLength] = useState('Medium');

  return (
    <section id="customize" className="relative py-16 sm:py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="tracking-widest uppercase text-xs text-rose-500/80 mb-2">Interactive Tool</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-rose-950">Design your perfect set</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-rose-700">
            <Heart className="h-4 w-4" />
            <span className="text-sm">Live preview</span>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          {/* Preview */}
          <div className="rounded-3xl bg-white p-8 ring-1 ring-rose-100">
            <div className="mx-auto w-full max-w-xs">
              <NailPreview color={color} finish={finish} shape={shape} length={length} />
            </div>
            <p className="mt-6 text-center text-sm text-rose-900/70">Tip: drag to select a color or paste a hex code</p>
          </div>

          {/* Controls */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-rose-100">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-rose-900 mb-2">Primary Color</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-16 rounded cursor-pointer bg-white" />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="flex-1 rounded-lg border border-rose-200 px-3 py-2 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
                <div className="mt-3 flex gap-2">
                  {['#f7d0c7','#f4e1ce','#e9e2ff','#f6e7db','#fff1f1','#f0f3ff'].map((sw) => (
                    <button key={sw} onClick={() => setColor(sw)} className="h-8 w-8 rounded-full ring-2 ring-white shadow" style={{ background: sw }} aria-label={`Set color ${sw}`} />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-rose-900 mb-2">Finish</label>
                <div className="flex flex-wrap gap-2">
                  {['Glossy','Matte'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFinish(f)}
                      className={`px-4 py-2 rounded-full text-sm ring-1 ring-rose-200 ${finish === f ? 'bg-rose-600 text-white ring-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-rose-900 mb-2">Shape</label>
                <div className="flex flex-wrap gap-2">
                  {SHAPES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setShape(s)}
                      className={`px-4 py-2 rounded-full text-sm ring-1 ring-rose-200 ${shape === s ? 'bg-rose-600 text-white ring-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-rose-900 mb-2">Length</label>
                <div className="flex flex-wrap gap-2">
                  {LENGTHS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLength(l)}
                      className={`px-4 py-2 rounded-full text-sm ring-1 ring-rose-200 ${length === l ? 'bg-rose-600 text-white ring-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a href="#order" className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-300/40 hover:bg-rose-700 transition">Add to Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
