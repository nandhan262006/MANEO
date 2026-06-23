import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://maneosalon.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MANEO Salon | #1 Hair & Beauty Salon in Vijayawada",
    template: "%s | MANEO Salon",
  },
  description:
    "Maneo Salon in KP Nagar, Vijayawada offers premium hair, skin, and nail services. Book your appointment today!",
  keywords: [
    "salon in Vijayawada",
    "hair salon Vijayawada",
    "beauty parlour Vijayawada",
    "best salon in KP Nagar",
    "unisex salon Vijayawada",
    "hair cut Vijayawada",
    "facial Vijayawada",
    "manicure pedicure Vijayawada",
    "MANEO salon",
    "beauty services Vijayawada",
  ],
  authors: [{ name: "MANEO Salon" }],
  creator: "MANEO Salon",
  publisher: "MANEO Salon",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MANEO Salon",
    title: "MANEO Salon | #1 Hair & Beauty Salon in Vijayawada",
    description:
      "Premium hair, skin, and nail services in KP Nagar, Vijayawada. Book your appointment today!",
    url: siteUrl,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "MANEO Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANEO Salon | #1 Hair & Beauty Salon in Vijayawada",
    description:
      "Premium hair, skin, and nail services in KP Nagar, Vijayawada.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "MANEO Salon",
              image: `${siteUrl}/logo.png`,
              url: siteUrl,
              telephone: "+919292055555",
              email: "info@maneosalon.in",
              description:
                "#1 Hair & Beauty Salon in Vijayawada offering premium hair, skin, and nail services.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "4th Floor, 59a-1-5/1, Beside Maris Stella College, Beside Nissan Car Showroom, K P Nagar",
                addressLocality: "Vijayawada",
                addressRegion: "Andhra Pradesh",
                postalCode: "520008",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 16.5062,
                longitude: 80.6480,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "20:00",
                },
              ],
              priceRange: "₹₹",
              sameAs: [
                "https://www.instagram.com/maneosalon",
                "https://www.facebook.com/maneosalon",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
