import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: {
    default: 'Ethan Willers',
    template: '%s | Ethan Willers',
  },
  description: 'I dont know what to do.',
  openGraph: {
    title: 'Ethan Willers',
    description: 'I dont know what to do.',
    url: '',
    siteName: 'Ethan Willers',
    // images: [
    //   {
    //     url: '',
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Ethan Willers',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
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
    <html lang="en">
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="border-2 border-black">
          {children}
        </main>
      </body>
    </html>
  );
}
