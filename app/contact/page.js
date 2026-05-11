'use client';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend – just simulate submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/contact', label: 'Contact' }]} />

        <div className="text-center mb-14">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            Contact <span className="text-brand-green">4YaarWin</span>
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            Have a question or need help? Our team is here 24/7 to assist you.
            Reach out and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-10">
              {[
                { icon: '✉️', label: 'Email Support', value: 'support@4yaarwin.com' },
                { icon: '💬', label: 'Live Chat', value: 'Available 24/7 on platform' },
                { icon: '📞', label: 'Customer Care', value: 'Via platform only' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-4 border border-brand-border flex items-center gap-4">
                  <span className="text-2xl w-10 text-center">{item.icon}</span>
                  <div>
                    <p className="text-brand-green font-display font-semibold text-sm">{item.label}</p>
                    <p className="text-white/60 font-body text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6 border border-brand-green/20 shadow-glow-sm">
              <h3 className="font-display font-bold text-xl text-white mb-2">Quick Help</h3>
              <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
                For fastest support, visit the 4YaarWin platform directly and use the in-app
                live chat feature. Most issues are resolved within minutes.
              </p>
              <a
                href="https://4yaarwin.com/#/register?invitationCode=64747166955"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-2.5 rounded-xl text-sm block text-center"
              >
                Open 4YaarWin Platform
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-3xl p-8 border border-brand-border shadow-card">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 font-body">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-2xl text-white mb-6">Send a Message</h2>
                <div className="space-y-4">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your full name' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-white/60 font-body text-sm mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-brand-dark-2 border border-brand-border rounded-xl px-4 py-3 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 transition-colors"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/60 font-body text-sm mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your issue or question..."
                      rows={4}
                      className="w-full bg-brand-dark-2 border border-brand-border rounded-xl px-4 py-3 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-brand-green/50 transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="btn-primary w-full py-4 rounded-xl text-base shadow-glow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
