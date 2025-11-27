import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#9333ea",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default:
      "InfoTech - Student Project for Technology and Innovation | OSUT Cluj",
    template: "%s | InfoTech OSUT",
  },
  description:
    "InfoTech is a student project by OSUT Cluj at UTCN Cluj-Napoca dedicated to technology education, programming workshops, career development trainings, and tech events like InfoNight, InfoWeek, and ContestNight.",
  keywords: [
    "InfoTech",
    "InfoTech OSUT",
    "student project",
    "technology",
    "programming",
    "workshops",
    "coding",
    "innovation",
    "tech community",
    "computer science",
    "software development",
    "OSUT Cluj",
    "UTCN",
    "Cluj-Napoca",
    "career development",
    "InfoNight",
    "InfoWeek",
    "ContestNight",
    "tech trainings",
    "student events",
    "IT internship",
    "tech career",
  ],
  authors: [{ name: "OSUT Cluj", url: "https://osut.org" }],
  creator: "InfoTech Team",
  publisher: "OSUT Cluj",
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
  openGraph: {
    type: "website",
    url: "https://infotech.osut.org/",
    title: "InfoTech - Student Project for Technology and Innovation",
    description:
      "Join InfoTech at UTCN Cluj-Napoca for technology education, programming workshops, career trainings, and networking events. Connect with tech enthusiasts and launch your IT career.",
    images: [
      {
        url: "/images/logo/infotech.png",
        width: 1200,
        height: 630,
        alt: "InfoTech - OSUT Cluj Student Organization Logo",
      },
    ],
    siteName: "InfoTech",
    locale: "en_US",
    alternateLocale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfoTech - Student Project for Technology and Innovation",
    description:
      "Join InfoTech for technology education, programming workshops, and career development at UTCN Cluj-Napoca.",
    images: ["/images/logo/infotech.png"],
    creator: "@infotech_osut",
  },
  icons: {
    icon: [
      { url: "/images/logo/infotech.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/infotech.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/infotech.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://infotech.osut.org"),
  alternates: {
    canonical: "https://infotech.osut.org",
    languages: {
      en: "https://infotech.osut.org/en",
      ro: "https://infotech.osut.org/ro",
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=Momo+Trust+Display&display=swap"
          rel="stylesheet"
        />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logo/infotech.png"
        />

        <meta name="geo.region" content="RO-CJ" />
        <meta name="geo.placename" content="Cluj-Napoca" />
        <meta name="geo.position" content="46.7712;23.6236" />
        <meta name="ICBM" content="46.7712, 23.6236" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
