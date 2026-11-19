import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DesiQo | Kalpanaaa Software Solutions - AI Agent Architecture",
  description:
    "DesiQo is an enterprise AI-assisted platform by Kalpanaaa Software Solutions that prepares brand-safe social media content around company events and festivals with 7-agent governance.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#E8D2B5] text-[#220709] font-sans antialiased selection:bg-[#590907] selection:text-[#FAF4EB] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
