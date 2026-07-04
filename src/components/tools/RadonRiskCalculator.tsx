import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, AlertTriangle, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/business';

const zipCodes = [
  '61101', '61102', '61103', '61104', '61105', '61106',
  '61107', '61108', '61109', '61110', '61114', '61125', '61126',
];

const homeAgeOptions = [
  { value: 'pre-1950', label: 'Pre-1950' },
  { value: '1950-1980', label: '1950-1980' },
  { value: '1980-2000', label: '1980-2000' },
  { value: '2000-present', label: '2000-Present' },
];

const foundationOptions = [
  { value: 'basement', label: 'Basement' },
  { value: 'crawl-space', label: 'Crawl Space' },
  { value: 'slab', label: 'Slab-on-Grade' },
  { value: 'combination', label: 'Combination' },
];

interface RiskResult {
  tier: 'very-high' | 'high' | 'moderate';
  explanation: string;
}

function calculateRisk(homeAge: string, foundation: string): RiskResult {
  const isOlderHome = homeAge === 'pre-1950' || homeAge === '1950-1980';
  const isBasementOrCombo = foundation === 'basement' || foundation === 'combination';
  const isCrawlSpace = foundation === 'crawl-space';
  const isSlab = foundation === 'slab';
  const isNewerHome = homeAge === '2000-present';

  if (isOlderHome && isBasementOrCombo) {
    return {
      tier: 'very-high',
      explanation: `Your home's pre-1980 basement foundation combined with Winnebago County's Zone 1 geology places it in the highest risk category. Older basements typically have more cracks and entry points for soil gas, and the direct ground contact creates multiple pathways for radon intrusion.`,
    };
  }

  if (isBasementOrCombo) {
    return {
      tier: 'high',
      explanation: `Homes with ${foundation === 'combination' ? 'combination foundations (multiple foundation types)' : 'basement foundations'} in Zone 1 areas like Winnebago County carry elevated risk due to the larger below-grade surface area in contact with soil gas. Your ${homeAge === '2000-present' ? 'newer' : homeAge === '1980-2000' ? '1980-2000' : ''} construction helps somewhat, but testing remains important.`,
    };
  }

  if (isCrawlSpace && isOlderHome) {
    return {
      tier: 'high',
      explanation: `Older homes with crawl space foundations in Winnebago County can still carry elevated risk due to exposed soil under the vapor barrier and potential gaps around the perimeter. The ${homeAge === 'pre-1950' ? 'pre-1950' : '1950-1980'} construction era adds to the risk profile.`,
    };
  }

  if (isSlab && isNewerHome) {
    return {
      tier: 'moderate',
      explanation: `Your newer slab-on-grade home has fewer direct soil entry points than a basement, which reduces (but does not eliminate) radon risk. Combined with Zone 1 geology, testing is still recommended to confirm your actual level.`,
    };
  }

  return {
    tier: 'moderate',
    explanation: `Zone 1 geology means all homes in your zip code carry baseline elevated risk. Your ${isCrawlSpace ? 'crawl space' : 'slab'} foundation with ${homeAge} construction represents a moderate risk profile. Testing remains essential to know your actual level.`,
  };
}

const tierStyles = {
  'very-high': {
    bg: 'bg-error-50 border-error-200',
    badge: 'bg-error-600 text-white',
    icon: 'text-error-600',
    label: 'Very High Risk',
  },
  'high': {
    bg: 'bg-warning-50 border-warning-200',
    badge: 'bg-warning-600 text-white',
    icon: 'text-warning-600',
    label: 'High Risk',
  },
  'moderate': {
    bg: 'bg-primary-50 border-primary-200',
    badge: 'bg-primary-600 text-white',
    icon: 'text-primary-600',
    label: 'Moderate Risk',
  },
};

export function RadonRiskCalculator() {
  const [zipCode, setZipCode] = useState('');
  const [homeAge, setHomeAge] = useState('');
  const [foundation, setFoundation] = useState('');
  const [result, setResult] = useState<RiskResult | null>(null);

  const handleCalculate = () => {
    if (zipCode && homeAge && foundation) {
      const riskResult = calculateRisk(homeAge, foundation);
      setResult(riskResult);
    }
  };

  const canCalculate = zipCode && homeAge && foundation;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary-100 rounded-lg p-2">
          <Calculator className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-neutral-900">
          Radon Risk Calculator
        </h3>
      </div>

      <p className="text-neutral-600 text-sm mb-6">
        Enter your home's details below to get an educational risk estimate based on Winnebago County's Zone 1 baseline and your specific construction factors.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="zip-code" className="block text-sm font-medium text-neutral-700 mb-2">
            Zip Code
          </label>
          <select
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select your zip code...</option>
            {zipCodes.map((zip) => (
              <option key={zip} value={zip}>{zip}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="home-age" className="block text-sm font-medium text-neutral-700 mb-2">
            Home Age
          </label>
          <select
            id="home-age"
            value={homeAge}
            onChange={(e) => setHomeAge(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select age range...</option>
            {homeAgeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

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
      </div>

      <button
        onClick={handleCalculate}
        disabled={!canCalculate}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
          canCalculate
            ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
            : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
        }`}
      >
        Calculate My Risk
      </button>

      {result && (
        <div className={`mt-6 rounded-xl p-6 border ${tierStyles[result.tier].bg}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tierStyles[result.tier].badge}`}>
              {tierStyles[result.tier].label}
            </span>
          </div>

          <p className="text-neutral-700 leading-relaxed mb-4">
            {result.explanation}
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <Shield className={`w-5 h-5 mt-0.5 ${tierStyles[result.tier].icon}`} />
              <p className="text-sm text-neutral-600">
                <strong>Important:</strong> This is an educational estimate based on statistical risk factors, not a substitute for actual radon testing. The only way to know your real radon level is to schedule a professional test with a continuous radon monitor.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary text-center">
              Schedule a Professional Test
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={getPhoneLink()} className="btn-secondary text-center">
              Call {businessConfig.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
