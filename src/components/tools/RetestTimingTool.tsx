import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, AlertTriangle, CheckCircle2, ArrowRight, Calendar, XCircle } from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/business';

interface RetestResult {
  title: string;
  urgency: 'immediate' | 'soon' | 'scheduled';
  message: string;
  dateRange?: string;
  explanation: string;
}

function calculateRetestTiming(
  hasSystem: boolean,
  installMonth?: string,
  installYear?: string,
  lastTestMonth?: string,
  lastTestYear?: string,
  neverTested?: boolean
): RetestResult {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if (hasSystem && installMonth && installYear) {
    const installDate = new Date(parseInt(installYear), parseInt(installMonth) - 1);
    const monthsSinceInstall = (currentYear - installDate.getFullYear()) * 12 + (currentMonth - (installDate.getMonth() + 1));
    const daysSinceInstall = Math.floor((currentDate.getTime() - installDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSinceInstall < 30) {
      return {
        title: 'Retest Now — Critical 30-Day Window',
        urgency: 'immediate',
        message: 'You are within your critical 30-day post-installation verification window. Schedule your retest as soon as possible to confirm your system is working.',
        explanation: 'A post-mitigation retest within 30 days of installation is the only way to verify your system reduced radon to safe levels. Don\'t skip this essential step.',
      };
    }

    if (monthsSinceInstall <= 24) {
      const nextTestYear = installDate.getFullYear() + 2;
      const nextTestMonth = installDate.getMonth() + 1;
      return {
        title: "You're Within Your Standard Window",
        urgency: 'scheduled',
        message: `Recommended next retest: around ${getMonthName(nextTestMonth)} ${nextTestYear}`,
        explanation: 'Your system is relatively new. Retesting every 2 years after the initial 30-day verification helps ensure your fan and sealing continue working properly.',
        dateRange: `${getMonthName(nextTestMonth)} ${nextTestYear}`,
      };
    }

    return {
      title: 'Retest Now — Over 2 Years Since Installation',
      urgency: 'soon',
      message: 'It has been over 2 years since your mitigation system was installed. Schedule a retest to confirm the system is still performing effectively.',
      explanation: 'Radon fans typically last 5-10 years, and foundation conditions can change over time. A retest confirms your system is still protecting your home.',
    };
  }

  // No mitigation system
  if (neverTested) {
    return {
      title: 'Schedule Your First Radon Test Now',
      urgency: 'immediate',
      message: "Your home has never been tested for radon. Given Winnebago County's Zone 1 classification, testing should be a priority.",
      explanation: 'The only way to know your home\'s radon level is to test. Winnebago County sits in EPA Zone 1 — the highest risk category — making testing essential for every home.',
    };
  }

  if (lastTestMonth && lastTestYear) {
    const lastTestDate = new Date(parseInt(lastTestYear), parseInt(lastTestMonth) - 1);
    const monthsSinceTest = (currentYear - lastTestDate.getFullYear()) * 12 + (currentMonth - (lastTestDate.getMonth() + 1));
    const yearsSinceTest = monthsSinceTest / 12;

    if (yearsSinceTest >= 5) {
      return {
        title: 'Retest Now — Over 5 Years Since Last Test',
        urgency: 'soon',
        message: 'It has been over 5 years since your last radon test. Radon levels can change over time due to foundation settling, renovations, or soil conditions.',
        explanation: 'Even without a mitigation system, radon levels aren\'t static. Testing every 2-5 years ensures you catch any changes before they become a long-term exposure issue.',
      };
    }

    // Calculate next test window (2-5 years from last test)
    const earliestRetestYear = lastTestDate.getFullYear() + 2;
    const latestRetestYear = lastTestDate.getFullYear() + 5;
    const retestMonth = lastTestDate.getMonth() + 1;

    return {
      title: yearsSinceTest >= 2 ? 'Retest Window Has Begun' : "You're in Your Retest Planning Window",
      urgency: yearsSinceTest >= 2 ? 'soon' : 'scheduled',
      message: `Recommended retest window: ${getMonthName(retestMonth)} ${earliestRetestYear} to ${getMonthName(retestMonth)} ${latestRetestYear}`,
      explanation: 'The standard retest interval is every 2-5 years. Testing at the earlier end of this range is recommended if your last result was close to the action level, or if you\'ve made any foundation-related changes to your home.',
      dateRange: `${getMonthName(retestMonth)} ${earliestRetestYear} – ${getMonthName(retestMonth)} ${latestRetestYear}`,
    };
  }

  return {
    title: 'Schedule a Radon Test',
    urgency: 'immediate',
    message: 'Please provide your information to get a retest recommendation.',
    explanation: '',
  };
}

function getMonthName(month: number): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month - 1] || '';
}

const monthOptions = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 51 }, (_, i) => ({
  value: String(currentYear - 25 + i),
  label: String(currentYear - 25 + i),
}));

