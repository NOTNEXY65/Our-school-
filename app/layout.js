import { Merriweather, Playfair_Display } from 'next/font/google';
import './globals.css';

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair'
});

export const metadata = {
  title: 'Our School - Business Demo',
  description: 'Next.js School Web Showcase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

