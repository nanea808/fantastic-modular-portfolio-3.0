import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "../components/sidebar";
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../public/fonts/PlayfairDisplay-VariableFont_wght.woff2",
  variable: "--font-playfairDisplay",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enwportfolio.page'),

  title: {
    default: "Ethan Willers",
    template: "%s | Ethan Willers",
  },
  description: "A portfolio to display my projects and web development skills.",
  openGraph: {
    title: "Ethan Willers",
    description: "A portfolio to display my projects and web development skills.",
    url: "https://www.enwportfolio.page",
    siteName: "Ethan Willers",
    // images: [
    //   {
    //     url: '',
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Ethan Willers",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  // verification: {
  //   google: '',
  //   yandex: '',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <body className="antialiased max-w-4xl mb-40 flex justify-center flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
