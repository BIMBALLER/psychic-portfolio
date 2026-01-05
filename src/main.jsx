import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
{/* Project Gallery */}
<section className="px-8 py-24 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
    {[1, 2, 3, 4].map((item) => (
      <motion.div 
        key={item}
        whileHover={{ y: -10 }} // Lifts the card up slightly on hover
        className="group relative cursor-pointer"
      >
        <div className="aspect-[4/5] bg-neutral-900 rounded-lg overflow-hidden border border-white/5">
          {/* Imagine an image here */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
        <div className="mt-6 flex justify-between items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Concept 0{item}</p>
            <h3 className="text-xl font-light italic">Project Name</h3>
          </div>
          <span className="text-xs border border-white/20 rounded-full px-3 py-1 text-gray-400 font-mono">2026</span>
        </div>
      </motion.div>
    ))}
  </div>
</section>