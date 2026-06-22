import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet="/laptophome.png" />
        <img
          src="/phonehome.png"
          alt="MANEO Salon"
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/70" />

      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />

      <Navbar />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold-light text-sm uppercase tracking-[0.15em] font-medium">
              #1 Hair & Beauty Salon in Vijayawada
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="font-playfair">MANEO</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 font-light max-w-2xl mx-auto">
            Where elegance meets expertise
          </p>

          <p className="text-base sm:text-lg text-gold-light/70 mb-10 max-w-xl mx-auto">
            Premium hair, skin &amp; nail services in a relaxing sanctuary
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-base tracking-wide shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="border border-white/30 hover:border-gold/50 text-white hover:text-gold px-8 py-3.5 rounded-full transition-all duration-300 text-base tracking-wide backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
