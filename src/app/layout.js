import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-title",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: 'Création de site internet - Stéphane Gamot',
  description: 'Site élégant, fluide et SEO-friendly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${openSans.variable}`}>
   <body className="bg-light text-dark font-body">
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
