import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA App",
  description: "Best PWA App in the world",
  applicationName: "PWA App",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PWA App",
  },
  formatDetection: {
    telephone: false,
  },

  themeColor: "#000000",
  icons: {
    apple: [
      { url: "/icons/touch-icon-iphone.png" },
      { url: "/icons/touch-icon-ipad.png", sizes: "152x152" },
      { url: "/icons/touch-icon-iphone-retina.png", sizes: "180x180" },
      { url: "/icons/touch-icon-ipad-retina.png", sizes: "167x167" },
    ],
    icon: [
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
  },
  twitter: {
    card: "summary",
    site: "https://yourdomain.com",
    title: "PWA App",
    description: "Best PWA App in the world",
    images: "https://yourdomain.com/icons/android-chrome-192x192.png",
    creator: "@DavidWShadow",
  },
  openGraph: {
    type: "website",
    title: "PWA App",
    description: "Best PWA App in the world",
    siteName: "PWA App",
    url: "https://yourdomain.com",
    images: "https://yourdomain.com/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
