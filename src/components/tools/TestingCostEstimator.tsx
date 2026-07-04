import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, AlertTriangle, ArrowRight, Building2, Clock } from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/business';

const reasonOptions = [
  { value: 'general', label: 'General Homeowner Check' },
  { value: 'real-estate', label: 'Real Estate Transaction' },
  { value: 'post-mitigation', label: 'Post-Mitigation Retest' },
  { value: 'commercial', label: 'Commercial Property' },
];

const foundationAreaOptions = [
  { value: '1', label: '1 Foundation Area' },
  { value: '2', label: '2 Foundation Areas' },
  { value: '3', label: '3+ Foundation Areas' },
];

const testTypeOptions = [
  { value: 'short-term', label: 'Standard 48-Hour Short-Term' },
  { value: 'long-term', label: 'Long-Term Test (90+ days)' },
];

interface TestResult {
  low: number;
  high: number;
  explanation: string;
  isCommercial?: boolean;
  isLongTerm?: boolean;
}

function calculateTestingCost(reason: string, areas: string, testType: string): TestResult {
  // Handle commercial case
  if (reason === 'commercial') {
    return {
      low: 0,
      high: 0,
      explanation: '',
      isCommercial: true,
    };
  }

  // Handle long-term case
  if (testType === 'long-term') {
    return {
      low: 0,
      high: 0,
      explanation: 'Long-term radon testing runs for 90 days or more and involves different equipment, monitoring requirements, and scheduling considerations. Pricing varies more significantly based on the specific monitoring period and equipment used.',
      isLongTerm: true,
    };
  }

  // Standard short-term calculation
  const baseLow = 150;
  const baseHigh = 250;
  const areaCount = parseInt(areas);

  let additionalCost = 0;
  if (areaCount === 2) {
    additionalCost = 50;
  } else if (areaCount >= 3) {
    additionalCost = 75;
  }

  const totalLow = baseLow + additionalCost;
  const totalHigh = baseHigh + additionalCost * 1.5;

  // Build explanation
  const reasonText = {
    'general': 'routine homeowner testing',
    'real-estate': 'real estate transaction testing',
    'post-mitigation': 'post-mitigation verification testing',
  }[reason] || 'testing';

  const areaExplanation = areaCount === 1
    ? 'one foundation area'
    : `${areaCount} foundation areas, each requiring separate monitoring`;

  return {
    low: Math.round(totalLow),
    high: Math.round(totalHigh),
    explanation: `Your estimate is based on ${reasonText} with ${areaExplanation}. ${areaCount > 1 ? 'Each additional foundation area requires its own monitor placement, which adds to the base cost.' : ''} ${reason === 'real-estate' ? 'Real estate testing includes documentation formatted for transaction requirements.' : ''} ${reason === 'post-mitigation' ? 'Post-mitigation retesting confirms your system is working as designed.' : ''}`,
  };
}

export function TestingCostEstimator() {
  const [reason, setReason] = useState('');
  const [foundationAreas, setFoundationAreas] = useState('');
  const [testType, setTestType] = useState('');
  const [result, setResult] = useState<TestResult | null>(null);

  const handleCalculate = () => {
    if (reason && foundationAreas && testType) {
      const costResult = calculateTestingCost(reason, foundationAreas, testType);
      setResult(costResult);
    }
  };

  const canCalculate = reason && foundationAreas && testType;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent-100 rounded-lg p-2">
          <DollarSign className="w-6 h-6 text-accent-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-neutral-900">
          Radon Testing Cost Estimator
        </h3>
      </div>

      <p className="text-neutral-600 text-sm mb-6">
        Get a personalized estimate based on your testing situation, property layout, and test type.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-neutral-700 mb-2">
            Reason for Testing
          </label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              setResult(null);
            }}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select your reason...</option>
            {reasonOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="areas" className="block text-sm font-medium text-neutral-700 mb-2">
            Number of Foundation Areas to Test
          </label>
          <select
            id="areas"
            value={foundationAreas}
            onChange={(e) => setFoundationAreas(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            disabled={reason === 'commercial'}
          >
            <option value="">Select number of areas...</option>
            {foundationAreaOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <p className="text-xs text-neutral-500 mt-1">
            Each distinct lowest-level area (basement, crawlspace, etc.) needs separate testing.
          </p>
        </div>

        <div>
          <label htmlFor="test-type" className="block text-sm font-medium text-neutral-700 mb-2">
            Test Type
          </label>
          <select
            id="test-type"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            disabled={reason === 'commercial'}
          >
            <option value="">Select test type...</option>
            {testTypeOptions.map((opt) => (
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
            ? 'bg-accent-600 text-white hover:bg-accent-700 shadow-md'
            : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
        }`}
      >
        Get My Estimate
      </button>

      {result && (
        <div className="mt-6 rounded-xl p-6 border bg-accent-50 border-accent-200">
          {result.isCommercial ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-accent-600" />
                <span className="font-semibold text-neutral-900">Commercial Testing Required</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Commercial radon testing is quoted separately based on your building's size, number of ground-contact zones, and specific compliance requirements. Costs vary significantly based on square footage and the complexity of multi-zone monitoring.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-neutral-600">
                  <strong>Next step:</strong> Request a site-specific commercial testing quote. We'll evaluate your building's layout and provide a detailed estimate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/services/commercial" className="btn-primary text-center">
                  Learn About Commercial Testing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Request a Quote
                </Link>
              </div>
            </>
          ) : result.isLongTerm ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent-600" />
                <span className="font-semibold text-neutral-900">Long-Term Testing Quote Needed</span>
              </div>
              <p className="text-neutral-700 mb-4">
                {result.explanation}
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-neutral-600">
                  <strong>Recommendation:</strong> Contact us directly to discuss your long-term monitoring needs. We'll help you determine the optimal testing period and provide an accurate quote.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={getPhoneLink()} className="btn-primary text-center">
                  Call {businessConfig.phone}
                </a>
                <Link to="/contact" className="btn-secondary text-center">
                  Request Long-Term Testing Quote
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-4">
                <div className="text-4xl font-heading font-bold text-accent-700">
                  ${result.low} - ${result.high}
                </div>
                <p className="text-sm text-neutral-600 mt-1">Estimated Testing Cost</p>
              </div>

              <p className="text-neutral-700 text-sm mb-4">
                {result.explanation}
              </p>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600">
                    <strong>Disclaimer:</strong> This is an educational estimate based on typical Rockford-area pricing. Actual costs may vary based on your specific property layout, scheduling requirements, and service provider. This is not a substitute for a formal quote.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary text-center">
                  Get an Exact Quote
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
