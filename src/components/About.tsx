import Image from "next/image";
import { Award, Star, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Star, value: "5000+", label: "Happy Clients" },
  { icon: Shield, value: "Premium", label: "Products" },
  { icon: Clock, value: "10 AM - 8 PM", label: "Mon - Sat" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-72 h-72 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold text-sm uppercase tracking-[0.25em] font-medium">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-playfair leading-tight">
              Where Beauty Meets{" "}
              <span className="text-gold">Excellence</span>
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-6" />
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
              Maneo Salon in KP Nagar, Vijayawada offers a wide range of hair
              and beauty services to cater to all your grooming needs. Whether
              you&apos;re looking for a stylish haircut, a trendy hair color, or
              a rejuvenating facial, our team of skilled professionals is
              dedicated to providing top-notch services.
            </p>
            <p className="text-white/40 text-base leading-relaxed mb-8">
              With a relaxing and inviting atmosphere, you can indulge in a
              pampering experience while our experts work their magic to enhance
              your natural beauty.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-dark-soft rounded-xl p-4 border border-white/5 hover:border-gold/20 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-gold mb-2" />
                    <div className="text-white font-bold text-lg">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/laptophome.png"
                alt="MANEO Salon Interior"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gold text-dark p-4 sm:p-6 rounded-2xl shadow-xl max-w-[160px] sm:max-w-[200px]">
              <div className="text-2xl sm:text-3xl font-bold">#1</div>
              <div className="text-[10px] sm:text-sm font-medium leading-tight mt-1">
                Best Unisex Salon in Vijayawada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