export function RetestTimingTool() {
  const [hasSystem, setHasSystem] = useState<string>('');
  const [installMonth, setInstallMonth] = useState('');
  const [installYear, setInstallYear] = useState('');
  const [lastTestMonth, setLastTestMonth] = useState('');
  const [lastTestYear, setLastTestYear] = useState('');
  const [neverTested, setNeverTested] = useState(false);
  const [result, setResult] = useState<RetestResult | null>(null);

  const handleCalculate = () => {
    const testResult = calculateRetestTiming(
      hasSystem === 'yes',
      installMonth || undefined,
      installYear || undefined,
      lastTestMonth || undefined,
      lastTestYear || undefined,
      neverTested
    );
    setResult(testResult);
  };

  const canCalculate = hasSystem && (
    (hasSystem === 'yes' && installMonth && installYear) ||
    (hasSystem === 'no' && (neverTested || (lastTestMonth && lastTestYear)))
  );

  const urgencyStyles = {
    immediate: {
      bg: 'bg-error-50 border-error-200',
      badge: 'bg-error-600 text-white',
      icon: 'text-error-600',
    },
    soon: {
      bg: 'bg-warning-50 border-warning-200',
      badge: 'bg-warning-600 text-white',
      icon: 'text-warning-600',
    },
    scheduled: {
      bg: 'bg-primary-50 border-primary-200',
      badge: 'bg-primary-600 text-white',
      icon: 'text-primary-600',
    },
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary-100 rounded-lg p-2">
          <Clock className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-neutral-900">
          Radon Retest Timing Tool
        </h3>
      </div>

      <p className="text-neutral-600 text-sm mb-6">
        Enter your mitigation system or testing history to get a personalized retest recommendation.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Do you have an existing radon mitigation system?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hasSystem"
                value="yes"
                checked={hasSystem === 'yes'}
                onChange={(e) => {
                  setHasSystem(e.target.value);
                  setResult(null);
                }}
                className="w-4 h-4 text-primary-600"
              />
              <span className="text-neutral-700">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hasSystem"
                value="no"
                checked={hasSystem === 'no'}
                onChange={(e) => {
                  setHasSystem(e.target.value);
                  setResult(null);
                }}
                className="w-4 h-4 text-primary-600"
              />
              <span className="text-neutral-700">No</span>
            </label>
          </div>
        </div>

        {hasSystem === 'yes' && (
          <div className="bg-neutral-50 rounded-lg p-4 space-y-4">
            <p className="text-sm text-neutral-600 font-medium">
              When was your mitigation system installed?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="install-month" className="block text-xs text-neutral-500 mb-1">
                  Month
                </label>
                <select
                  id="install-month"
                  value={installMonth}
                  onChange={(e) => setInstallMonth(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                >
                  <option value="">Select...</option>
                  {monthOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="install-year" className="block text-xs text-neutral-500 mb-1">
                  Year
                </label>
                <select
                  id="install-year"
                  value={installYear}
                  onChange={(e) => setInstallYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                >
                  <option value="">Select...</option>
                  {yearOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {hasSystem === 'no' && (
          <div className="bg-neutral-50 rounded-lg p-4 space-y-4">
            <p className="text-sm text-neutral-600 font-medium">
              When was your last radon test?
            </p>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={neverTested}
                onChange={(e) => {
                  setNeverTested(e.target.checked);
                  if (e.target.checked) {
                    setLastTestMonth('');
                    setLastTestYear('');
                  }
                }}
                className="w-4 h-4 text-primary-600 rounded"
              />
              <span className="text-neutral-700 text-sm">Never tested</span>
            </label>

            {!neverTested && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="test-month" className="block text-xs text-neutral-500 mb-1">
                    Month
                  </label>
                  <select
                    id="test-month"
                    value={lastTestMonth}
                    onChange={(e) => setLastTestMonth(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  >
                    <option value="">Select...</option>
                    {monthOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="test-year" className="block text-xs text-neutral-500 mb-1">
                    Year
                  </label>
                  <select
                    id="test-year"
                    value={lastTestYear}
                    onChange={(e) => setLastTestYear(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  >
                    <option value="">Select...</option>
                    {yearOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}
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
        Get My Retest Recommendation
      </button>

      {result && (
        <div className={`mt-6 rounded-xl p-6 border ${urgencyStyles[result.urgency].bg}`}>
          <div className="flex items-center gap-2 mb-4">
            <Clock className={`w-5 h-5 ${urgencyStyles[result.urgency].icon}`} />
            <span className="font-heading font-bold text-lg text-neutral-900">
              {result.title}
            </span>
          </div>

          <p className="text-neutral-800 font-medium mb-4">
            {result.message}
          </p>

          <p className="text-neutral-700 text-sm mb-4">
            {result.explanation}
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-warning-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-neutral-600">
                <strong>Disclaimer:</strong> This tool provides educational guidance based on standard retest intervals. Actual testing needs may vary based on your specific circumstances, including foundation changes, renovations, or system performance indicators.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary text-center">
              Schedule a Test
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
