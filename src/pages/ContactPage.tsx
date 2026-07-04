import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO pageKey="contact" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            Ready to test your home or business for radon? Have questions about mitigation or Illinois disclosure requirements? We're here to help.
          </p>
        </div>
      </section>

      <article>
        {/* Main Contact Section */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-success-50 border border-success-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-success-600 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-success-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-success-700">
                    We'll get back to you within one business day. For urgent matters, please call us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="(815) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="short-term-testing">Short-Term Radon Testing</option>
                      <option value="mitigation">Radon Mitigation Installation</option>
                      <option value="real-estate">Real Estate Radon Testing</option>
                      <option value="post-mitigation">Post-Mitigation Retesting</option>
                      <option value="commercial">Commercial Radon Testing</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your radon testing needs, timeline, or any questions you have..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                Get in Touch
              </h2>

              {/* NAP Block */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-4">
                  {businessConfig.name === '[BUSINESS NAME]' ? 'Radon Solutions' : businessConfig.name}
                </h3>

                <div className="space-y-4">
                  <a
                    href={getPhoneLink()}
                    className="flex items-start gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <span className="block font-medium">{businessConfig.phone}</span>
                      <span className="text-sm text-neutral-500">Call us directly for fastest response</span>
                    </div>
                  </a>

                  <a
                    href={getMapsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <span className="block font-medium">{businessConfig.address}</span>
                      <span className="text-sm text-neutral-500">Rockford, IL — Click for directions</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="font-heading font-bold text-lg text-neutral-900">
                    Hours of Operation
                  </h3>
                </div>
                <div className="space-y-2 text-neutral-700">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium">{businessConfig.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">{businessConfig.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">{businessConfig.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-4">
                  Service Areas
                </h3>
                <p className="text-neutral-700 mb-4">
                  We provide radon testing and mitigation services throughout Rockford and Winnebago County:
                </p>
                <div className="flex flex-wrap gap-2">
                  {businessConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-white px-3 py-1 rounded-full text-sm text-neutral-700 border border-neutral-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
          <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Prefer to Call?
          </h2>
          <p className="text-primary-100 mb-6">
            For immediate assistance or to schedule a test, give us a call.
          </p>
          <a href={getPhoneLink()} className="btn-accent inline-flex text-lg px-8 py-4">
            <Phone className="w-6 h-6 mr-2" />
            {businessConfig.phone}
          </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
