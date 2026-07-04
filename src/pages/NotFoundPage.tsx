import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Phone, FileQuestion } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { businessConfig, getPhoneLink } from '../config/business';

export function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | RadonGuard Rockford</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to RadonGuard Rockford for radon testing and mitigation services." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="py-20 md:py-32">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <FileQuestion className="w-24 h-24 text-primary-300 mx-auto" />
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
              Page Not Found
            </h1>

            <p className="text-lg text-neutral-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/" className="btn-primary">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <a href={getPhoneLink()} className="btn-secondary">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6">
              <h2 className="font-heading font-bold text-lg text-neutral-900 mb-4">
                Looking for something specific?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Link to="/services/short-term-testing" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4" />
                  Short-Term Radon Testing
                </Link>
                <Link to="/services/mitigation" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4" />
                  Mitigation Installation
                </Link>
                <Link to="/services/real-estate" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4" />
                  Real Estate Testing
                </Link>
                <Link to="/radon-risk-calculator" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4" />
                  Radon Risk Calculator
                </Link>
                <Link to="/contact" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4" />
                  Contact Us
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4" />
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
