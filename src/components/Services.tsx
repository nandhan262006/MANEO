import { Scissors, Sparkles, Hand, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair",
    description:
      "From precision cuts to trendy colors and luxurious treatments, our stylists create the perfect look for you.",
    features: ["Precision Cuts", "Hair Coloring", "Keratin Treatment", "Styling"],
    image: "/laptophome.png",
  },
  {
    icon: Sparkles,
    title: "Skin",
    description:
      "Rejuvenating facials and advanced skincare treatments that leave your skin glowing and radiant.",
    features: ["Deep Cleansing", "Anti-Aging", "Gold Facial", "Glow Treatment"],
    image: "/laptophome.png",
  },
  {
    icon: Hand,
    title: "Nail",
    description:
      "Expert manicure and pedicure services with premium products for beautiful, healthy nails.",
    features: ["Manicure", "Pedicure", "Gel Nails", "Nail Art"],
    image: "/laptophome.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-cream overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-gold-dark text-sm uppercase tracking-[0.25em] font-medium">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-4 mb-4 font-playfair">
            Premium Services
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
          <p className="text-dark/60 mt-4 max-w-2xl mx-auto text-lg">
            Indulge in our comprehensive range of beauty services designed to
            pamper and transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                    <div className="bg-gold p-2.5 rounded-full">
                      <Icon className="w-5 h-5 text-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-dark/60 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-dark/50"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold-dark font-medium text-sm group/link"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
