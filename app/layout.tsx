import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanzanian Myeloma Research Group (TMRG)",
  description: "Advancing myeloma diagnosis, treatment, and outcomes across Tanzania.",
  openGraph: {
    title: "TMRG — Tanzanian Myeloma Research Group",
    description:
      "Collaborating to improve myeloma care in Tanzania through research, training, and partnerships.",
    type: "website",
    url: "https://tmrg-site.vercel.app",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
