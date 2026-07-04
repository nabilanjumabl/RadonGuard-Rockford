import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, AlertTriangle, ArrowRight, HelpCircle, Fan } from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/business';

const foundationOptions = [
  { value: 'basement', label: 'Basement' },
  { value: 'crawl-space', label: 'Crawl Space' },
  { value: 'slab', label: 'Slab-on-Grade' },
  { value: 'combination', label: 'Combination Foundation' },
];

const radonLevelOptions = [
  { value: '4-8', label: '4-8 pCi/L' },
  { value: '8-15', label: '8-15 pCi/L' },
  { value: '15+', label: '15+ pCi/L' },
  { value: 'not-tested', label: 'Not Yet Tested' },
];

const suctionPointOptions = [
  { value: '1', label: '1 Suction Point' },
  { value: '2+', label: '2+ Suction Points' },
];

interface MitigationResult {
  low: number;
  high: number;
  explanation: string;
  needsTesting: boolean;
  fanNote?: string;
}

function calculateMitigationCost(foundation: string, radonLevel: string, suctionPoints: string): MitigationResult {
  // If not tested, recommend testing first
  if (radonLevel === 'not-tested') {
    return {
      low: 0,
      high: 0,
      explanation: 'Before estimating mitigation costs, you need to know your actual radon level. A professional test will determine whether mitigation is necessary and inform the scope of work required.',
      needsTesting: true,
    };
  }

  let baseLow = 800;
  let baseHigh = 2000;
  let complexity = 'standard';

  // Foundation type adjustments
  if (foundation === 'basement') {
    baseLow = 1000;
    baseHigh = 1500;
  } else if (foundation === 'crawl-space') {
    baseLow = 1200;
    baseHigh = 1800;
    complexity = 'moderate';
  } else if (foundation === 'combination') {
    baseLow = 1500;
    baseHigh = 2000;
    complexity = 'complex';
  }

  // Radon level adjustments
  const isHighLevel = radonLevel === '8-15' || radonLevel === '15+';

  if (isHighLevel) {
    baseLow += 200;
    baseHigh += 300;
    complexity = 'complex';
  }

  // Suction point adjustments
  if (suctionPoints === '2+') {
    baseLow += 300;
    baseHigh += 500;
    complexity = 'complex';
  }

  // Combination always pushes to higher end
  if (foundation === 'combination') {
    baseLow = Math.max(baseLow, 1500);
    baseHigh = Math.max(baseHigh, 2000);
  }

  // Build explanation
  const foundationNote = {
    'basement': 'standard basement with a single suction point',
    'crawl-space': 'crawl space requiring vapor barrier installation',
    'slab': 'slab-on-grade foundation',
    'combination': 'combination foundation (multiple types) requiring multiple suction strategies',
  }[foundation];

  const levelNote = isHighLevel
    ? ` Your ${radonLevel === '15+' ? 'very high' : 'elevated'} starting level may require a more powerful fan or additional sealing work.`
    : '';

  const suctionNote = suctionPoints === '2+'
    ? ' Multiple suction points add to both material and labor costs.'
    : '';

  return {
    low: baseLow,
    high: baseHigh,
    explanation: `Your estimate is based on a ${foundationNote}.${levelNote}${suctionNote}`,
    needsTesting: false,
    fanNote: 'Fan replacement typically needed every 5-10 years at a cost of $150-$300.',
  };
}

export function MitigationCostCalculator() {
  const [foundation, setFoundation] = useState('');
  const [radonLevel, setRadonLevel] = useState('');
  const [suctionPoints, setSuctionPoints] = useState('');
  const [result, setResult] = useState<MitigationResult | null>(null);

  const handleCalculate = () => {
    if (foundation && radonLevel && suctionPoints) {
      const costResult = calculateMitigationCost(foundation, radonLevel, suctionPoints);
      setResult(costResult);
    }
  };

  const canCalculate = foundation && radonLevel && suctionPoints;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-success-100 rounded-lg p-2">
          <Calculator className="w-6 h-6 text-success-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-neutral-900">
          Radon Mitigation Cost Calculator
        </h3>
      </div>

      <p className="text-neutral-600 text-sm mb-6">
        Get a personalized mitigation cost estimate based on your home's foundation type, current radon level, and system complexity.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="foundation" className="block text-sm font-medium text-neutral-700 mb-2">
            Foundation Type
          </label>
          <select
            id="foundation"
            value={foundation}
            onChange={(e) => setFoundation(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select foundation type...</option>
            {foundationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="radon-level" className="block text-sm font-medium text-neutral-700 mb-2">
            Current Radon Level (if known)
          </label>
          <select
            id="radon-level"
            value={radonLevel}
            onChange={(e) => setRadonLevel(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select radon level range...</option>
            {radonLevelOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="suction" className="block text-sm font-medium text-neutral-700 mb-2">
            Estimated Suction Points
          </label>
          <select
            id="suction"
            value={suctionPoints}
            onChange={(e) => setSuctionPoints(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select number of suction points...</option>
            {suctionPointOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <p className="text-xs text-neutral-500 mt-1">
            Most homes need 1 suction point; larger or combination foundations may need 2+.
          </p>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!canCalculate}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
          canCalculate
            ? 'bg-success-600 text-white hover:bg-success-700 shadow-md'
            : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
        }`}
      >
        Get My Estimate
      </button>

      {result && (
        <div className="mt-6 rounded-xl p-6 border bg-success-50 border-success-200">
          {result.needsTesting ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-warning-600" />
                <span className="font-semibold text-neutral-900">Testing Required First</span>
              </div>
              <p className="text-neutral-700 mb-4">
                {result.explanation}
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-neutral-600">
                  <strong>Next step:</strong> Use our testing cost estimator to understand the cost of getting your baseline radon reading, or schedule a professional test directly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/radon-testing-cost-calculator" className="btn-primary text-center">
                  Estimate Testing Cost
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/services/short-term-testing" className="btn-secondary text-center">
                  Learn About Testing
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-4">
                <div className="text-4xl font-heading font-bold text-success-700">
                  ${result.low} - ${result.high}
                </div>
                <p className="text-sm text-neutral-600 mt-1">Estimated Mitigation Cost</p>
              </div>

              <p className="text-neutral-700 text-sm mb-4">
                {result.explanation}
              </p>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Fan className="w-5 h-5 text-success-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600">
                    <strong>Long-term cost note:</strong> {result.fanNote}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600">
                    <strong>Disclaimer:</strong> This is an educational estimate based on typical Rockford-area pricing. Actual costs depend on your specific foundation conditions, sub-slab soil characteristics, and installation details. A diagnostic assessment provides an exact quote.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary text-center">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href={getPhoneLink()} className="btn-secondary text-center">
                  Call {businessConfig.phone}
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
