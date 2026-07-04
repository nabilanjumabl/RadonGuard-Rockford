import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle2, Users, Clock, Phone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';

export function AboutPage() {
  return (
    <Layout>
      <SEO pageKey="about" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            We're a licensed radon testing and mitigation company serving Rockford, IL and the surrounding Winnebago County area. Our mission is simple: help homeowners, buyers, and businesses understand and address radon risks with professional, reliable service.
          </p>
        </div>
      </section>

      <article>
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Radon work in Illinois isn't something just anyone can legally perform. Measurement and mitigation professionals are required to be licensed through the Illinois Emergency Management Agency's Division of Nuclear Safety, under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422). That licensing exists specifically to make sure testing is performed correctly and mitigation systems are designed and installed to actually work — not just to check a box.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              We follow those licensing standards on every job, use industry-standard continuous monitoring equipment, and provide clear, documented results — the same documentation standard expected in real estate transactions, insurance discussions, and daycare or commercial compliance requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Illinois Licensed</h3>
                <p className="text-neutral-600 text-sm">
                  Fully licensed through IEMA Division of Nuclear Safety under Illinois Radon Industry Licensing Act
                </p>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">EPA Protocol</h3>
                <p className="text-neutral-600 text-sm">
                  Industry-standard continuous monitoring equipment and EPA testing protocols
                </p>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <CheckCircle2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Documented Results</h3>
                <p className="text-neutral-600 text-sm">
                  Clear, defensible documentation for real estate, insurance, and compliance purposes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Credentials */}
        <section className="py-16 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Our Credentials & Standards
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">Illinois Licensed Measurement Professional</span>
                    <p className="text-sm text-neutral-600">Licensed through Illinois Emergency Management Agency, Division of Nuclear Safety</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">Illinois Licensed Mitigation Contractor</span>
                    <p className="text-sm text-neutral-600">Authorized to design and install radon mitigation systems under 32 Illinois Administrative Code 422</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">EPA Protocol Compliance</span>
                    <p className="text-sm text-neutral-600">Following EPA testing protocols and action level guidelines for all testing services</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">Continuous Monitor Equipment</span>
                    <p className="text-sm text-neutral-600">Using calibrated continuous radon monitors (CRM) for accurate, tamper-resistant results</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Areas We Serve
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              We provide radon testing and mitigation services throughout Rockford and the surrounding Winnebago County area. Within Rockford itself, we regularly work in neighborhoods across Brown Hills, Churchill Park, Edgebrook, and Latham Park, along the Rock River corridor near Kishwaukee Street and Belt Line.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Whether you're in a century-old home near a historic district or a newer build on the north side toward Roscoe, radon risk isn't determined by neighborhood reputation or home price — it's determined by what's in the soil beneath the foundation, which is why testing matters regardless of where in the Rockford area you live.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {businessConfig.serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 p-4 bg-neutral-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-neutral-800">{area}, IL</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zip Codes */}
        <section className="py-16 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Zip Codes Served
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We serve all Rockford area zip codes including:
            </p>
            <div className="flex flex-wrap gap-3">
              {businessConfig.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-medium"
                >
                  {zip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Rockford Radon Context */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Why Rockford Needs Radon Services
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Rockford sits in an area with a genuinely higher radon risk than most of the country, and it isn't a coincidence — it comes down to what's literally under the ground here. The Rockford area, including the wider Rock River Valley, sits on glacial till deposits left behind by the Wisconsin glaciation, along with limestone bedrock in parts of the region.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Both of these geological features are known to produce and channel higher-than-average radon gas from the soil into the air above it, which includes the crawl spaces, basements, and slab foundations of homes throughout the city.
            </p>
            <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
              <p className="text-accent-800 font-medium">
                Winnebago County carries an EPA-assigned Radon Zone of 1, which is the agency's highest risk classification. A Zone 1 designation means the predicted average indoor radon screening level for homes in the county exceeds 4 picocuries per liter (pCi/L) — the EPA's official action level for mitigation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Test Your Home?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-lg">
              Whether you're buying a home, selling one, or simply want to know what's in the air you breathe, we're here to help. Licensed, professional, and committed to accurate results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={getPhoneLink()} className="btn-accent">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
                Contact Us Online
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
