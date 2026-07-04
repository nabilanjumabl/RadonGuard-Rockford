import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/business';

const navigation = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'Short-Term Testing', path: '/services/short-term-testing' },
      { name: 'Mitigation Installation', path: '/services/mitigation' },
      { name: 'Real Estate Testing', path: '/services/real-estate' },
      { name: 'Post-Mitigation Retesting', path: '/services/post-mitigation' },
      { name: 'Commercial Testing', path: '/services/commercial' },
    ],
  },
  {
    name: 'Free Tools',
    path: '/tools',
    children: [
      { name: 'Radon Risk Calculator', path: '/radon-risk-calculator' },
      { name: 'Testing Cost Estimator', path: '/radon-testing-cost-calculator' },
      { name: 'Mitigation Cost Calculator', path: '/radon-mitigation-cost-calculator' },
      { name: 'Retest Timing Tool', path: '/radon-retest-calculator' },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-primary-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="hidden sm:inline">Serving Rockford, IL and Winnebago County</span>
          <a
            href={getPhoneLink()}
            className="flex items-center gap-1 hover:text-primary-200 transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            {businessConfig.phone}
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-neutral-900">
                {businessConfig.name === '[BUSINESS NAME]' ? 'Radon Solutions' : businessConfig.name}
              </span>
              <span className="block text-xs text-neutral-500">{businessConfig.primaryArea}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                        isActive(item.path) || item.children.some(c => isActive(c.path))
                          ? 'text-primary-600'
                          : 'text-neutral-700 hover:text-primary-600'
                      }`}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-0 pt-2"
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="bg-white rounded-lg shadow-lg py-2 min-w-[220px] border border-neutral-100">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActive(child.path)
                                  ? 'bg-primary-50 text-primary-600 font-medium'
                                  : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-600'
                        : 'text-neutral-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={getPhoneLink()}
              className="btn-primary text-sm"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <span className="block px-3 py-2 text-sm font-medium text-neutral-700">
                        {item.name}
                      </span>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 text-sm rounded-md ${
                              isActive(child.path)
                                ? 'bg-primary-50 text-primary-600 font-medium'
                                : 'text-neutral-600 hover:bg-neutral-50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-md ${
                        isActive(item.path)
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <a
                  href={getPhoneLink()}
                  className="btn-primary w-full text-center"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
