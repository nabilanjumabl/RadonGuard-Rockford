import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Shield, Award, Clock } from 'lucide-react';
import { businessConfig, getPhoneLink, getMapsLink } from '../../config/business';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Trust signals bar */}
      <div className="bg-primary-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-primary-300 mb-2" />
              <span className="font-semibold text-lg">Illinois Licensed</span>
              <span className="text-sm text-primary-200">Licensed by Illinois Emergency Management Agency</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-primary-300 mb-2" />
              <span className="font-semibold text-lg">EPA Certified</span>
              <span className="text-sm text-primary-200">Following EPA testing protocols</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-primary-300 mb-2" />
              <span className="font-semibold text-lg">Fast Scheduling</span>
              <span className="text-sm text-primary-200">Results in 48 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              {businessConfig.name === '[BUSINESS NAME]' ? 'Radon Solutions' : businessConfig.name}
            </h3>
            <p className="text-neutral-400 mb-4">
              {businessConfig.tagline} in {businessConfig.primaryArea} and surrounding areas.
            </p>
            <div className="space-y-2">
              <a href={getPhoneLink()} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                {businessConfig.phone}
              </a>
              <a href={getMapsLink()} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" />
                {businessConfig.address}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/short-term-testing" className="text-neutral-400 hover:text-white transition-colors">
                  Short-Term Testing
                </Link>
              </li>
              <li>
                <Link to="/services/mitigation" className="text-neutral-400 hover:text-white transition-colors">
                  Mitigation Installation
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate" className="text-neutral-400 hover:text-white transition-colors">
                  Real Estate Testing
                </Link>
              </li>
              <li>
                <Link to="/services/post-mitigation" className="text-neutral-400 hover:text-white transition-colors">
                  Post-Mitigation Retesting
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-neutral-400 hover:text-white transition-colors">
                  Commercial Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Area</h4>
            <ul className="space-y-1 text-neutral-400">
              {businessConfig.serviceAreas.map((area) => (
                <li key={area}>{area}, IL</li>
              ))}
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tools & Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/radon-risk-calculator" className="text-neutral-400 hover:text-white transition-colors">
                  Radon Risk Calculator
                </Link>
              </li>
              <li>
                <Link to="/radon-testing-cost-calculator" className="text-neutral-400 hover:text-white transition-colors">
                  Testing Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/radon-mitigation-cost-calculator" className="text-neutral-400 hover:text-white transition-colors">
                  Mitigation Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/radon-retest-calculator" className="text-neutral-400 hover:text-white transition-colors">
                  Retest Timing Tool
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              {currentYear} {businessConfig.name === '[BUSINESS NAME]' ? 'Radon Solutions' : businessConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
