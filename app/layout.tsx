import type { Metadata, Viewport } from 'next';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/font/inter.css';
import '../css/main.css';
import '../css/print.css';
import '../css/form.css';

export const metadata: Metadata = {
  title: 'Nick Hulea',
  description: "Nick Hulea's Website!",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <App>
          <Header />
          {children}
          <Footer />
        </App>
      </body>
    </html>
  );
}
