export function MitigationDiagram() {
  return (
    <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 my-8">
      <h4 className="text-lg font-heading font-bold text-neutral-900 mb-6 text-center">
        How a Sub-Slab Depressurization System Works
      </h4>
      <svg viewBox="0 0 500 350" className="w-full max-w-lg mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ground/Soil */}
        <rect x="0" y="280" width="500" height="70" fill="#78716c" />
        <text x="250" y="320" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          Soil (Radon Gas Source)
        </text>

        {/* Foundation/Basement Floor */}
        <rect x="50" y="200" width="200" height="15" fill="#44403c" />
        <text x="150" y="192" textAnchor="middle" fill="#44403c" fontSize="10" fontWeight="600">
          Foundation Slab
        </text>

        {/* Basement Space */}
        <rect x="50" y="80" width="200" height="120" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="2" />

        {/* House Walls */}
        <rect x="45" y="60" width="10" height="160" fill="#44403c" />
        <rect x="245" y="60" width="10" height="160" fill="#44403c" />

        {/* Roof */}
        <polygon points="45,60 150,20 255,60" fill="#71717a" />

        {/* Suction Point/Pipe Entry */}
        <circle cx="150" cy="207" r="8" fill="#0ea5e9" />
        <rect x="140" y="200" width="20" height="15" fill="#0ea5e9" />

        {/* Pipe going up */}
        <rect x="145" y="40" width="10" height="165" fill="#0369a1" />

        {/* Radon arrows under slab */}
        <path d="M80 260 L150 230 L220 260" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="5,3" />
        <polygon points="150,215 145,225 155,225" fill="#ef4444" />

        {/* Fan Unit */}
        <rect x="280" y="80" width="60" height="40" rx="8" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2" />
        <text x="310" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
          FAN
        </text>

        {/* Pipe to fan */}
        <rect x="155" y="55" width="125" height="10" fill="#0369a1" />
        <polygon points="280,60 280,50 275,55" fill="#0ea5e9" />

        {/* Pipe from fan up */}
        <rect x="305" y="20" width="10" height="60" fill="#0369a1" />

        {/* Exhaust above roof */}
        <rect x="400" y="40" width="10" height="50" fill="#0369a1" />
        <polygon points="405,20 395,40 415,40" fill="#0369a1" />

        {/* Exhaust cloud */}
        <circle cx="405" cy="65" r="12" fill="#a5f3fc" opacity="0.7" />
        <circle cx="420" cy="55" r="8" fill="#a5f3fc" opacity="0.5" />
        <circle cx="398" cy="50" r="6" fill="#a5f3fc" opacity="0.5" />
        <text x="405" y="95" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="600">
          Safe Vent
        </text>

        {/* Arrow showing airflow */}
        <path d="M150 240 L150 220" stroke="#22c55e" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M170 55 L275 55" stroke="#22c55e" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M315 80 L315 30" stroke="#22c55e" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

        {/* Arrowhead marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
          </marker>
        </defs>

        {/* Labels */}
        <text x="95" y="140" fill="#44403c" fontSize="10" fontWeight="600">
          Basement
        </text>
        <text x="90" y="155" fill="#44403c" fontSize="10" fontWeight="600">
          Living Space
        </text>

        {/* Radon gas movement indicator */}
        <text x="150" y="250" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="600">
          Radon Gas
        </text>
        <text x="150" y="262" textAnchor="middle" fill="#ef4444" fontSize="8">
          drawn out
        </text>

        {/* Manometer gauge */}
        <rect x="60" y="100" width="25" height="40" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
        <rect x="65" y="115" width="15" height="5" fill="#22c55e" />
        <rect x="65" y="125" width="15" height="5" fill="#ef4444" />
        <text x="72" y="150" textAnchor="middle" fill="#64748b" fontSize="7">
          Gauge
        </text>
      </svg>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <span>Radon gas from soil</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <span>Airflow direction</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-primary-500" />
          <span>System components</span>
        </div>
      </div>
    </div>
  );
}
