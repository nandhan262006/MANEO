"use client";

import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";

export default function SubscribePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => {
          setVisible(false);
          setDismissed(true);
        }}
      />
      <div className="relative bg-dark rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl border border-gold/20 animate-scale-in mx-4">
        <button
          onClick={() => {
            setVisible(false);
            setDismissed(true);
          }}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <Gift className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 font-heading">
            Get 10% Off
          </h3>
          <p className="text-white/50 text-sm mb-6">
            Subscribe to our newsletter and receive exclusive offers, beauty
            tips, and 10% off your first visit!
          </p>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setVisible(false);
              setDismissed(true);
              window.open("https://wa.me/919292055555?text=Hi%20MANEO%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment", "_blank");
            }}
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
              required
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-xl transition-all duration-300 text-sm"
            >
              Subscribe &amp; Book on WhatsApp
            </button>
          </form>

          <p className="text-white/30 text-xs mt-4">
            No spam, unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
}
