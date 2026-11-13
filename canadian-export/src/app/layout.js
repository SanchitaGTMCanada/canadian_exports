
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Canadiana Exports | Canadian Products, Global Markets",
    template: "%s | Canadiana Exports",
  },
  description:
    "Canadiana Exports connects global markets with trusted Canadian suppliers through procurement, sourcing, logistics, and international trade solutions.",
  applicationName: "Canadiana Exports",
  icons: {
    icon: "/logo/logo.jpg",
    shortcut: "/logo/logo.jpg",
    apple: "/logo/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
