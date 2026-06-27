"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-gold-dark text-sm uppercase tracking-[0.25em] font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-4 mb-4 font-heading">
            Book an Appointment
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
          <p className="text-dark/60 mt-4 max-w-2xl mx-auto text-lg">
            Ready to transform your look? Schedule your visit today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-dark/60">
                  We&apos;ve received your request. We&apos;ll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-dark placeholder:text-dark/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-dark placeholder:text-dark/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-dark placeholder:text-dark/30"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-dark placeholder:text-dark/30 resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <a
                  href="https://wa.me/919292055555?text=Hi%20MANEO%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-dark hover:bg-dark-soft text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-center"
                >
                  Book on WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-dark mb-6">
                Visit Us
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Address</p>
                    <p className="text-dark/60 text-xs sm:text-sm mt-0.5 break-words">
                      4th Floor, 59a-1-5/1, Beside Maris Stella College,
                      Beside Nissan Car Showroom, K P Nagar, Vijayawada, AP -
                      520008
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Phone</p>
                    <a
                      href="tel:+919292055555"
                      className="text-gold-dark text-sm mt-0.5 hover:text-gold transition-colors"
                    >
                      +91 92920 55555
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Hours</p>
                    <p className="text-dark/60 text-sm mt-0.5">
                      Mon - Sat: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute top-5 right-5 w-32 h-32 border border-gold rounded-full" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold text-white mb-2">
                  Subscribe &amp; Get 10% Off
                </h3>
                <p className="text-white/50 text-sm mb-5">
                  Join our newsletter for exclusive offers and beauty tips
                </p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full sm:flex-1 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2.5 rounded-xl transition-all text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
